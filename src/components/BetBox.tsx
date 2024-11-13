import { observer } from "mobx-react-lite";
import React, { FormEvent, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useStore } from "../Store";
import { runInAction } from "mobx";

const BetBox: React.FC = observer(() => {
  const store = useStore();
  const [wagerString, setWagerString] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [sending, setSending] = useState(false);

  const submitBet = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!store.loggedIn) {
      return;
    }
    if (sending) {
      return;
    }

    // Reset errors
    setSubmitError("");

    const decimalRegex = /^\d+(\.\d+)?$/;
    if (!decimalRegex.test(wagerString)) {
      setSubmitError("Invalid wager amount");
      return;
    }

    // Ensure selected currency matches one of user's balances
    const selectedCurrency = store.loggedIn.balances.find(
      (balance) => balance.currencyKey === store.loggedIn?.selectedCurrencyKey
    );

    if (!selectedCurrency) {
      setSubmitError("Invalid currency");
      return;
    }

    // Convert display units back into base units
    const wagerBaseUnits =
      Number.parseFloat(wagerString) * selectedCurrency.displayUnitScale;

    console.log("TODO: make bet", {
      wagerBaseUnits,
      currency: selectedCurrency.currencyKey,
    });

    // Mock http request
    setSending(true);
    new Promise((resolve) => setTimeout(resolve, 1000)).finally(() => {
      setSending(false);
    });

    // Here's where you'd do something like this:
    //
    // sendGraphQLRequest(store, {
    //   document: MAKE_BET,
    //   variables: {
    //     wager: wagerBaseUnits,
    //     currency: selectedCurrency.currencyKey,
    //   },
    // })
    //   .then((result) => {
    //   })
    //   .catch((e) => {
    //     setSubmitError(formatError(e));
    //   })
    //   .finally(() => {
    //     setSending(false);
    //   });
  };

  const handleCurrencyChange = (e: FormEvent<HTMLSelectElement>) => {
    const currency = e.currentTarget.value;
    runInAction(() => {
      if (store.loggedIn) {
        store.loggedIn.selectedCurrencyKey = currency;
      }
    });
  };

  const handleWagerChange = (e: FormEvent<HTMLInputElement>) => {
    const wager = e.currentTarget.value;
    setWagerString(wager);
  };

  return (
    <Form onSubmit={submitBet}>
      <Form.Group>
        <Form.Label>Currency</Form.Label>
        <Form.Select
          onChange={handleCurrencyChange}
          value={store.loggedIn?.selectedCurrencyKey ?? undefined}
          disabled={!store.loggedIn}
        >
          {!store.loggedIn && <option>Log in to select a currency</option>}
          {store.loggedIn?.balances.length === 0 && (
            <option>Deposit to select a currency</option>
          )}
          {store.loggedIn?.balances.map((balance) => (
            <option key={balance.currencyKey} value={balance.currencyKey}>
              {balance.currencyKey}: {balance.amount / balance.displayUnitScale}{" "}
              {balance.displayUnitName}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-2">
        <Form.Label>Wager</Form.Label>
        <Form.Control
          type="number"
          name="wager"
          inputMode="numeric"
          placeholder="Enter wager amount"
          pattern="^\d*\.?\d*$"
          title="Invalid wager"
          required
          value={wagerString}
          onInput={handleWagerChange}
        />
      </Form.Group>

      <Form.Group className="mt-3">
        {submitError && (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setSubmitError("")}
          >
            {submitError}
          </Alert>
        )}
        <Button
          type="submit"
          variant="primary"
          className={"w-100 " + (sending ? "disabled" : "")}
        >
          Bet
        </Button>
      </Form.Group>
    </Form>
  );
});

export default BetBox;
