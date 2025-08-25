import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Result() {
  const location = useLocation()
  const navigate = useNavigate()
  const result = location.state || { score: 0, feedbackText: "Kein Feedback erhalten." }

  return (
    <div>
      <h2>Ergebnis</h2>
      <p><strong>Score:</strong> {result.score}</p>
      <p><strong>Feedback:</strong> {result.feedbackText}</p>
      <button onClick={() => navigate("/interview")}>Neues Interview starten</button>
    </div>
  )
}

export default Result
