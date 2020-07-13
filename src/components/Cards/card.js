import React from "react"
import {
  GiCrossbow,
  GiLibertyWing,
  GiWizardStaff,
  GiBroadsword,
  GiBowman,
  GiNunFace,
  GiBlackKnightHelm,
  GiDominoMask,
  GiAnvil,
} from "react-icons/gi"

const Card = props => {
  const cardText = type => {
    if (type.length > 0) {
      let mana = ""
      if ("mana" in type[0]) {
        mana = <span className="mana">{type[0].mana}</span>
      }
      let name = type[0]["name"]
      let bonus = type[0]["bonus"]
      let text = type[0]["text"].replace("[x]", bonus)
      return (
        <>
          <span className="card-text-top">{name} </span>

          <span className="card-text-bottom">
            {mana}
            {text}
          </span>
        </>
      )
    }
    return null
  }

  let rangedIcon = () => {
    return (
      <>
        <span className="card__passive-ranged">
          <GiCrossbow size={"0.8em"} />
        </span>
      </>
    )
  }
  let flyingIcon = () => {
    return (
      <>
        <span className="card__passive-flying">
          <GiLibertyWing size={"0.8em"} />
        </span>
      </>
    )
  }

  const passiveType = type => {
    if (type.length > 1) {
      return (
        <>
          {rangedIcon()}
          {flyingIcon()}
        </>
      )
    }
    if (type[0] === "ranged") {
      return rangedIcon()
    }
    if (type[0] === "flying") {
      return flyingIcon()
    }
  }

  const heroCard = type => {
    switch (type) {
      case "duelist":
        return (
          <>
            <span className="card__hero-icon">
              <GiBroadsword size={"0.8em"} />
            </span>
          </>
        )
      case "ranger":
        return (
          <>
            <span className="card__hero-icon">
              <GiBowman size={"0.8em"} />
            </span>
          </>
        )
      case "sister":
        return (
          <>
            <span className="card__hero-icon">
              <GiNunFace size={"0.8em"} />
            </span>
          </>
        )
      case "blacksmith":
        return (
          <>
            <span className="card__hero-icon">
              <GiAnvil size={"0.8em"} />
            </span>
          </>
        )
      case "thief":
        return (
          <>
            <span className="card__hero-icon">
              <GiDominoMask size={"0.8em"} />
            </span>
          </>
        )
      case "witch":
        return (
          <>
            <span className="card__hero-icon">
              <GiWizardStaff size={"0.8em"} />
            </span>
          </>
        )
      case "knight":
        return (
          <>
            <span className="card__hero-icon">
              <GiBlackKnightHelm size={"0.8em"} />
            </span>
          </>
        )
    }
  }

  function onDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id)
  }

  return (
    <div
      className={`card set-${props.set} card-type-${props.type} hero__icon-temple`}
      draggable="true"
      id={`cardName-${props.type}-${props.name}`}
      onDragStart={e => onDragStart(e)}
    >
      <span className="card__image"></span>
      {props.type === "hero" ? heroCard(props.name) : null}
      <span className="card__name">{props.name}</span>
      <span className="card__mana mana">{props.mana}</span>
      <span className="card__attack">{props.baseAttack}</span>
      <span className="card__health">{props.baseHealth}</span>
      <span className="card__skills">{cardText(props.skill)}</span>
      <span className="card__ability">{cardText(props.ability)}</span>
      {props.passive.length > 0 ? passiveType(props.passive) : null}
    </div>
  )
}

export default Card
