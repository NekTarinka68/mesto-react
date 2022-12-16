import React from "react";

function Card(props) {
  function handleClick() {
    props.onClick(props.card)
  }
  
  return(
    <div className="element">
      <div onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})` }} className="element__pictures" />
        <div className="element__description">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__like_container">
          <button className="element__like" type="button" aria-label="Кнопка лайка карточек"></button>
          <div className="element__like_numbers">{props.card.likes.length}</div>
          </div>
        </div>
          <button className="element__delete" type="button" aria-label="Кнопка удаления карточек"></button>
    </div>
  )
}

export default Card