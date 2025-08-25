import React, { useState, useEffect } from 'react'
import CameraView from '../components/CameraView.jsx'
import { useNavigate } from 'react-router-dom'
import questions from '../data/questions.json'

function Interview() {
  const [question, setQuestion] = useState("")
  const navigate = useNavigate()

  // zufällige Frage auswählen
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length)
    setQuestion(questions[randomIndex].text)
  }, [])

  // wird aufgerufen, wenn Aufnahme gestoppt wird
  async function handleStopRecording(metadata) {
    try {
      const response = await fetch("http://127.0.0.1:5000/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          duration: metadata.duration,   // ✅ jetzt korrekt
          eyeContact: metadata.eyeContact || true
        }),
      })
      const result = await response.json()
      navigate("/result", { state: result }) // Feedback weitergeben
    } catch (err) {
      console.error("Fehler bei API-Aufruf:", err)
    }
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
