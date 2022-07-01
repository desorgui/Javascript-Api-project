import getData from './get-items.js';

const addLikes = async (like) => {
    const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PYgIdxnvxE7RLPTKi2DI/likes/';
    const result3 = await fetch(url2, {
      method: 'POST',
      body: JSON.stringify(like),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    const sendData = await result3.text();
    getData();
    return sendData;
  };

  export default addLikes;