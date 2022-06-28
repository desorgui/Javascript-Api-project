// Fetch item from API

import displayList from "./display_list";
const getData = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    const request = new Request(url);
    const results = await fetch(request);
    const gameObj = await results.json();
    //console.log(gameObj.categories);
    const [ ...result ] = gameObj.categories;
    //console.log(result);
    displayList(result);
  };
  
  export default getData;
  