//popup

const buttonOpenPopup = document.querySelector('.pen_open');
const popup = document.querySelector('.popup');
const buttonClosePopup = document.querySelector('.popup__close');

const handleOpenButtonClick = () => {
  popup.style.display = 'flex';
}

const handleCloseButtonClick = () => {
  popup.style.display = 'none';
}

buttonOpenPopup.addEventListener('click', handleOpenButtonClick);
buttonClosePopup.addEventListener('click', handleCloseButtonClick);

//SaveText

document.querySelector('.popup__container').addEventListener('submit', (event) => {
  event.preventDefault();
  let popupContainer = document.querySelector('.popup__container');

  let popupName = document.querySelector('.popup__name').value;
  let popupprofile = document.querySelector('.popup__profile').value;

  document.querySelector('.profile__title').innerHTML = popupName;
  document.querySelector('.profile__text').innerHTML = popupprofile;
  popupContainer.reset();

  handleCloseButtonClick();

});

//like

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

const likeButton1 = () => {
  btn1.classList.toggle('like_active')
}

const likeButton2 = () => {
  btn2.classList.toggle('like_active')
}

const likeButton3 = () => {
  btn3.classList.toggle('like_active')
}

const likeButton4 = () => {
  btn4.classList.toggle('like_active')
}

const likeButton5 = () => {
  btn5.classList.toggle('like_active')
}

const likeButton6 = () => {
  btn6.classList.toggle('like_active')
}

btn1.addEventListener('click', likeButton1);
btn2.addEventListener('click', likeButton2);
btn3.addEventListener('click', likeButton3);
btn4.addEventListener('click', likeButton4);
btn5.addEventListener('click', likeButton5);
btn6.addEventListener('click', likeButton6);