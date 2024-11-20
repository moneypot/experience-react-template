import { observer } from "mobx-react-lite";
import { useState } from "react";
import { Form, Modal, Alert, InputGroup, Button } from "react-bootstrap";
import { useStore } from "../Store";
import { sendGraphQLRequest, WITHDRAW } from "../graphql";
import { formatError } from "../util";

type SubmitState =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "error"; message: string }
  | { type: "success" };

const WithdrawModal: React.FC<{ show: boolean; hide: () => void }> = observer(
  ({ show, hide }) => {
    const store = useStore();
    const [amount, setAmount] = useState("");
    const [submitState, setSubmitState] = useState<SubmitState>({
      type: "idle",
    });
    const [currencyKey, setCurrencyKey] = useState<string>(
      store.loggedIn?.selectedCurrencyKey ?? ""
    );

    if (!show || !store.loggedIn) {
      return;
    }

    const selectedCurrency = store.loggedIn.balances.find(
      (x) => x.currencyKey === currencyKey
    );

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAmount(e.target.value);
    };

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCurrencyKey(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("handleSubmit", {
        amount,
        currencyKey,
        selectedCurrency,
      });

      if (submitState.type === "submitting") {
        return;
      }

      // Validation

      // Ensure user typed in a decimal string of form "123" or "123.45"
      if (!/^\d+(\.\d+)?$/.test(amount)) {
        setSubmitState({ type: "error", message: "Invalid amount" });
        return;
      }

      if (!selectedCurrency) {
        setSubmitState({ type: "error", message: "Invalid currency" });
        return;
      }

      // Convert display units back into base units
      const wagerBaseUnits =
        Number.parseFloat(amount) * selectedCurrency.displayUnitScale;

      if (Number.isNaN(wagerBaseUnits)) {
        setSubmitState({ type: "error", message: "Invalid amount" });
        return;
      }

      setSubmitState({ type: "submitting" });
      sendGraphQLRequest(store, {
        document: WITHDRAW,
        variables: {
          amount: wagerBaseUnits,
          currencyKey: selectedCurrency.currencyKey,
        },
      })
        .then(() => {
          setSubmitState({ type: "success" });
        })
        .catch((e) => {
          setSubmitState({ type: "error", message: formatError(e) });
        });
    };

    return (
      <Modal show onHide={hide}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Withdraw</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {store.loggedIn.balances.length === 0 && (
              <Alert variant="warning">You have no balance to withdraw</Alert>
            )}

            {submitState.type === "error" && (
              <Alert
                variant="danger"
                dismissible
                onClose={() => setSubmitState({ type: "idle" })}
              >
                {submitState.message}
              </Alert>
            )}

            {submitState.type === "success" && (
              <Alert
                variant="success"
                dismissible
                onClose={() => setSubmitState({ type: "idle" })}
              >
                Withdrawal successful!
              </Alert>
            )}

            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Select
                value={amount}
                onChange={handleCurrencyChange}
                required
              >
                {store.loggedIn.balances.map((balance) => (
                  <option key={balance.currencyKey} value={balance.currencyKey}>
                    {balance.currencyKey} (
                    {(balance.amount / balance.displayUnitScale).toFixed(2)}{" "}
                    {balance.displayUnitName} total)
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Label>Amount</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  inputMode="decimal"
                  value={amount}
                  onChange={handleChangeAmount}
                  required
                />
                {selectedCurrency && (
                  <InputGroup.Text>
                    {selectedCurrency.displayUnitName}
                  </InputGroup.Text>
                )}
              </InputGroup>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hide}>
              Cancel
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={submitState.type === "submitting"}
            >
              Withdraw
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
);

export default WithdrawModal;
