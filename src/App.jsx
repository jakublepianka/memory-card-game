import { GameContainer } from "./components/Game/GameContainer";
import { ChoiceModal } from "./components/Modal/ChoiceModal";
import { useState } from "react";
import "./styles/App.css";

function App() {
  const [gameChoice, setGameChoice] = useState("");
  const [isModalActive, setIsModalActive] = useState(true);

  function handleChoice(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const { urlBase, difficulty } = Object.fromEntries(data); 
    const newGamePreference = urlBase.replace("~", difficulty);
    setGameChoice(newGamePreference)
  }

  function closeModal(){
    setIsModalActive(false);
  }

  return (
    <>
      {isModalActive && <ChoiceModal onConfirmChoice={handleChoice} onClose={closeModal}></ChoiceModal>}
      <GameContainer url={gameChoice}></GameContainer>
    </>
  );
}

export default App;
