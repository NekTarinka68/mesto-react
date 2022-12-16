import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }; 

  function handleCardClick(card) {
    setSelectedCard(card)
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  };

  return (
    <div className='page'>
      <Header/>
      <Main onEditAvatar = {handleEditAvatarClick} onEditProfile = {handleEditProfileClick} onAddPlace = {handleAddPlaceClick} onCardClick = {handleCardClick} />
      <Footer />
      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <div className="popup popup_type-delete">
        <div className="popup__container-delete">
          <button className="popup__close" type="button" aria-label="Кнопка закрытия попапов"></button>
          <h3 className="popup__title">Вы уверены?</h3>
          <form className="popup__form" name="card-delete-form">
            <button className="popup__save popup__save-del-btn" type="submit">Да</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;