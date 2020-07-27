import React from "react"
import { FiArrowLeft } from "react-icons/fi"

const HomeButton = props => {
  return (
    <div className="home-page-links">
      <a onClick={() => props.onOptionHandler("HOME")}>
        <FiArrowLeft
          vertical-align="middle"
          horizontal-align="middle"
          size="2.5em"
        />
      </a>
    </div>
  )
}

export default HomeButton
