import "./App.css"
import { useState } from "react"
import { Output, Rating } from "./components"

function App() {
  const [showOutputPage, setShowOutputPage] = useState(false)
  const [rating, setRating] = useState(null)

  return <>{showOutputPage ? <Output rating={rating} /> : <Rating rating={rating} setRating={setRating} setShowOutputPage={setShowOutputPage} />}</>
}

export default App
