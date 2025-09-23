// /src/game/GameBox.tsx
import { observer } from "mobx-react-lite";
import { SlotsBetResult, useGameStore } from "../GameStore";

const Drum: React.FC<{ symbol?: string; dim?: boolean }> = ({
  symbol,
  dim,
}) => {
  return (
    <div
      className={`border rounded px-4 py-3 display-3 ${
        dim ? "opacity-50" : ""
      }`}
      style={{
        minWidth: "3ch",
        lineHeight: 1,
        background: "#11161a",
        borderColor: "var(--bs-border-color)",
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

  function deltaWager(bet: SlotsBetResult) {
    return bet.profit * bet.wager;
  }

  return (
    <div className="p-3 text-center position-relative">
      <div className="position-absolute top-0 start-0 text-muted small">
        Match three = Win 35.64x
      </div>
      <div className="position-absolute top-0 end-0 text-muted small">
        99% RTP
      </div>

      <div className="d-flex justify-content-center gap-3 my-3">
        <Drum symbol={last?.symbols?.[0]} />
        <Drum symbol={last?.symbols?.[1]} />
        <Drum symbol={last?.symbols?.[2]} />
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
            {last.currency.displayUnitName}
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
        const won = bet.profit > 0;
        const s = bet.symbols ?? ["?", "?", "?"];
        return (
          <div
            key={bet.id}
            className={`small ${
              won ? "text-success" : "text-danger"
            } flex-shrink-0`}
          >
            {s[0]}
            {s[1]}
            {s[2]}
          </div>
        );
      })}
    </div>
  );
});
