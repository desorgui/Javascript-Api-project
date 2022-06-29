const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appID = '';

export const createApp = async () => {
  const response =  fetch(`${involvementApi}/apps/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
  });
  const data =  await response.json();
  console.log(data);
};
