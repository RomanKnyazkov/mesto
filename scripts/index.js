const profileOpenButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup__edit-profile-popup");
const editProfileForm = document.forms["edit-user-form"];
const addCardForm = document.forms["add-card-form"];
const userNameInput = document.querySelector(".popup__input_value_name");
const userDescriptionInput = document.querySelector(".popup__input_value_description");
const userName = document.querySelector(".profile__title");
const userDescription = document.querySelector(".profile__text");
const addingCardPopup = document.querySelector(".popup__new-card-popup");
const popupImage = document.querySelector(".popup__img");
const bigImagePopup = document.querySelector(".popup__big-image-popup");
const imagePopupTitle = document.querySelector(".popup__img-title");
const addCardButton = document.querySelector(".profile__add-card-button");
const buttonClosePopupCards = document.querySelector(".popup-cards__close");
const cardsElements = document.querySelector(".cards__elements");
const cardsElement = document.querySelector(".cards__element");
const root = document.querySelector(".page");
const cardsValueName = document.querySelector(".popup__input_value_img-name");
const cardsValueImg = document.querySelector(".popup__input_value_img");
const popupCardsForm = document.querySelector(".popup-cards__form");
const closeButtons = document.querySelectorAll('.popup__close');
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

// Открытие popup редактирования 
const openEditPopup = () => {
  openPopup(editProfilePopup);
  userNameInput.value = userName.innerText;
  userDescriptionInput.value = userDescription.innerText;
};

// Открытия popup для создания карточки
const openAddCardPopup = () => {
  openPopup(addingCardPopup);
};

// Закрытие popup для создания карточки
const cardsCloseButtonClick = () => {
  closePopup(addingCardPopup)
};

// Функция снять лайк
const removeLike = (element) => {
  element.classList.remove("card__like_active");
}

// Функция поставить лайк
const setLike = (element) => {
  element.classList.add("card__like_active");
}

// Функция поставить и снять лайк или открыть большую картинку
const handleCardList = (event) => {
  if (event.target.classList.contains("card__like")) {
    if (event.target.classList.contains("card__like_active")) {
      removeLike(event.target);
    } else {
      setLike(event.target);
    }
  } 
  else if (event.target.classList.contains("card__delete")) {
    deleteCard(event.target)
  }
  else if (event.target.classList.contains("card__image")){
    openPopupImg(event.target)
}
}

// Функция удаления карточки
const deleteCard = (element) => {
  element.closest('.card').remove();
}

// Функция открытия карточки
const handlePopup = (event) => {
  event.target.classList.contains("card__image") 
    openPopupImg(event.target);  
}

const openPopupImg = (element) => {
  const src = element.getAttribute("src");
  popupImage.setAttribute("src", src);
  const parent = element.closest(".card");
  const cardName = parent.querySelector(".card__text").textContent;
  imagePopupTitle.textContent = cardName;
  openPopup(bigImagePopup);
}

const template = document.querySelector('#card')

function createCardTemplate (text, link) {
  const clone = template.content.cloneNode(true)
  const img = clone.querySelector(".card__image");
  const h3 = clone.querySelector(".card__text");

  img.src = link;
  h3.textContent = text;
  img.setAttribute('alt', text)

  cardsElements.prepend(clone);
}

// Создаем и добавляем элемент на страницу
const saveCard = (event) => {
  event.preventDefault();
  const text = cardsValueName.value;
  const link = cardsValueImg.value;
  createCardTemplate(text, link);
  closePopup(addingCardPopup);
  addCardForm.reset();
}

//Добавляем карточки на страницу
if ('content' in document.createElement('template')){
initialCards.forEach((card) => {
  createCardTemplate(card.name, card.link);
});
}

// Функция закрытия Popup
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Функция открытия Popup
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Слушатели открытия popup, создания карточки
addCardButton.addEventListener("click", openAddCardPopup);

// Устанавливаем обработчкик на крестик карточки
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Слушатель который отвечает за лайки, удаления, открытие картинки
cardsElements.addEventListener("click", handleCardList);

// Слушателиь открытия Popup профайла
profileOpenButton.addEventListener("click", openEditPopup);

// Слушатель сохранения данных пользователя
editProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  userDescription.textContent = userDescriptionInput.value;
  closePopup(editProfilePopup);
});

// Слушатель кнопки добавления карточки на страницу
addCardForm.addEventListener("submit", saveCard);

