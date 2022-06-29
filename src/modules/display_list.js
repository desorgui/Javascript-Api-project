// Displaying Images in the browser
const displayItemBlock = document.getElementById('display-item-block');

const displayList = (mealsCategory) => {
  mealsCategory.forEach((element, index) => {
    const eachList = `
      <div class="display-item-1 display-items">
      <div class="item-img-block">
          <img class="images" src="${element['strCategoryThumb']}" alt="Chicken">
      </div>
      <div class="item-title-like">
          <h2 class="title-1 titles">${element['strCategory']}</h2>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
      </div>
      <button type="button" id="commentBtn${element['idCategory']}" class="comment-btn">Comments</button>
      </div>
    `;
    displayItemBlock.insertAdjacentHTML('beforeend', eachList);    
  });
}

export default displayList;