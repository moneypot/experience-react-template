import { observer } from "mobx-react-lite";
import { formatCurrency } from "@moneypot/frontend-utils";
import { useGameStore } from "../GameStore";

type Props = {
  wager: string;
  maxBetProfit: number;
  gameKind: string;
};

// TODO: Take outcome list as an argument instead of maxBetProfit
const RiskLimit: React.FC<Props> = observer(
  ({ wager, maxBetProfit, gameKind }) => {
    const gameStore = useGameStore();
    const currency = gameStore.selectedCurrency;

    if (!currency) return null;

    const riskLimit = gameStore.baseStore.getRiskLimit(
      gameKind,
      currency.currencyKey,
    );
    if (!riskLimit) return null;

    const wagerBaseUnits = Math.floor(
      Number.parseFloat(wager) * currency.displayUnitScale,
    );
    const validWager = !Number.isNaN(wagerBaseUnits) && wagerBaseUnits > 0;
    // At least show 1 instead of 0 if max profit is e.g. 0.98
    const potentialPayout = validWager
      ? Math.max(1, wagerBaseUnits * maxBetProfit)
      : null;
    const totalReturn = wagerBaseUnits * (maxBetProfit + 1);
    const isDanger = validWager && totalReturn > riskLimit.maxPayout;

    return (
      <div
        className={`text-end mt-1 small ${isDanger ? "text-danger" : "text-muted"}`}
      >
        {potentialPayout !== null
          ? formatCurrency(potentialPayout, currency, { excludeUnit: true })
          : "--"}{" "}
        / {formatCurrency(riskLimit.maxPayout, currency)} max payout
      </div>
    );
  },
);

export default RiskLimit;
