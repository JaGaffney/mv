import React, { useState } from "react"

const DeckList = props => {
  const [deck, setDeck] = useState({ hero: "", cards: [] })
  const [cardTotal, setCardTotal] = useState(0)
  const [componentHover, setComponentHover] = useState(false)

  const dragOver = e => {
    e.preventDefault()
    // console.log("got here dragOver")
  }

  const dragEnter = e => {
    e.preventDefault()
    setComponentHover(true)
  }

  const dragLeave = e => {
    e.preventDefault()
    setComponentHover(false)
  }

  const cardDrop = e => {
    e.preventDefault()
    const cardName = e.dataTransfer
      .getData("text")
      .replace("cardName-", "")
      .split("-")
    addNewCards(cardName)
    setComponentHover(false)
  }

  const addNewCards = cardName => {
    const name = cardName[1]
    console.log(cardName[0])
    if (cardName[0] === "hero") {
      // init hero creation
      if (deck["hero"] === "") {
        setCardTotal(cardTotal + 1)
      }
      setDeck({ ...deck, hero: name })
    } else {
      if (!(name in deck["cards"])) {
        setDeck({ ...deck, cards: { ...deck["cards"], [name]: 1 } })
        setCardTotal(cardTotal + 1)
      }
      addCardHandler(name)
    }
  }

  const addCardHandler = cardName => {
    if (deck["cards"][cardName] < 3) {
      let totalCards = deck["cards"][cardName] + 1
      setDeck({ ...deck, cards: { ...deck["cards"], [cardName]: totalCards } })
      setCardTotal(cardTotal + 1)
    }
  }

  const removeCardHandler = cardName => {
    if (deck["cards"][cardName] > 0) {
      let totalCards = deck["cards"][cardName] - 1
      setDeck({ ...deck, cards: { ...deck["cards"], [cardName]: totalCards } })
      setCardTotal(cardTotal - 1)
      // if last card in deck remove its entry
      if (totalCards < 1) {
        let newDeck = { ...deck }
        delete newDeck["cards"][cardName]
        setDeck(newDeck)
        setCardTotal(cardTotal - 1)
      }
    }
  }

  const cardComponent = cardName => {
    return (
      <div className="deck-drop-zone-card">
        <span className="deck-drop-zone-card-total">
          {deck["cards"][cardName]}
        </span>
        <span className="deck-drop-zone-card-name">{cardName}</span>
        <button
          className="deck-drop-zone-card-button"
          onClick={() => removeCardHandler(cardName)}
        >
          -
        </button>
        <button
          className="deck-drop-zone-card-button"
          onClick={() => addCardHandler(cardName)}
        >
          +
        </button>
      </div>
    )
  }

  const makeCardsPopup = () => {
    return <h1>too many cards of that type already in the deck</h1>
  }

  return (
    <div className="deck-card-list">
      <div>
        <button>Save</button>
        <button>Reset</button>
        {cardTotal}/20
      </div>
      <div
        className={`deck-drop-zone ${componentHover && "deck-drop-zone-hover"}`}
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={cardDrop}
      >
        <div className="deck-drop-hero-card">
          <span>{deck["hero"]}</span>
        </div>
        {Object.keys(deck["cards"]).map((item, key) => (
          <div key={key + 1}>{cardComponent(item)}</div>
        ))}
      </div>
    </div>
  )
}

export default DeckList
