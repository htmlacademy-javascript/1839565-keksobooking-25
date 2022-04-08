const DATA_COLLECTION_URL = 'https://25.javascript.pages.academy/keksobooking/data';
const DATA_SENDING_URL = 'https://25.javascript.pages.academy/keksobooking';


const getData = (onSuccess, onError) => {
  fetch(DATA_COLLECTION_URL)
    .then((response) => response.json())
    .then((date) => {
      onSuccess(date);
    })
    .catch(() => onError());
};


const sendData = (onSuccess, onError, body) => {
  fetch(DATA_SENDING_URL,
    {
      method: 'POST',
      body
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export {getData, sendData};
