import { AnimaContainer } from "./AnimalContainer";
import { DifficultyContainer } from "./DifficultyContainer";
import "../../styles/ChoiceModal.css";

export function ChoiceModal({ onConfirmChoice, onClose }) {
  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="modal">
        <h1>Game preferences</h1>
        <form
          onSubmit={(e) => {
            onConfirmChoice(e);
            onClose();
          }}
        >
          <AnimaContainer></AnimaContainer>
          <DifficultyContainer></DifficultyContainer>
          <div className="modal-buttons">
            <button className="submit-button" type="submit">Submit</button>
            <button className="cancel-button" type="reset" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
