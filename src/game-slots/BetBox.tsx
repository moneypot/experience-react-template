import { observer } from "mobx-react-lite";
import React, { FormEvent, useCallback, useEffect, useMemo } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import {
  formatCurrency,
  formatError,
  truncateToDisplayScale,
} from "@moneypot/frontend-utils";
import { useGameStore } from "../GameStore";
import makeSlotsBet, { BetInput } from "./make-slots-bet";
import OptionsDropdown from "../components/OptionsDropdown";
import RiskLimit from "../components/RiskLimit";
import { useSoundPlayer } from "../sound";

type FormValues = {
  // Must be converted from display units to base units for submit
  displayWager: string;
};

const BetBox: React.FC = observer(() => {
  const gameStore = useGameStore();
  const { playSound } = useSoundPlayer();

  const betMutation = useMutation({
    mutationFn: (input: BetInput) => makeSlotsBet({ gameStore, input }),
    onSuccess: (result) => {
      if (gameStore.soundEnabled) {
        playSound(result.profit > 0 ? "win" : "lose");
      }
    },
  });

  const validationSchema = useMemo(() => {
    return z.object({
      displayWager: z
        .string()
        .regex(/^\d*\.?\d*$/, "Wager must be a number")
        .refine((value) => {
          if (value === "") return false;
          return Number.parseFloat(value) > 0;
        }, "Wager must be greater than 0")
        .refine((value) => {
          if (value === "") return false;
          if (!gameStore.selectedCurrency) return false;
          return Number.parseFloat(value) <= gameStore.selectedCurrency.amount;
        }, "You cannot afford this wager"),
    });
  }, [gameStore.selectedCurrency]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
    trigger,
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      displayWager: "1",
    },
  });

  const displayWager = watch("displayWager");

  const onSubmit = useCallback(
    (values: FormValues) => {
      if (betMutation.isPending) return;
      if (!gameStore.loggedIn) return;
      if (!gameStore.selectedCurrency) return;

      // Convert display units back into base units (floored to integer)
      const baseWager = Math.floor(
        Number.parseFloat(values.displayWager) *
          gameStore.selectedCurrency.displayUnitScale,
      );

      betMutation.mutate({
        wager: baseWager,
        currency: gameStore.selectedCurrency.currencyKey,
      });
    },
    [gameStore, betMutation],
  );

  // Force revalidation when selected currency balance changes
  useEffect(
    () => {
      if (displayWager) {
        trigger("displayWager");
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gameStore.selectedCurrency, displayWager],
  );

  const handleCurrencyChange = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      const currency = e.currentTarget.value;
      gameStore.baseStore.setSelectedCurrencyKey(currency);
    },
    [gameStore],
  );

  const handleWagerChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const wager = e.currentTarget.value;
      if (!gameStore.selectedCurrency) {
        return;
      }
      const truncated = truncateToDisplayScale(
        wager,
        gameStore.selectedCurrency,
      );
      console.log("truncated", typeof truncated);
      if (truncated !== null) {
        setValue("displayWager", truncated, { shouldValidate: true });
      }
    },
    [gameStore.selectedCurrency, setValue],
  );

  const inputsDisabled = !gameStore.loggedIn || betMutation.isPending;
  const submitDisabled =
    !gameStore.loggedIn || betMutation.isPending || !isValid;

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {betMutation.error && (
          <Alert
            variant="danger"
            onClose={() => betMutation.reset()}
            dismissible
          >
            {formatError(betMutation.error)}
          </Alert>
        )}
        <Form.Group>
          <div className="d-flex justify-content-between align-content-baseline">
            <Form.Label>Currency</Form.Label>
            <OptionsDropdown />
          </div>
          <Form.Select
            name="currencyKey"
            value={gameStore.selectedCurrency?.currencyKey ?? undefined}
            onChange={handleCurrencyChange}
            disabled={inputsDisabled}
          >
            {!gameStore.loggedIn && (
              <option>Log in to select a currency</option>
            )}
            {gameStore.loggedIn?.balances.length === 0 && (
              <option>Deposit to select a currency</option>
            )}
            {gameStore.loggedIn?.balances.map((balance) => (
              <option key={balance.currencyKey} value={balance.currencyKey}>
                {balance.currencyKey}: {formatCurrency(balance.amount, balance)}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mt-2">
          <Form.Label>Wager</Form.Label>
          <Form.Control
            {...register("displayWager")}
            type="text"
            inputMode="numeric"
            placeholder="Enter wager amount"
            required
            // For text fields that user might input manually,
            // use the disabled class instead of disabled attribute so that
            // user focus isn't lost during the submit process
            className={inputsDisabled ? "disabled" : ""}
            value={displayWager}
            onInput={handleWagerChange}
            isInvalid={
              // Only show error if user has entered a value
              displayWager.length > 0 && !!errors.displayWager
            }
          />
          <Form.Control.Feedback type="invalid">
            {errors.displayWager?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-3">
          <Button
            type="submit"
            variant="primary"
            className={`w-100 ${submitDisabled ? "disabled" : ""}`}
          >
            Bet{" "}
            {displayWager &&
              gameStore.selectedCurrency &&
              formatCurrency(
                Number.parseFloat(displayWager),
                gameStore.selectedCurrency,
              )}
          </Button>
          <RiskLimit
            wager={displayWager}
            maxBetProfit={34.64}
            gameKind="GENERAL"
          />
        </Form.Group>
      </Form>
    </>
  );
});

export default BetBox;
