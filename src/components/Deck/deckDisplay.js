import React, { useState, useEffect } from "react"

const DeckDisplay = () => {
  const [customDeck, setCustomDeck] = useState(
    JSON.parse(localStorage.getItem("createdDeck"))
  )

  const preMadeDecks = {
    agro: {
      name: "agro",
      hero: "witch",
      cards: {
        crystal: 3,
        uptide: 3,
        vanish: 3,
        arma: 3,
        rancell: 3,
        requ: 3,
        dacolm: 1,
      },
    },
    tempo: {
      name: "tempo",
      hero: "thief",
      cards: {
        crystal: 3,
        uptide: 3,
        vanish: 3,
        arma: 3,
        rancell: 3,
        requ: 3,
        dacolm: 1,
      },
    },
    control: {
      name: "control",
      hero: "sister",
      cards: {
        crystal: 3,
        uptide: 3,
        vanish: 3,
        arma: 3,
        rancell: 3,
        requ: 3,
        dacolm: 1,
      },
    },
    bigCreatures: {
      name: "big creatures",
      hero: "knight",
      cards: {
        crystal: 3,
        uptide: 3,
        vanish: 3,
        arma: 3,
        rancell: 3,
        requ: 3,
        dacolm: 1,
      },
    },
  }

  console.log(customDeck)

  return (
    <div>
      <h1>Display current decks</h1>

      <h3>custom decks</h3>
      {/* {Object.keys(customDeck).map((item, index) => {
        if (preMadeDecks[item]) {
          return <p key={index}>{preMadeDecks[item]}</p>
        }
      })} */}
      <p>{customDeck["name"]}</p>
      <p>{customDeck["hero"]}</p>

      <h3>Premade decks</h3>
      {Object.keys(preMadeDecks).map((item, index) => {
        return <p key={index}>{preMadeDecks[item]["name"]}</p>
      })}
    </div>
  )
}

export default DeckDisplay
