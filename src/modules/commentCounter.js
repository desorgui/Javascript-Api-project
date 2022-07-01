import { getComment } from './involvementApi.js';

const countComment = (array) => array.length;

const commentCounter = (IdMeal) => {
  const commentCounterEl = document.getElementById('commentCounter');
  const CommentData = getComment(IdMeal);
  CommentData.then((value) => {
    countComment(value);
    commentCounterEl.innerHTML = `${value.length}`;
  });
};
export { commentCounter, countComment };