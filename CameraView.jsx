import React, { useRef, useState } from 'react'

function CameraView({ onStopRecording }) {
  const videoRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const [recording, setRecording] = useState(false)
  const [startTime, setStartTime] = useState(null)

  async function startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    videoRef.current.srcObject = stream
    videoRef.current.play()
    mediaRecorderRef.current = new MediaRecorder(stream)
    setStartTime(Date.now())
    setRecording(true)
    mediaRecorderRef.current.start()
  }

  function stopRecording() {
    mediaRecorderRef.current.stop()
    setRecording(false)
    const duration = Math.round((Date.now() - startTime) / 1000)
    onStopRecording({ duration: duration, eyeContact: true })
  }

  return (
    <div>
      <video ref={videoRef} width="320" height="240" autoPlay muted />
      {!recording ? (
        <button onClick={startCamera}>Aufnahme starten</button>
      ) : (
        <button onClick={stopRecording}>Aufnahme stoppen</button>
      )}
    </div>
  )
}

export default CameraView
