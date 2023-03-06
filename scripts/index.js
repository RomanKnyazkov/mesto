const buttonOpenPopup = document.querySelector(".profile__pen");
const popup = document.querySelector(".popup");
const buttonClosePopup = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__form");
const popupName = document.querySelector(".popup__input_value_name");
const popupProfile = document.querySelector(".popup__input_value_profile");
const title = document.querySelector(".profile__title");
const profile = document.querySelector(".profile__text");
const popupСards = document.querySelector(".popup-cards");
const popupImage = document.querySelector(".popup__img-card");
const popupСard = document.querySelector(".popup-card");
const popupTitleCard = document.querySelector(".popup__title-card");

//popupProfile open.close

const handleOpenButtonClick = () => {
  popup.classList.add("popup_opened");
  popupName.value = title.innerText;
  popupProfile.value = profile.innerText;
};

const handleCloseButtonClick = () => {
  popup.classList.remove("popup_opened");
  popup.classList.add("popup_active");
};

const closeImagePopup = () => {
  popupСard.classList.remove("popup_opened");
};

buttonOpenPopup.addEventListener("click", handleOpenButtonClick);
buttonClosePopup.addEventListener("click", handleCloseButtonClick);

//SaveText

popupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  title.textContent = popupName.value;
  profile.textContent = popupProfile.value;

  handleCloseButtonClick();
});

//popupCards open.close

const buttonOpenPopupCards = document.querySelector(".profile__button");
const buttonClosePopupCards = document.querySelector(".popup-cards__close");

const cardsOpenButtonClick = () => {
  popupСards.classList.add("popup_opened");
  popupСards.classList.add("popup_active");
};
const cardsCloseButtonClick = () => {
  popupСards.classList.remove("popup_opened");
};

buttonOpenPopupCards.addEventListener("click", cardsOpenButtonClick);
buttonClosePopupCards.addEventListener("click", cardsCloseButtonClick);

//popupCards Добавление карточки

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

// Создаем карточку

const cardsElements = document.querySelector(".cards__elements");
const cardsElement = document.querySelector(".cards__element");
const root = document.querySelector(".page");

createCard = (text, link) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const button = document.createElement("button");
  const deleteButton = document.createElement("deleteButton");

  li.append(img, h2, button, deleteButton);

  li.classList.add("cards__element");
  li.setAttribute("id", link);
  img.classList.add("cards__image");
  h2.classList.add("cards__text");
  button.classList.add("cards__like");
  deleteButton.classList.add("cards__delete");

  img.src = link;
  h2.textContent = text;
  img.setAttribute('alt', text)

  cardsElements.prepend(li);
};

//Добавляем карточки на страницу

initialCards.forEach((card) => {
  createCard(card.name, card.link);
});

// Создаем и добавляем элемент на страницу

const cardsValueName = document.querySelector(".popup-cards__input_value_name");
const cardsValueImg = document.querySelector(".popup-cards__input_value_img");
const popupCardsForm = document.querySelector(".popup-cards__form");

popupCardsForm.addEventListener("submit", saveCard);

function saveCard(event) {
  event.preventDefault();
  text = cardsValueName.value;
  link = cardsValueImg.value;
  createCard(text, link);
  cardsCloseButtonClick();
  popupCardsForm.reset();
}

const CardsLike = document.querySelectorAll(".cards__like");

function handleCardList(event) {
  if (event.target.classList.contains("cards__like")) {
    if (event.target.classList.contains("cards__like_active")) {
      removeLike(event.target);
    } else {
      setLike(event.target);
    }
  } else if (event.target.classList.contains("cards__delete")) {
    deleteCard(event.target);
  }
}

function removeLike(element) {
  element.classList.remove("cards__like_active");
}

function setLike(element) {
  element.classList.add("cards__like_active");
}

function deleteCard(element) {
  const elementToDelete = element.closest(".cards__element");
  cardsElements.removeChild(elementToDelete);
}

function handlePopup(event) {
  if (event.target.classList.contains("cards__image")) {
    openPopup(event.target);
  } else if (event.target.classList.contains("popup__close")) {
    closeImagePopup();
  }
}

function openPopup(element) {
  const src = element.getAttribute("src");
  popupImage.setAttribute("src", src);
  const parent = element.closest(".cards__element");
  const cardName = parent.querySelector(".cards__text").textContent;

  popupTitleCard.textContent = cardName;

  popupСard.classList.add("popup_opened");
  popupСard.classList.add("popup_active");
}

cardsElements.addEventListener("click", handleCardList);
root.addEventListener("click", handlePopup);
