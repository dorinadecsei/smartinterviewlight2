import React from 'react'

function FeedbackBox({ score, feedbackText }) {
  return (
    <div>
      <h2>Ergebnis</h2>
      <p>Score: {score} / 10</p>
      <p>Feedback: {feedbackText}</p>
    </div>
  )
}

export default FeedbackBox
