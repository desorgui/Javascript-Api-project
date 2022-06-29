import getData from './get-items.js';
import { addComment, createCommentList, lastCommentItem } from './invovmentApi.js'

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
  <div class="commentContainer">
  <h3><span id="commentCounter" class="commentCounter"></span> Comments</h3>
  <ul class="commentList" id="commentList"></ul>
  <h3>Add a comment</h3>
  <form class="commentForm">
  <input type="text" name="contentId" id="contentId" style="display:none" value="item${meal.idCategory}">
  <input type="text" name="username" id="username" placeholder="Your name">
  <textarea name="message" id="message" cols="30" rows="10"></textarea>
  <button type="button" id="commentBtn">Comment</button>
  </form>
  </div>
  `;
  popupContainer.appendChild(popup);
  document.body.appendChild(popupContainer);
  const closePopup = document.querySelector('.close-popup');
  closePopup.addEventListener('click', () => {
    popupContainer.remove();
  });
};

const addNewComment = () => {
  const mealId = document.getElementById('contentId');
  const username = document.getElementById('username');
  const comment = document.getElementById('message');
  const addCommentBtn = document.getElementById('commentBtn');
  addCommentBtn.addEventListener('click', () => {
    if(username.value && comment.value){
      addComment(mealId.value, username.value, comment.value);
      setTimeout(lastCommentItem, 500);
      username.value = '';
      comment.value = '';
    }
  });
};

const popup = () => {
  const mealData = getData();
  mealData.then((value) => {
    for (let i = 0; i < value.length; i += 1) {
      const commentButton = document.getElementById(`commentBtn${value[i].idCategory}`);
      commentButton.addEventListener('click', () => {
        createPopup(value[i]);
        setTimeout(createCommentList, 100)
        setTimeout(addNewComment, 100);
      });
    }
  });
};

export { popup } ;