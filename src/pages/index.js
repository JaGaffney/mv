import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Deck from "../components/Deck/deck"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Deck />
    </Layout>
  )
}

export default IndexPage
