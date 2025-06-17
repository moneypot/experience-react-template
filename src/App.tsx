import { Container, Row, Col, Alert } from "react-bootstrap";
import { useStore } from "./store";
import { useAuthenticate } from "./hooks/use-authenticate";
import { observer } from "mobx-react-lite";
import { useSubscription } from "./hooks/use-subscription";
import BetBox from "./components/BetBox";
import GameBox from "./components/GameBox";

// Tips:
//
// - Canonical way to check if user is logged in: `if (store.loggedIn)`.

const App = observer(() => {
  const store = useStore();
  const authResult = useAuthenticate(store);
  useSubscription(store);

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
              JSON.stringify(store, null, 2)
            }
          </pre>
        </div>
      </Container>
    </div>
  );
});

export default App;
