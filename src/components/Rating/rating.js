import React, { useState } from "react"
import "./Rating.css"
import Card from "../Card/card"
import Star from "../../assets/icon-star.svg"

const Rating = () => {
  const [selectChoice, setSelectChoice] = useState({
    dataOne: false,
    dataTwo: false,
    dataThree: false,
    dataFour: false,
    dataFive: false
  })

  return (
    <Card>
      <div className="rating-star_img_container">
        <img src={Star} alt="star" />
      </div>
      <h2 className="rating-header-text">How did we do?</h2>
      <p className="rating-text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ul className="rating-number_container">
        <li className={selectChoice.dataOne ? "rating-number active" : "rating-number_container-initial"} onClick={setSelectChoice({ dataOne: true, dataTwo: false, dataThree: false, dataFour: false, dataFive: false })}>
          <span className="rating-number">1</span>
        </li>
        <li className={selectChoice.dataTwo ? "rating-number active" : "rating-number_container-initial"} onClick={setSelectChoice({ dataOne: false, dataTwo: true, dataThree: false, dataFour: false, dataFive: false })}>
          <span className="rating-number">2</span>
        </li>
        <li className={selectChoice.dataThree ? "rating-number active" : "rating-number_container-initial"} onClick={setSelectChoice({ dataOne: false, dataTwo: false, dataThree: true, dataFour: false, dataFive: false })}>
          <span className="rating-number">3</span>
        </li>
        <li className={selectChoice.dataFour ? "rating-number active" : "rating-number_container-initial"} onClick={setSelectChoice({ dataOne: false, dataTwo: false, dataThree: false, dataFour: true, dataFive: false })}>
          <span className="rating-number">4</span>
        </li>
        <li className={selectChoice.dataFive ? "rating-number active" : "rating-number_container-initial"} onClick={setSelectChoice({ dataOne: false, dataTwo: false, dataThree: false, dataFour: false, dataFive: true })}>
          <span className="rating-number">5</span>
        </li>
      </ul>
      <div className="rating-button-container">
        <button>
          <h3>SUBMIT</h3>
        </button>
      </div>
    </Card>
  )
}

export default Rating
