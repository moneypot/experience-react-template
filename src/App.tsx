import { Container, Row, Col, Alert } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import BetBox from "./game/BetBox";
import GameBox from "./game/GameBox";
import { useAuthenticate, useSubscription } from "@moneypot/experience-react-sdk/hooks";
import { useGameStore } from "./GameStore";

// Tips:
//
// - Canonical way to check if user is logged in: `if (store.loggedIn)`.

const App = observer(() => {
  const gameStore = useGameStore();
  const authResult = useAuthenticate(gameStore.baseStore);
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
          <Col lg={6} md={8}>
            <div
              style={{
                backgroundColor: "#1b1f22",
                border: "2px solid var(--bs-border-color)",
                borderRadius: "var(--bs-border-radius)",
              }}
            >
              <GameBox />
            </div>
          </Col>
          <Col lg={3} md={4}>
            <BetBox />
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
