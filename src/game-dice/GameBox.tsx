// GameBox.tsx - Contains our game UI
import { observer } from "mobx-react-lite";
import { DiceBetResult, useGameStore } from "../GameStore";

const GameBox: React.FC = observer(() => {
  const store = useGameStore();

  function deltaWager(bet: DiceBetResult) {
    return bet.profit * bet.wager;
  }

  return (
    <div>
      <div
        className="p-3 text-center position-relative d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "200px" }}
      >
        <div>
          <div className="position-absolute top-0 start-0 text-muted small ps-1">
            Heads = Win 1.98x
          </div>
          <div className="position-absolute top-0 end-0 text-muted small pe-1">
            99% RTP
          </div>
        </div>

        <div>
          {!store.latestDiceBet && <div>No last bet</div>}
          {store.latestDiceBet && (
            <>
              <p
                className={`${
                  store.latestDiceBet.profit > 0
                    ? "text-success"
                    : "text-danger"
                } display-3 text-uppercase`}
              >
                {store.latestDiceBet.profit > 0 ? "Heads" : "Tails"}
              </p>
              <p
                className={`${
                  store.latestDiceBet.profit > 0
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                {store.latestDiceBet.profit > 0 ? "You won" : "You lost"}{" "}
                {deltaWager(store.latestDiceBet).toFixed(2)}{" "}
                {store.latestDiceBet.currency.displayUnitName}
              </p>
            </>
          )}
        </div>
      </div>
      <BetHistory />
    </div>
  );
});

export default GameBox;

const BetHistory: React.FC = observer(() => {
  const store = useGameStore();

  return (
    <div
      className="d-flex flex-row gap-2 w-100 ps-1 pb-1 pe-0"
      style={{ overflowX: "hidden" }}
    >
      {store.diceBets.map((bet) => {
        return (
          <div
            key={bet.id}
            className={`${bet.profit > 0 ? "bg-success" : "bg-danger"}`}
          >
            {bet.profit > 0 ? "Heads" : "Tails"}
          </div>
        );
      })}
    </div>
  );
});
