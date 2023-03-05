const buttonOpenPopup = document.querySelector('.profile__pen');
const popup = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__form');
let popupName = document.querySelector('.popup__input_value_name');
let popupProfile = document.querySelector('.popup__input_value_profile');
let title = document.querySelector('.profile__title');
let profile = document.querySelector('.profile__text');

const popupСards = document.querySelector('.popup-cards');

//popupProfile open.close

const handleOpenButtonClick = () => {
  popup.classList.add('popup_opened');
  popupName.value = title.innerText;
  popupProfile.value = profile.innerText;
}

const handleCloseButtonClick = () => {
  popup.classList.remove('popup_opened');
}

buttonOpenPopup.addEventListener('click', handleOpenButtonClick);
buttonClosePopup.addEventListener('click', handleCloseButtonClick);

//SaveText

popupForm.addEventListener('submit', (event) => {
event.preventDefault();

title.textContent = popupName.value;
profile.textContent = popupProfile.value;

handleCloseButtonClick();
});

//popupCards open.close

const buttonOpenPopupCards =  document.querySelector('.profile__button');
const buttonClosePopupCards = document.querySelector('.popup-cards__close');

const CardsOpenButtonClick = () => {
  popupСards.classList.add('popup_opened');
}

const CardsCloseButtonClick = () => {
  popupСards.classList.remove('popup_opened');
}

buttonOpenPopupCards.addEventListener('click', CardsOpenButtonClick);
buttonClosePopupCards.addEventListener('click', CardsCloseButtonClick);

//popupCards Добавление карточки

let initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

// Создаем карточку

const cardsElements = document.querySelector('.cards__elements');
const cardsElement = document.querySelector('.cards__element');

createCard = (text, link) => {

let li = document.createElement("li");
let img = document.createElement("img");
let h2 = document.createElement("h2");
let button = document.createElement("button");

li.append(img, h2, button);

li.classList.add('cards__element')
img.classList.add('cards__image')
h2.classList.add('cards__text')
button.classList.add('cards__like')

img.src = link;
h2.append(text);

cardsElements.append(li);
}

//Добавляем карточки на страницу

addCard = (name, link) => {}

initialCards.forEach(card => {
addCard(card.name, card.link);
createCard(card.name, card.link)
});

// Создаем и добавляем элемент на страницу

const cardsValueName = document.querySelector('.popup-cards__input_value_name');
const cardsValueImg = document.querySelector('.popup-cards__input_value_img');
const popupCardsForm = document.querySelector('.popup-cards__form');

popupCardsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  text = cardsValueName.value;
  link = cardsValueImg.value;
  createCard(text, link);
  CardsCloseButtonClick();
});


//Like
const CardsLike = document.querySelectorAll('.cards__like');

CardsLike.forEach((likeButton) => {

  likeButton.addEventListener('click', (cardsLikeActive) => {
    
    cardsLikeActive.target.classList.toggle('cards__like_active');
  });
});

// Раскрытие карточки

// const buttonOpenPopupCard =  document.querySelector('.cards__element');
// const buttonClosePopupCard = document.querySelector('.popup-card__close');
// const popupСard = document.querySelector('.popup-card');
// const popupImgCard = document.querySelector('.popup__img-card');
// const popupTitleCard = document.querySelector('.popup__title-card');
// const cardsImage = document.querySelector('.cards__image');
// const cardsText = document.querySelector('.cards__text');


// // const cardOpenButtonClick = () => {
// //   popupСard.classList.add('popup_opened');
// //   popupImgCard.src = cardsImage.src;
// //   popupTitleCard.textContent = cardsText.outerText;
// // }


// // const cardCloseButtonClick = () => {
// //   popupСard.classList.remove('popup_opened');
// // }

// // buttonOpenPopupCard.addEventListener('click', cardOpenButtonClick);
// // buttonClosePopupCard.addEventListener('click', cardCloseButtonClick);




// const renderItem = (wrap, popupСard) => {
//   wrap.append(getItemElement(popupСard))
// }

// initialItems.forEach((popupСard) => {
//   renderItem(itemListWrapper, popupСard)
// })

//   const getItemElement = () => {
//   buttonOpenPopupCard.classList.add('popup_opened');
//   popupImgCard.src = cardsImage.src;
//   popupTitleCard.textContent = cardsText.outerText;
//   cardsButton.addEventListener('click', buttonOpenPopupCard);
// };

