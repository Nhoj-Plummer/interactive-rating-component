import React from "react"
import "./Rating.css"
import Card from "../Card/card"
import Star from "../../assets/icon-star.svg"

const Rating = () => {
  return (
    <Card>
      <div className="rating-star_img_container">
        <img src={Star} alt="star" />
      </div>
      <h2 className="rating-header-text">How did we do?</h2>
      <p className="rating-text">Please let us know how we did with your support request. All feedback is appreciated to help us imporve our offering!</p>
      <ul className="rating-number_container">
        <li>
          <span className="rating-number">1</span>
        </li>
        <li>
          <span className="rating-number">2</span>
        </li>
        <li>
          <span className="rating-number">3</span>
        </li>
        <li>
          <span className="rating-number">4</span>
        </li>
        <li>
          <span className="rating-number">5</span>
        </li>
      </ul>
    </Card>
  )
}

export default Rating
