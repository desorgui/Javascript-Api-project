import { getComment } from './involvementApi.js';

const commentCounter = (iDMeal) => {
  const commentCounterEl = document.getElementById('commentCounter');
  const CommentData = getComment(iDMeal);
  CommentData.then((value) => {
  commentCounterEl.innerHTML = `${value.length}`;
  });
};
export default commentCounter;