// Fetch item from API
//import displayList from './display_list';

const likeCount = document.getElementById('like-count');

const getLikes = async () => {
  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PYgIdxnvxE7RLPTKi2DI/likes/';
  const results2 = await fetch(url2);
  
  return results2;
};
export default getLikes;