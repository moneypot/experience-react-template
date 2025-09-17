// GameBox.tsx - Contains our game UI
import { observer } from "mobx-react-lite";
import { BetResult, useGameStore } from "../GameStore";

const GameBox: React.FC = observer(() => {
  const store = useGameStore();

  function deltaWager(bet: BetResult) {
    return bet.profit * bet.wager;
  }

  return (
    <div>
      <div className="p-3 text-center">
        {!store.latestBet && <div>No last bet</div>}
        {store.latestBet && (
          <>
            <p
              className={`${
                store.latestBet.profit > 0 ? "text-success" : "text-danger"
              } display-3 text-uppercase`}
            >
              {store.latestBet.profit > 0 ? "Heads" : "Tails"}
            </p>
            <p
              className={`${
                store.latestBet.profit > 0 ? "text-success" : "text-danger"
              }`}
            >
              {store.latestBet.profit > 0 ? "You won" : "You lost"}{" "}
              {deltaWager(store.latestBet).toFixed(2)}{" "}
              {store.latestBet.currency.displayUnitName}
            </p>
          </>
        )}
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
      {store.bets.map((bet) => {
        return (
          <div
            key={bet.id}
            className={`${bet.profit > 0 ? "text-success" : "text-danger"}`}
          >
            {bet.profit > 0 ? "Heads" : "Tails"}
          </div>
        );
      })}
    </div>
  );
});
