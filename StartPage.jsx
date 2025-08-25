import React from "react"
import { useNavigate } from "react-router-dom"

function StartPage() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Willkommen bei SmartInterview Light</h1>
      <p>Üben Sie Vorstellungsgespräche in einer sicheren, lokalen Umgebung.</p>

      <button
        onClick={() => navigate("/interview")}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Interview starten
      </button>
    </div>
  )
}

export default StartPage