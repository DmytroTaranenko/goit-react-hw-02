import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const feedbackData = localStorage.getItem("FeedbackData");
    return feedbackData
      ? JSON.parse(feedbackData)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("FeedbackData", JSON.stringify(feedback));
  }, [feedback]);

  const onUpdateFeedback = (feedbackType) => {
    setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const clearFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={onUpdateFeedback}
        totalFeedback={totalFeedback}
        clearFeedback={clearFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
