import { observer } from "mobx-react-lite";
import React, { FormEvent, useCallback, useEffect, useMemo } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useStore } from "../store";
import { formatCurrency, formatError, truncateToDisplayScale } from "../util";
import { FormikHelpers, useFormik } from "formik";
import { z } from "zod";
import { withZodSchema } from "formik-validator-zod";

type FormValues = {
  // Must be converted from display units to base units for submit
  displayWager: string;
};

const BetBox: React.FC = observer(() => {
  const store = useStore();

  // Ensure selected currency matches one of user's balances
  const selectedCurrency = store.loggedIn?.balances.find(
    (balance) => balance.currencyKey === store.loggedIn?.selectedCurrencyKey
  );

  const selectedCurrencyBalance = store.loggedIn?.balances.find(
    (balance) => balance.currencyKey === selectedCurrency?.currencyKey
  )?.amount;

  const validationSchema = useMemo(() => {
    return z.object({
      displayWager: z
        .string()
        .regex(/^\d*\.?\d*$/, "Wager must be a number")
        .refine((value) => {
          if (value === "") return false;
          return Number.parseFloat(value) > 0;
        }, "Wager must be greater than 0")
        .refine((value) => {
          if (value === "") return false;
          if (!selectedCurrencyBalance) return false;
          return Number.parseFloat(value) <= selectedCurrencyBalance;
        }, "You cannot afford this wager"),
    });
  }, [selectedCurrencyBalance]);

  const handleSubmit = useCallback(
    (
      values: FormValues,
      { setSubmitting, setStatus }: FormikHelpers<FormValues>
    ) => {
      // Reset errors
      setStatus(null);
      setSubmitting(true);

      if (!selectedCurrency) {
        setStatus("Select a currency");
        return;
      }

      // Convert display units back into base units (floored to integer)
      const baseWager = Math.floor(
        Number.parseFloat(values.displayWager) *
          selectedCurrency.displayUnitScale
      );

      console.log("TODO: Submit bet", {
        baseWager,
        currencyKey: selectedCurrency.currencyKey,
      });

      // Replace this with a real http request
      new Promise((resolve) => setTimeout(resolve, 1000))
        .then(() => {
          console.log("TODO: Submit bet");
        })
        .catch((e) => {
          setStatus(formatError(e));
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
    [selectedCurrency]
  );

  const initialValues = useMemo(() => {
    return {
      displayWager: "1",
    };
  }, []);

  const formik = useFormik({
    initialValues,
    validate: (values) => {
      return withZodSchema(validationSchema)(values);
    },
    onSubmit: handleSubmit,
  });

  // Force revalidation when selected currency balance changes
  useEffect(
    () => {
      if (formik.values.displayWager) {
        formik.validateField("displayWager");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // Don't depend on `formik` since it will trigger infinite re-renders
      selectedCurrencyBalance,
      formik.values.displayWager,
    ]
  );

  const handleCurrencyChange = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      const currency = e.currentTarget.value;
      store.setSelectedCurrencyKey(currency);
    },
    [store]
  );

  const handleWagerChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const wager = e.currentTarget.value;
      if (!selectedCurrency) {
        return;
      }
      const truncated = truncateToDisplayScale(wager, selectedCurrency);
      if (truncated !== null) {
        formik.setFieldValue("displayWager", truncated);
      }
    },
    [selectedCurrency, formik]
  );

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <fieldset disabled={!store.loggedIn || formik.isSubmitting}>
          {formik.status && (
            <Alert
              variant={formik.status.variant}
              onClose={() => formik.setStatus(null)}
              dismissible
            >
              {formik.status.children}
            </Alert>
          )}
          <Form.Group>
            <Form.Label>Currency</Form.Label>
            <Form.Select
              name="currencyKey"
              value={store.loggedIn?.selectedCurrencyKey ?? undefined}
              onChange={handleCurrencyChange}
            >
              {!store.loggedIn && <option>Log in to select a currency</option>}
              {store.loggedIn?.balances.length === 0 && (
                <option>Deposit to select a currency</option>
              )}
              {store.loggedIn?.balances.map((balance) => (
                <option key={balance.currencyKey} value={balance.currencyKey}>
                  {balance.currencyKey}:{" "}
                  {formatCurrency(balance.amount, balance)}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Wager</Form.Label>
            <Form.Control
              name="displayWager"
              type="number"
              inputMode="numeric"
              step="0.01"
              placeholder="Enter wager amount"
              required
              value={formik.values.displayWager}
              onInput={handleWagerChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.values.displayWager.length > 0 &&
                !!formik.errors.displayWager
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.displayWager}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-3">
            <Button
              type="submit"
              variant="primary"
              className={
                "w-100 " +
                (formik.isSubmitting || !formik.isValid ? "disabled" : "")
              }
            >
              Bet{" "}
              {formik.values.displayWager &&
                selectedCurrency &&
                formatCurrency(
                  Number.parseFloat(formik.values.displayWager),
                  selectedCurrency
                )}
            </Button>
          </Form.Group>
        </fieldset>
      </Form>
    </>
  );
});

export default BetBox;
