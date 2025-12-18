import { useNavigate } from "@tanstack/react-router";
import { observer } from "mobx-react-lite";
import { NavDropdown } from "react-bootstrap";
import { GearFill, PatchCheckFill } from "react-bootstrap-icons";
import { useSoundPlayer } from "../sound";
import { useGameStore } from "../GameStore";

const notReallyDisabled: React.CSSProperties = {
  pointerEvents: "auto",
  opacity: 1,
};

const OptionsDropdown = observer(() => {
  const gameStore = useGameStore();
  const { playSound } = useSoundPlayer();
  const navigate = useNavigate();

  return (
    <NavDropdown title={<GearFill />} id="options-dropdown">
      <div className="dropdown-item" style={{ padding: 0 }}>
        <label className="d-flex" style={{ margin: "0 0.5rem" }}>
          <div className="form-check form-switch d-inline-block">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              style={notReallyDisabled}
              checked={gameStore.soundEnabled}
              onChange={() => {
                gameStore.setSoundEnabled(!gameStore.soundEnabled);
                if (gameStore.soundEnabled) {
                  playSound("click");
                }
              }}
            />
          </div>{" "}
          Sound
        </label>
      </div>

      <div className="dropdown-item" style={{ padding: 0 }}>
        <button
          className="btn btn-link m-0 w-100 icon-link"
          style={{
            padding: "0 1rem",
            textDecoration: "none",
            color: "var(--bs-body-color)",
          }}
          onClick={(e) => {
            e.preventDefault();
            navigate({ to: "/provably-fair" });
          }}
        >
          <PatchCheckFill />
          Provably fair
        </button>
      </div>
    </NavDropdown>
  );
});

export default OptionsDropdown;
