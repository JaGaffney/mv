import React from "react"
import { FiGithub, FiGlobe } from "react-icons/fi"

import HomeButton from "./HomeButton"

const HomePage = props => {
  return (
    <div className="home-container hero__icon-temple">
      <div className="home-container-logo">
        <span>Generic card game</span>
      </div>

      <div className="home-container-buttons">
        <button
          className="btn btn-disabled btn-large"
          onClick={() => props.onOptionHandler("PLAY")}
          disabled
        >
          Play Game (coming soon)
        </button>
        <button
          className="btn btn-primary btn-large"
          onClick={() => props.onOptionHandler("CREATE")}
        >
          Create a new Deck
        </button>
        <button
          className="btn btn-primary btn-large"
          onClick={() => props.onOptionHandler("VIEW")}
        >
          View all Decks
        </button>
        <button
          className="btn btn-disabled btn-large"
          onClick={() => props.onOptionHandler("RULES")}
          disabled
        >
          How to play (coming soon)
        </button>
      </div>

      <div className="home-page-links">
        <a href="https://jongaffney.tech/">
          <FiGlobe
            vertical-align="middle"
            horizontal-align="middle"
            size="3rem"
          />
        </a>
        <a href="https://github.com/JaGaffney">
          <FiGithub
            vertical-align="middle"
            horizontal-align="middle"
            size="3rem"
          />
        </a>
      </div>
    </div>
  )
}
export default HomePage
