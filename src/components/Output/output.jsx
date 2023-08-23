import React from "react"
import "./output.css"
import Card from "../Card/card"
import Result from "../../assets/illustration-thank-you.svg"

const Output = rating => {
  return (
    <Card>
      <div className="output-result-img_container">
        <img src={Result} alt="star" />
      </div>
      <p className="output-message-text">You selected {rating} out of 5</p>
      <h2 className="output-credit-text">Thank you!</h2>
      <p className="output-appreciation-text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </Card>
  )
}

export default Output
