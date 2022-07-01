// Fetch item from API
import displayList from './display_list.js';

const getData = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PYgIdxnvxE7RLPTKi2DI/likes/';
  const results = await fetch(url);
  const results2 = await fetch(url2);
  const mealObj = await results.json();
  const likesObj = await results2.json();
  const result = mealObj.categories;
  return result;
};

const data = getData();
data.then((value) => {
  displayList(value);
});
export default getData;