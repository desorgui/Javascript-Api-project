import { getComment } from './involvementApi.js';

const countComment = (array) => array.length;

const commentCounter = (IdMeal) => {
  const commentCounterEl = document.getElementById('commentCounter');
  const CommentData = getComment(IdMeal);
  CommentData.then((value) => {
    commentCounterEl.innerHTML = `${value.length}`;    
    countComment(value);
  });
};
export { commentCounter, countComment };