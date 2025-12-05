// /src/game/GameBox.tsx
import { observer } from "mobx-react-lite";
import { SlotsBetResult, useGameStore } from "../GameStore";
import { computeSlotsOutcomes } from "./make-slots-bet";
import { pluralize } from "@moneypot/frontend-utils";

const HOUSE_EDGE = 0.01;
const outcomes = computeSlotsOutcomes(HOUSE_EDGE);
const match3Multiplier = (1 + outcomes[0].profit).toFixed(2);
const match2Multiplier = (1 + outcomes[1].profit).toFixed(2);

// Returns indices of drums that should be highlighted (the matching ones)
function getWinningDrumIndices(
  symbols: [string, string, string] | undefined,
  outcomeIdx: number | undefined,
): number[] {
  if (!symbols || outcomeIdx === undefined || outcomeIdx === 2) return [];

  if (outcomeIdx === 0) {
    // Triple: all drums match
    return [0, 1, 2];
  }

  // Pair: find which two match
  if (symbols[0] === symbols[1]) return [0, 1];
  if (symbols[1] === symbols[2]) return [1, 2];
  if (symbols[0] === symbols[2]) return [0, 2];
  return [];
}

const Drum: React.FC<{
  symbol?: string;
  dim?: boolean;
  highlight?: boolean;
}> = ({ symbol, dim, highlight }) => {
  return (
    <div
      className={`border rounded d-flex align-items-center justify-content-center display-3 ${
        dim ? "opacity-50" : ""
      }`}
      style={{
        width: "80px",
        height: "80px",
        lineHeight: 1,
        background: highlight ? "#198754" : "#11161a",
        borderColor: highlight ? "#198754" : "var(--bs-border-color)",
      }}
    >
      {symbol ?? "❔"}
    </div>
  );
};

const GameBox: React.FC = observer(() => {
  const store = useGameStore();

  const last = store.latestSlotsBet;
  const won = last ? last.profit > 0 : undefined;
  const winningIndices = getWinningDrumIndices(last?.symbols, last?.outcomeIdx);

  function deltaWager(bet: SlotsBetResult) {
    return bet.profit * bet.wager;
  }

  return (
    <div className="p-3 text-center position-relative">
      <div className="position-absolute top-0 start-0 text-muted small ps-1">
        Match 3 = {match3Multiplier}x | 2 = {match2Multiplier}x
      </div>
      <div className="position-absolute top-0 end-0 text-muted small pe-1">
        99% RTP
      </div>

      <div className="d-flex justify-content-center gap-3 my-3">
        <Drum
          symbol={last?.symbols?.[0]}
          highlight={winningIndices.includes(0)}
        />
        <Drum
          symbol={last?.symbols?.[1]}
          highlight={winningIndices.includes(1)}
        />
        <Drum
          symbol={last?.symbols?.[2]}
          highlight={winningIndices.includes(2)}
        />
      </div>

      {!last && <div>No last spin</div>}

      {last && (
        <>
          <p
            className={`${
              won ? "text-success" : "text-danger"
            } display-6 text-uppercase mb-1`}
          >
            {won ? "WIN" : "LOSE"}
          </p>
          <p className={`${won ? "text-success" : "text-danger"} mb-0`}>
            {won ? "You won" : "You lost"} {deltaWager(last).toFixed(2)}{" "}
            {pluralize(last.currency.displayUnitName, deltaWager(last))}
          </p>
        </>
      )}

      <BetHistory />
    </div>
  );
});

export default GameBox;

const BetHistory: React.FC = observer(() => {
  const store = useGameStore();
  return (
    <div
      className="d-flex flex-row gap-2 w-100 ps-1 pb-1 pe-0 mt-3 flex-nowrap"
      style={{ overflowX: "hidden" }}
    >
      {store.slotsBets.map((bet) => {
        const s = bet.symbols ?? ["?", "?", "?"];
        const winningIndices = getWinningDrumIndices(
          bet.symbols,
          bet.outcomeIdx,
        );
        return (
          <div key={bet.id} className="d-flex flex-shrink-0">
            {s.map((symbol, idx) => (
              <span
                key={idx}
                className="small"
                style={{
                  background: winningIndices.includes(idx)
                    ? "#198754"
                    : "#dc3545",
                }}
              >
                {symbol}
              </span>
            ))}
          </div>
        );
      })}
    </div>
  );
});
