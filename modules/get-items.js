// Fetch item from API
import displayList from "./display_list";

const getData = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
  const request = new Request(url);
  const results = await fetch(request);
  const gameObj = await results.json();
  const [...result] = gameObj.categories;
  displayList(result);
};
export default getData;