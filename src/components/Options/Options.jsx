function Options({ onUpdateFeedback, totalFeedback, clearFeedback }) {
  return (
    <div>
      <button type="button" onClick={() => onUpdateFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => onUpdateFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onUpdateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          type="button"
          onClick={() => clearFeedback({ good: 0, neutral: 0, bad: 0 })}
        >
          Reset
        </button>
      )}
    </div>
  );
}
export default Options;
