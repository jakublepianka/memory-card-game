import { AnimaContainer } from "./AnimalContainer";
import { DifficultyContainer } from "./DifficultyContainer";
import "../../styles/ChoiceModal.css";

export function ChoiceModal({ onConfirmChoice, onClose }) {
  return (
    <div className="modal">
      <h1>Choose game preferences</h1>
      <form
        onSubmit={(e) => {
          onConfirmChoice(e);
          onClose();
        }}
      >
        <AnimaContainer></AnimaContainer>
        <DifficultyContainer></DifficultyContainer>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
