export function AnimaContainer() {
  return (
    <div className="api-choice-container">
      <p>Card images</p>

      <div className="animal-radio-wrapper">
        <div className="highlight"></div>
        <div className="custom-radio-container">
          <input
            type="radio"
            value="https://api.thecatapi.com/v1/images/search?limit=~&api_key=live_OJC8ftKSMLZ9BW8PASwtf2XLRSA0lCd4i14sCmpbR3hfN1tlNsS7dXr62mfvOPln"
            name="urlBase"
          ></input>
        </div>
        <div className="custom-radio-container">
          <input
            type="radio"
            value="https://dog.ceo/api/breeds/image/random/~"
            name="urlBase"
          ></input>
        </div>
      </div>
    </div>
  );
}
