import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm name={"avatar"} title={"Обновить аватар"} buttonDefaultText={"Сохранить"} isOpen={props.isOpen} onClose={props.onClose} >
      <input type="url" className="popup__input popup__input_type_avatar" id="avatar-url" name="link" placeholder="Ссылка на аватар" required />
      <span className="popup__error avatar-url-error" id="error-avatar"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;