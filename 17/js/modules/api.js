import { clickResetFormBtn } from './ad-form.js';
const DATA_URL = 'https://25.javascript.pages.academy/keksobooking/data';
const SERVER_URL = 'https://25.javascript.pages.academy/keksobooking';

const showSuccessMessage = () => {
  const success = document.querySelector('#success')
    .content
    .querySelector('.success').cloneNode(true);

  document.body.append(success);
  success.addEventListener('click', () => {
    success.remove();
  });
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {success.remove();}
  });
  clickResetFormBtn();
};

const showErrorMessage = () => {
  const error = document.querySelector('#error')
    .content
    .querySelector('.error').cloneNode(true);
  const errorCloseBtn = error.querySelector('.error__button');

  document.body.append(error);
  errorCloseBtn.addEventListener('click', () => {
    error.remove();
  });
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {error.remove();}
  });
};

const getData = (onSuccess) => {
  fetch(DATA_URL)
    .then((response) => response.json())
    .then((date) => {
      onSuccess(date);
    });
};


const sendData = (data) => {
  fetch( SERVER_URL, {method: 'POST', body: data} )
    .then((response) => {
      if (response.ok) {
        showSuccessMessage();
      } else {
        showErrorMessage();
      }
    })
    .catch(() => {
      showErrorMessage();
    });
};

export {getData, sendData};
