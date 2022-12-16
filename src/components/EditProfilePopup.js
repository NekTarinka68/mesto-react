import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm name={"edit"} title={"Редактировать профиль"} buttonDefaultText={"Сохранить"} isOpen={props.isOpen} onClose={props.onClose} >
      <input type="text" className="popup__input popup__input_type_name" name="name" id="namePopup" minLength="2" maxLength="40" required placeholder="Введите имя" />
      <span className="popup__error namePopup-error" id="error-namePopup"></span>
      <input type="text" className="popup__input popup__input_type_info" name="about" id="infoPopup" minLength="2" maxLength="200" required placeholder="О себе" />
      <span className="popup__error infoPopup-error" id="error-infoPopup"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;