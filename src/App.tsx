import { Container, Row, Col, Alert, Navbar, Nav } from "react-bootstrap";
import { useStore } from "./Store";
import { useAuthenticate } from "./use-authenticate";
import { observer } from "mobx-react-lite";
import { useSubscription } from "./use-subscription";
import BetBox from "./components/BetBox";
import { useState } from "react";
import WithdrawModal from "./components/WithdrawModal";

// Tips:
//
// - Canonical way to check if user is logged in: `if (store.loggedIn)`.

const App = observer(() => {
  const store = useStore();
  const authResult = useAuthenticate(store);
  useSubscription(store);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <WithdrawModal show={showModal} hide={() => setShowModal(false)} />
      )}

      <Container className="p-3">
        {authResult.status === "error" && (
          <Alert variant="danger">Auth error: {authResult.error}</Alert>
        )}
        {authResult.status === "loading" && (
          <Alert variant="info">Authenticating...</Alert>
        )}
        {store.loggedIn?.balances.length === 0 && (
          <Alert variant="warning">
            Deposit money into this experience to begin betting.
          </Alert>
        )}
        <Navbar>
          {/* <Navbar.Brand>My Casino</Navbar.Brand> */}
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setShowModal(true)}>
              Withdraw
            </Nav.Link>
          </Nav>
        </Navbar>
        <Row>
          <Col lg={3}>
            <BetBox />
          </Col>
          <Col lg={9}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "25vh",
                backgroundColor: "#cccccc",
              }}
            >
              TODO: Build game here
            </div>
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
    </>
  );
});

export default App;
