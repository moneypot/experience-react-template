import { Container, Row, Col, Alert } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {
  useAuthenticate,
  useSubscription,
} from "@moneypot/experience-react-sdk/hook";
import { useGameStore } from "./GameStore";
import { ChatBox } from "@moneypot/experience-react-sdk/component";
// Dice
import DiceBetBox from "./game-dice/BetBox";
import DiceGameBox from "./game-dice/GameBox";
// Slots
import SlotsBetBox from "./game-slots/BetBox";
import SlotsGameBox from "./game-slots/GameBox";

// Normally, an experience represents a single game to keep things simple, especially the hash chain sequence. But for demo purposes, we'll show multiple games in this template. e.g. Delete one and modify the other into your own game.

const App = observer(() => {
  // These demo games share a single GameStore instance
  const gameStore = useGameStore();
  const authResult = useAuthenticate({
    baseStore: gameStore.baseStore,
    // In playground mode, you'll always auth as a new user in a new experience.
    // For development convenience:
    // - Set experienceClientId to a static UUID to always load the same experience
    // - Set userClientId to a static UUID to always load the same user
    // - Trick: Generate a fresh UUID and then set both to it and you'll always log in as experience admin
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

        <Row className="justify-content-center">
          <Col lg={9}>
            <h3>Dice Game</h3>
          </Col>
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
        </Row>

        <Row className="justify-content-center mt-4">
          <Col lg={9}>
            <h3>Slots Game</h3>
          </Col>
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
        </Row>

        {gameStore.baseStore.loggedIn && (
          <Row className="justify-content-center mt-4">
            <Col lg={9}>
              <h3>Chat</h3>
              <ChatBox baseStore={gameStore.baseStore} />
            </Col>
          </Row>
        )}

        <div className="mt-4">
          <hr />
          <pre>
            {
              // Debug: Show MobX state
              JSON.stringify(gameStore.loggedIn, null, 2)
            }
          </pre>
        </div>
      </Container>
    </div>
  );
});

export default App;
