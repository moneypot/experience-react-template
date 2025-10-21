import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "@tanstack/react-router";

export function NotFoundModal() {
  const navigate = useNavigate();

  return (
    <Modal show={true} onHide={() => navigate({ to: "/" })} centered>
      <Modal.Header closeButton>
        <Modal.Title>Page Not Found</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>The page you're looking for doesn't exist.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => navigate({ to: "/" })}>
          Go Home
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
