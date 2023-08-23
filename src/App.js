import "./App.css"
import { useState } from "react"
import { Output, Rating } from "./components"

function App() {
  const [showOutput, setShowOutput] = useState(false)
  const [rating, setRating] = useState(null)

  return <>{showOutput ? <Output rating={rating} /> : <Rating rating={rating} setRating={setRating} setShowOutput={setShowOutput} />}</>
}

export default App
