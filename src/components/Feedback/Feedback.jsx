import { useEffect, useState } from "react";

function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
  feedback,
}) {
  if (totalFeedback === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div>
      <p>Good:{good}</p>
      <p>Neutral:{neutral} </p>
      <p>Bad:{bad} </p>
      <p>Total:{totalFeedback} </p>
      <p>Positive:{positiveFeedback}% </p>
    </div>
  );
}
export default Feedback;
