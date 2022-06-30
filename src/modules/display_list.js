// Displaying Images in the browser
import getFood from './getfood.js';

const getObj = (arrLike) => {
  const obj = {};
  arrLike.forEach((eachLike) => {
    obj[eachLike.item_id] = eachLike.likes;
  });
  return obj;
};

const displayList = (mealsCategory, allLikes) => {
  const displayItemBlock = document.getElementById('display-item-block');
  displayItemBlock.innerHTML = '';

  const eachObj = getObj(allLikes);
  mealsCategory.forEach((element) => {
    const mealId = Number[element.idCategory];
    const eachLike = eachObj[element.idCategory];
    const itemList = document.createElement('div');

    itemList.classList = `display-item-${element.idCategory} display-items`;

    mealId in getObj ? itemList.innerHTML = getFood(element, eachLike) 
    : itemList.innerHTML = getFood(element);
    displayItemBlock.appendChild(itemList);
  });
};

export default displayList;