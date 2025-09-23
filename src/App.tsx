import { Container, Row, Col, Alert } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {
  useAuthenticate,
  useSubscription,
} from "@moneypot/experience-react-sdk/hooks";
import { useGameStore } from "./GameStore";
// Dice
import DiceBetBox from "./game-dice/BetBox";
import DiceGameBox from "./game-dice/GameBox";
// Slots
import SlotsBetBox from "./game-slots/BetBox";
import SlotsGameBox from "./game-slots/GameBox";

// Tips:
//
// - Canonical way to check if user is logged in: `if (store.loggedIn)`.

const App = observer(() => {
  // These demo games share a single GameStore instance
  const gameStore = useGameStore();
  const authResult = useAuthenticate({
    baseStore: gameStore.baseStore,
    // mode: 'auto' | 'playground' | 'iframe' --  Mode is automatically determined
  });
  useSubscription(gameStore.baseStore);

  return (
    <div className="mx-3 mt-4">
      <Container>
        {authResult.status === "error" && (
          <Alert variant="danger">Auth error: {authResult.error}</Alert>
        )}
        {authResult.status === "loading" && (
          <Alert variant="info">Authenticating...</Alert>
        )}

        <h2>Dice Game</h2>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div
              style={{
                backgroundColor: "#1b1f22",
                border: "2px solid var(--bs-border-color)",
                borderRadius: "var(--bs-border-radius)",
              }}
            >
              <DiceGameBox />
            </div>
          </Col>
          <Col lg={3} md={4}>
            <DiceBetBox />
          </Col>
        </Row>

        <h2>Slots Game</h2>
        <Row className="justify-content-center">
          <Col lg={6} md={8}>
            <div
              style={{
                backgroundColor: "#1b1f22",
                border: "2px solid var(--bs-border-color)",
                borderRadius: "var(--bs-border-radius)",
              }}
            >
              <SlotsGameBox />
            </div>
          </Col>
          <Col lg={3} md={4}>
            <SlotsBetBox />
          </Col>
        </Row>

        <div className="mt-4">
          <hr />
          <pre>
            {
              // Debug: Show MobX state
              JSON.stringify(gameStore, null, 2)
            }
          </pre>
        </div>
      </Container>
    </div>
  );
});

export default App;
