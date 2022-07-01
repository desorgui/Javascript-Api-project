import { addLikes } from './get-items.js';

const newLikes = () => {
  const likeBtn = document.querySelectorAll('.like');
  likeBtn.forEach((eachLike) => {
    eachLike.addEventListener('click', (e) => {
      const id = Number(e.target.id.slice(4));
      addLikes({ item_id: id });
    });
  });
};

export default newLikes;