import "./App.css"
import { useState } from "react"
import Rating from "./components/Rating/rating"
import Output from "./components/Output/output"

function App() {
  const [showOutputPage, setShowOutputPage] = useState(false)
  const [rating, setRating] = useState(null)

  return <>{showOutputPage ? <Output rating={rating} /> : <Rating rating={rating} setRating={setRating} setShowOutputPage={setShowOutputPage} />}</>
}

export default App
