export function DifficultyContainer() {
  return (
    <div className="difficulty-choice-container">
      <p>Difficulty</p>
      <div className="difficulty-radio-wrapper">
        <input type="radio" value="8" name="difficulty"></input>
        <input type="radio" value="16" name="difficulty"></input>
        <input type="radio" value="24" name="difficulty"></input>
      </div>
    </div>
  );
}
