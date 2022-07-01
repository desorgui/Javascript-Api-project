import { getComment } from './involvementApi.js';

const commentCounter = (idMeal) => {
  const commentCounterEl = document.getElementById('commentCounter');
  const CommentData = getComment(idMeal);
  CommentData.then((value) => {
    commentCounterEl.innerHTML = `${value.length}`;
  });
};
export default commentCounter;