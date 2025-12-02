import { GameContainer } from "./components/Game/GameContainer";
import { ChoiceModal } from "./components/Modal/ChoiceModal";
import { useState } from "react";
import "./styles/App.css";
import settingsIcon from "./assets/settings.png";

function App() {
  const [gameChoice, setGameChoice] = useState("");
  const [isModalActive, setIsModalActive] = useState(true);

  function handleChoice(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const { urlBase, difficulty } = Object.fromEntries(data);
    const newGamePreference = urlBase.replace("~", difficulty);
    setGameChoice(newGamePreference);
  }

  function toggleModal() {
    setIsModalActive((prev) => !prev);
  }

  return (
    <>
      <button
        className="settings-button"
        onClick={toggleModal}
        tabIndex="0"
        disabled={isModalActive}
      >
        <img src={settingsIcon}></img>
      </button>
      {isModalActive && (
        <ChoiceModal
          onConfirmChoice={handleChoice}
          onClose={toggleModal}
        ></ChoiceModal>
      )}
      <main>
        <GameContainer url={gameChoice}></GameContainer>
      </main>
    </>
  );
}

export default App;
