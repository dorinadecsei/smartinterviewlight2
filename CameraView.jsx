import React, { useRef, useState } from 'react'

function CameraView({ onStopRecording }) {
  const videoRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const [startTime, setStartTime] = useState(null)

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      videoRef.current.srcObject = stream
      videoRef.current.play()

      setStartTime(Date.now())

      mediaRecorderRef.current = new MediaRecorder(stream)
      mediaRecorderRef.current.start()
    } catch (err) {
      console.error("Kamera-/Mikrofonfehler:", err)
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop()
    }

    const duration = Math.round((Date.now() - startTime) / 1000) // Dauer in Sekunden
    const metadata = { duration: duration, eyeContact: true } // EyeContact = Fake-Wert für Demo
    onStopRecording(metadata)
  }

  return (
    <div>
      <video ref={videoRef} width="400" height="300" autoPlay muted></video>
      <div>
        <button onClick={startRecording}>Aufnahme starten</button>
        <button onClick={stopRecording}>Aufnahme stoppen</button>
      </div>
    </div>
  )
}

export default CameraView
