import { useState } from "react";
import "../../styles/DifficultyContainer.css";

export function DifficultyContainer() {
  const [difficulty, setDifficulty] = useState("8");

  function handleCheck(e) {
    setDifficulty(e.currentTarget.value);
  }

  const checkedStyle = {
    backgroundColor: "var(--orange)",
  };

  return (
    <div className="difficulty-choice-container">
      <h2>Difficulty</h2>
      <div className="info" title="Number of cards">
        <p>i</p>
      </div>
      <div className="difficulty-radio-wrapper">
        <div className="radio-container">
          <div className="custom-radio-wrapper">
            {difficulty === "8" && (
              <div
                className="custom-radio-checkmark"
                style={checkedStyle}
              ></div>
            )}
          </div>
          <input
            type="radio"
            id="easy"
            value="8"
            name="difficulty"
            onClick={handleCheck}
            defaultChecked
            required
          ></input>
          <label htmlFor="easy">
            <b>Easy</b> (8)
          </label>
        </div>
        <div className="radio-container">
          <div className="custom-radio-wrapper">
            {difficulty === "16" && (
              <div
                className="custom-radio-checkmark"
                style={checkedStyle}
              ></div>
            )}
          </div>
          <input
            type="radio"
            id="medium"
            value="16"
            name="difficulty"
            onClick={handleCheck}
            required
          ></input>
          <label htmlFor="medium">
            <b>Medium</b> (16)
          </label>
        </div>
        <div className="radio-container">
          <div className="custom-radio-wrapper">
            {difficulty === "24" && (
              <div
                className="custom-radio-checkmark"
                style={checkedStyle}
              ></div>
            )}
          </div>
          <input
            type="radio"
            id="hard"
            value="24"
            name="difficulty"
            onClick={handleCheck}
            required
          ></input>
          <label htmlFor="hard">
            <b>Hard</b> (24)
          </label>
        </div>
      </div>
    </div>
  );
}
