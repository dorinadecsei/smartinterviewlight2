import React, { useState } from 'react'
import CameraView from '../components/CameraView.jsx'
import { useNavigate } from 'react-router-dom'

function Interview() {
  const [question] = useState("Erzählen Sie mir etwas über sich selbst.")
  const navigate = useNavigate()

  async function handleStopRecording(metadata) {
    const response = await fetch("http://127.0.0.1:5000/evaluate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metadata)
    })
    const result = await response.json()
    navigate("/result", { state: result })
  }

  return (
    <div>
      <h2>Interviewfrage:</h2>
      <p>{question}</p>
      <CameraView onStopRecording={handleStopRecording} />
    </div>
  )
}

export default Interview
