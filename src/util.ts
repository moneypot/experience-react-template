// Get an error string from GraphQLError and Errors.
// This function is mostly because calling `error.message` on a GraphQLError object

import { HubCurrency } from "./__generated__/graphql";

// returns a user-unfriendly string instead of just its first error message.
export function formatError(e: unknown): string {
  if (!e) return "Unknown error";
  if (
    // Check for GraphQLError
    typeof e === "object" &&
    "response" in e &&
    typeof (e as { response: unknown }).response === "object" &&
    (e as { response: { errors: { message: string }[] } }).response.errors?.[0]
      ?.message
  ) {
    return (e as { response: { errors: { message: string }[] } }).response
      .errors[0].message;
  }
  if (e instanceof Error) return e.message;
  return String(e);
}

// This is for use in currency amount input boxes, especially for transfer / withdrawal.
// We want to truncate the user input into the max precision allowed by the currency.
// Returns null on bad numbers.
// It's also lenient to let the user type 'numbers in progress' like '1.' into the input box.
//
// The output must always be parseable by Number.parseFloat(string).
//
// Usage:
//
//   const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const truncated = truncateToDisplayScale(e.target.value, selectedCurrency);
//     if (truncated !== null) {
//       setAmountString(truncated);
//     }
//   }
//
// f('1.234', { displayUnitScale: 100 }) == '1.23'
// f('-1', ...) == null
// f('1.', ...) == '1.'
export function truncateToDisplayScale(
  value: string,
  currency: Pick<HubCurrency, "displayUnitScale">
): string | null {
  if (!/^\d*\.?\d*$/.test(value)) return null;
  if (!value || value === ".") return value;

  const decimals = Math.log10(currency.displayUnitScale);
  const regex = new RegExp(`^\\d*\\.?\\d{0,${decimals}}$`);

  // If already valid, return as-is
  if (regex.test(value)) {
    return value;
  }

  // Try to truncate
  const parts = value.split(".");
  if (parts.length === 2 && /^\d+$/.test(parts[0]) && /^\d+$/.test(parts[1])) {
    return `${parts[0]}.${parts[1].slice(0, decimals)}`;
  }

  return null;
}

// Format a currency amount to precision based on the displayUnitScale.
// Note: Shouldn't be used in input boxes since it won't parse back into a number.
//
// 123456 BTC -> 1,234.56 bits
// 0.1 HOUSE -> 0 tokens (truncated at displayUnitScale precision)
export function formatCurrency(
  amount: number,
  currency: Pick<HubCurrency, "displayUnitScale" | "displayUnitName">,
  options: { excludeUnit?: boolean } = {
    excludeUnit: false,
  }
): string {
  // Determine precision of currency.
  // For scale 1 -> 0 decimals, 10 -> 1 decimal, 100 -> 2 decimals, etc.
  const decimalPlaces =
    currency.displayUnitScale <= 1 ? 0 : Math.log10(currency.displayUnitScale);

  // Scale base amount to display amount (e.g. 200 satoshis -> 2 bits)
  const scaledAmount = amount / (currency.displayUnitScale || 1); // prevent division by 0

  // Truncate at the appropriate decimal place before formatting
  const factor = Math.pow(10, decimalPlaces);
  const truncatedAmount = Math.floor(scaledAmount * factor) / factor;

  // Use US locale to dissuade player from trying to write number values that can't be parsed
  // by parseFloat.
  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
    useGrouping: true,
  });

  if (options.excludeUnit) {
    return formatter.format(truncatedAmount);
  } else {
    const out = `${formatter.format(truncatedAmount)} ${
      currency.displayUnitName
    }`;
    return out;
  }
}
