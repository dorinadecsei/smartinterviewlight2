import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StartPage from './pages/StartPage.jsx'
import Interview from './pages/Interview.jsx'
import Result from './pages/Result.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
