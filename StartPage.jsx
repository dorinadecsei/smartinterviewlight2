import React from 'react'
import { Link } from 'react-router-dom'

function StartPage() {
  return (
    <div>
      <h1>Willkommen bei SmartInterview Light</h1>
      <p>Üben Sie Vorstellungsgespräche interaktiv und anonym.</p>
      <Link to="/interview">
        <button>Interview starten</button>
      </Link>
    </div>
  )
}

export default StartPage
