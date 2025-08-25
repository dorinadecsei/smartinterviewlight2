import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import StartPage from "./pages/StartPage.jsx"
import Interview from "./pages/Interview.jsx"
import Result from "./pages/Result.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  )
}

export default App