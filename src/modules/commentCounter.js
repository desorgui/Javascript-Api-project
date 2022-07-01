import { getComment } from './involvementApi.js';

const countComment = (array) => array.length;

const commentCounter = (IdMeal) => {
  const commentCounterEl = document.getElementById('commentCounter');
  const CommentData = getComment(IdMeal);
  CommentData.then((value) => {
    const commentNumber = countComment(value);
    commentCounterEl.innerHTML = `${commentNumber}`;
  });
};
export { commentCounter, countComment };