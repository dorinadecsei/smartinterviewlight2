import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import FeedbackBox from '../components/FeedbackBox.jsx'

function Result() {
  const location = useLocation()
  const { score, feedbackText } = location.state || { score: "-", feedbackText: "Kein Ergebnis" }

  return (
    <div>
      <FeedbackBox score={score} feedbackText={feedbackText} />
      <Link to="/interview">
        <button>Neues Interview starten</button>
      </Link>
      <Link to="/">
        <button>Zurück zur Startseite</button>
      </Link>
    </div>
  )
}

export default Result
