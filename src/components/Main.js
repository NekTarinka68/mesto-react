import React from "react";
import addButton from '../images/add-button.svg';
import editButton from '../images/button-edit.svg';
import { api } from '../utils/api';
import Card from './Card';

function Main (props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, data]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(data);
      })
        .catch((err) => console.log(err))
    });
    
    return (
      <main className="content">
      <section className="profile">
        <button className="profile__button-change-avatar" onClick={props.onEditAvatar}></button>
        <div style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" />
        <div className="profile__info">
          <div className="profile__name-button">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button" type="button" aria-label="Кнопка редактирования профиля" onClick={props.onEditProfile}>
              <img className="profile__button-icon" alt="Иконка редактирования профиля" src={editButton} />
            </button>
          </div>
            <p className="profile__description">{userDescription}</p>
        </div>
          <button className="profile__button-pic" type="button" aria-label="Кнопка добавления фотографии" onClick={props.onAddPlace}>
            <img className="profile__button-pictures" alt="Кнопка добавления фотографии" src={addButton} />
          </button>
      </section>
      <section className="elements">
        {cards.map((data) => {
          return(
            <Card key={data._id} card={data} onClick={props.onCardClick} />
          )
        })}
      </section>
      </main>
    )
  }

export default Main;