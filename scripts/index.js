const buttonOpenPopup = document.querySelector('.profile__pen');
const popup = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.popup__close');
let popupForm = document.querySelector('.popup__form');
let popupName = document.querySelector('.popup__input_value_name');
let popupProfile = document.querySelector('.popup__input_value_profile');
let title = document.querySelector('.profile__title');
let profile = document.querySelector('.profile__text');

//popup open.close

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

// Like

  // const CardsLike = document.querySelectorAll('.cards__like');

  // CardsLike.forEach((likeButton) => {

  //   likeButton.addEventListener('click', (cardsLikeActive) => {
      
  //     cardsLikeActive.target.classList.toggle('cards__like_active');
  //   });
  // });
