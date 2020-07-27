import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import DeckDisplay from "../components/Deck/deckDisplay"
import CreateDeck from "../components/Deck/createDeck/createDeck"
import HomePage from "../components/Home/HomePage"

const IndexPage = () => {
  const [homePage, setHomePage] = useState(true)
  const [playGame, setPlayGame] = useState(false)
  const [createDeck, setCreateDeck] = useState(false)
  const [viewDeck, setViewDeck] = useState(false)
  const [showRules, setShowRules] = useState(false)

  const onOptionHandler = type => {
    switch (type) {
      case "HOME":
        console.log("home")
        setHomePage(true)
        setPlayGame(false)
        setCreateDeck(false)
        setViewDeck(false)
        setShowRules(false)
        break
      case "PLAY":
        console.log("play")
        setHomePage(false)
        setPlayGame(true)
        setCreateDeck(false)
        setViewDeck(false)
        setShowRules(false)
        break
      case "CREATE":
        console.log("create")
        setHomePage(false)
        setPlayGame(false)
        setCreateDeck(true)
        setViewDeck(false)
        setShowRules(false)
        break
      case "VIEW":
        console.log("view")
        setHomePage(false)
        setPlayGame(false)
        setCreateDeck(false)
        setViewDeck(true)
        setShowRules(false)
        break
      case "RULES":
        console.log("RULES")
        setHomePage(false)
        setPlayGame(false)
        setCreateDeck(false)
        setViewDeck(false)
        setShowRules(true)
        break

      default:
        break
    }
  }

  return (
    <Layout>
      <SEO title="Home" />

      {homePage ? <HomePage onOptionHandler={onOptionHandler} /> : null}
      {viewDeck ? <DeckDisplay onOptionHandler={onOptionHandler} /> : null}
      {createDeck ? <CreateDeck onOptionHandler={onOptionHandler} /> : null}
    </Layout>
  )
}

export default IndexPage
