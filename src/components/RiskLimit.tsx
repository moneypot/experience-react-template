import { observer } from "mobx-react-lite";
import { formatCurrency } from "@moneypot/frontend-utils";
import { useGameStore } from "../GameStore";
import { HubOutcomeInput } from "../__generated__/graphql";

type Props = {
  baseWager: number | null;
  outcomes: HubOutcomeInput[];
  gameKind: string;
};

const RiskLimit: React.FC<Props> = observer(
  ({ baseWager, outcomes, gameKind }) => {
    const gameStore = useGameStore();
    const currency = gameStore.selectedCurrency;
    const maxBetProfit = outcomes.reduce((max, outcome) => {
      return Math.max(max, outcome.profit);
    }, 0);

    if (!currency) return null;

    const riskLimit = gameStore.baseStore.getRiskLimit(
      gameKind,
      currency.currencyKey,
    );
    if (!riskLimit) return null;

    const validWager = baseWager !== null && baseWager > 0;
    // At least show 1 instead of 0 if max profit is e.g. 0.98
    const potentialPayout = validWager
      ? Math.max(1, baseWager * maxBetProfit)
      : null;
    const totalReturn = validWager ? baseWager * (maxBetProfit + 1) : 0;
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
