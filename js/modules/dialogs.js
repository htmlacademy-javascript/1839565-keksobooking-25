import { isEscapeKey } from '../utils/utils.js';

const ALERT_SHOW_TIME = 5000;
const success = document.querySelector('#success')
  .content
  .querySelector('.success').cloneNode(true);

const error = document.querySelector('#error')
  .content
  .querySelector('.error').cloneNode(true);

const showMessage = (element) => {
  document.body.append(element);
  element.addEventListener('click', () => {
    element.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      element.remove();
    }
  });
};
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showSuccessMesage = () => showMessage(success);
const showErrorMesage = () => showMessage(error);

export {showSuccessMesage, showErrorMesage, showAlert};
