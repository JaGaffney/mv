import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import DeckDisplay from "../components/Deck/deckDisplay"
import CreateDeck from "../components/Deck/createDeck/createDeck"

const IndexPage = () => {
  const [tempDeck, setTempDeck] = useState(false)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <button onClick={() => setTempDeck(false)}>Play Game</button>
        <button onClick={() => setTempDeck(true)}>Create Deck</button>
      </div>
      {tempDeck ? <CreateDeck /> : <DeckDisplay />}
    </Layout>
  )
}

export default IndexPage
