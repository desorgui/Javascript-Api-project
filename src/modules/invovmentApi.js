const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = 'ZwEIM6qjuOV08HbkSn58';

const addComment = async (mealId, username, comment) => {
  await fetch(`${involvementApi}/apps/${appID}/comments`,
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${mealId}`,
        username: `${username}`,
        comment: `${comment}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
};

const getComment = async (mealId) => {
  const getData = await fetch(`${involvementApi}/apps/${appID}/comments?item_id=${mealId}`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  let results = '';
  if (getData.status !== 400) {
    results = await getData.json();
  }
  return results;
};

const createLi = (date, username, comment) => {
  const listCommentContainer = document.getElementById('commentList');
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerHTML =`
  <span class="username">${username} .</span>
  <span class="commentDate">${date}</span>
  </br><span class"commentMessage">${comment}</span>`;
  listCommentContainer.appendChild(listItem);
}

const createCommentList = () => {
  const commentCounter = document.getElementById('commentCounter');
  const mealId = document.getElementById('contentId');
  const commentData = getComment(mealId.value);
  commentData.then(value => {
    let counter = 0;
    if (value) {
      value.forEach(element => {
        counter += 1;
        createLi(element.creation_date, element.username, element.comment)
      });
    }    
    commentCounter.innerHTML = `${counter}`;
  });
};

let lastComment = [];
const lastCommentItem = () => {
  const mealId = document.getElementById('contentId');
  const commentData = getComment(mealId.value);
  commentData.then(value => {
    lastComment = value[value.length -1];    
    createLi(lastComment.creation_date, lastComment.username, lastComment.comment);
  });
};


export { addComment, createCommentList, lastCommentItem };