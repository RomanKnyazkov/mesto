//popup

const buttonOpenPopup = document.querySelector('.profile__pen');
const popup = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.popup__close');

const handleOpenButtonClick = () => {
  popup.classList.add('popup_open');
}

const handleCloseButtonClick = () => {
  popup.classList.remove('popup_open');
}

buttonOpenPopup.addEventListener('click', handleOpenButtonClick);
buttonClosePopup.addEventListener('click', handleCloseButtonClick);

//SaveText

let popupContainer = document.querySelector('.popup__container');
let popupName = document.querySelector('.popup__input_name');
let popupProfile = document.querySelector('.popup__input_profile');
let title = document.querySelector('.profile__title');
let profile = document.querySelector('.profile__text');

popupContainer.addEventListener('submit', (event) => {
event.preventDefault();

title.textContent = popupName.value;
profile.textContent = popupProfile.value;

handleCloseButtonClick();
});

// Like

  // const CardsLike = document.querySelectorAll('.cards__like');

  // CardsLike.forEach((likeButton) => {

  //   likeButton.addEventListener('click', (cardsLikeActive) => {
      
  //     cardsLikeActive.target.classList.toggle('cards__like_active');
  //   });
  // });
