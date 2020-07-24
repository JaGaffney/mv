import React from "react"
import { Scrollbars } from "react-custom-scrollbars"

import DeckList from "./createDeckList"

import Card from "../../Cards/card"

let data = require("../../../data/cards.json")

const CreateDeck = () => {
  const creatueType = Object.keys(data["creature"])

  const scrollStyle = {
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  }

  return (
    <div className="deck-container">
      <Scrollbars style={scrollStyle}>
        <div className="deck-all-cards">
          <div className="deck-all-cards-filter-container">Filters here</div>
          {/* hero cards */}
          {Object.keys(data["hero"]).map((item, id) => {
            let name = data["hero"][item]["name"]
            let mana = data["hero"][item]["mana"]
            let set = data["hero"][item]["set"]
            let baseAttack = data["hero"][item]["baseAttack"]
            let baseHealth = data["hero"][item]["baseHealth"]
            let skill = data["hero"][item]["heroSkill"]
            let ability = data["hero"][item]["ability"]
            let passive = data["hero"][item]["passive"]

            return (
              <div key={id}>
                <Card
                  type={"hero"}
                  name={name}
                  mana={mana}
                  set={set}
                  baseAttack={baseAttack}
                  baseHealth={baseHealth}
                  skill={skill}
                  ability={ability}
                  passive={passive}
                />
              </div>
            )
          })}
          {/* spell cards */}
          {Object.keys(data["spell"]).map((item, id) => {
            let name = data["spell"][item]["name"]
            let mana = data["spell"][item]["mana"]
            let set = data["spell"][item]["set"]
            let effect = data["spell"][item]["effect"]
            return (
              <div key={id}>
                <Card
                  type={"spell"}
                  name={name}
                  mana={mana}
                  set={set}
                  effect={effect}
                />
              </div>
            )
          })}

          {/* creatue cards */}
          {creatueType.map(type =>
            Object.keys(data["creature"][type]).map((item, id) => {
              let name = data["creature"][type][item]["name"]
              let mana = data["creature"][type][item]["mana"]
              let set = data["creature"][type][item]["set"]
              let baseAttack = data["creature"][type][item]["baseAttack"]
              let baseHealth = data["creature"][type][item]["baseHealth"]
              let skill = data["creature"][type][item]["skill"]
              let ability = data["creature"][type][item]["ability"]
              let passive = data["creature"][type][item]["passive"]

              return (
                <div key={id}>
                  <Card
                    type={type}
                    name={name}
                    mana={mana}
                    set={set}
                    baseAttack={baseAttack}
                    baseHealth={baseHealth}
                    skill={skill}
                    ability={ability}
                    passive={passive}
                  />
                </div>
              )
            })
          )}
        </div>
      </Scrollbars>

      <DeckList />
    </div>
  )
}
export default CreateDeck
