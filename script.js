//popup

const buttonOpenPopup = document.querySelector('.pen_open');
const popup = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.popup__close');

const handleOpenButtonClick = () => {
  popup.style.display = 'grid';
}

const handleCloseButtonClick = () => {
  popup.style.display = 'none';
  popupContainer.reset();
}

buttonOpenPopup.addEventListener('click', handleOpenButtonClick);
buttonClosePopup.addEventListener('click', handleCloseButtonClick);

//SaveText

let popupContainer = document.querySelector('.popup__container');

document.querySelector('.popup__container').addEventListener('submit', (event) => {
  event.preventDefault();

  let popupName = document.querySelector('.popup__name').value;
  let popupprofile = document.querySelector('.popup__profile').value;

  document.querySelector('.profile__title').innerHTML = popupName;
  document.querySelector('.profile__text').innerHTML = popupprofile;
  popupContainer.reset();

  handleCloseButtonClick();

});

//like

  const CardsLike = document.querySelectorAll('.cards__like');

  CardsLike.forEach((likeButton) => {

    likeButton.addEventListener('click', (cardsLikeActive) => {
      
      cardsLikeActive.target.classList.toggle('cards__like_active');
    });
  });