import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return (
    <PopupWithForm name={"add"} title={"Новое место"} buttonDefaultText={"Создать"} isOpen={props.isOpen} onClose={props.onClose} >
      <input type="text" className="popup__input popup__input_type_title" required name="name" id="titlePopup" minLength="2" maxLength="30" placeholder="Название" />
      <span className="popup__error titlePopup-error" id="error-titlePopup"></span>
      <input type="url" className="popup__input popup__input_type_link" required name="link" id="linkPopup" placeholder="Ссылка на картинку" />
      <span className="popup__error linkPopup-error" id="error-linkPopup"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;