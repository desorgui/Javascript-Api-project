// Displaying Images in the browser
import getFood from './getfood.js';
import newLikes from './addlikes.js';

const getObj = (arrLike) => {
  const obj = {};
  arrLike.forEach((eachLike) => {
    obj[Number(eachLike.item_id)] = Number(eachLike.likes);
  });
  return obj;
};

const displayList = (mealsCategory, allLikes) => {
  const displayItemBlock = document.getElementById('display-item-block');
  displayItemBlock.innerHTML = '';

  const eachObj = getObj(allLikes);
  mealsCategory.forEach((element) => {
    const mealId = Number(element.idCategory);
    const eachLike = eachObj[mealId];
    const itemList = document.createElement('div');
    itemList.classList = `display-item-${element.idCategory} display-items`;

    if (mealId in eachObj) {
      itemList.innerHTML = getFood(element, eachLike);
    } else {
      itemList.innerHTML = getFood(element);
    }
    displayItemBlock.appendChild(itemList);
  });
  newLikes();
};

export default displayList;