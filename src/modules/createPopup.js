import {getData} from './get-items.js';

const createPopup = (meal) => {
  const popupContainer = document.createElement('div');
  popupContainer.className = 'popupContainer';
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = `popup${meal.idCategory}`;
  popup.innerHTML = `
  <i class="fa-solid fa-xmark close-popup"></i>
  <div class="imageContainer">
  <img src="${meal.strCategoryThumb}" alt="${meal.strCategory}" />
  </div>
  <h3 class="meal-title">${meal.strCategory}</h3>
  <p class="meal-description">${meal.strCategoryDescription}</p>
  `;
  popupContainer.appendChild(popup);
  document.body.appendChild(popupContainer);
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.remove();
  });
};

const popup = () => {
  const mealData = getData();
  mealData.then((value) => {
    for (let i = 0; i < value.length; i += 1) {
      const commentButton = document.getElementById(`commentBtn${value[i].idCategory}`);
      commentButton.addEventListener('click', () => {
        createPopup(value[i]);
      });
    }
  });
};

export default popup;