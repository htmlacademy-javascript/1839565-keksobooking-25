const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const minPrice = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});
const validateTitle = (value) => value.length >= 30 && value.length <= 100;
const validatePrice = (value) => {
  const type = adForm.querySelector('#type');
  return value <= 100000 && value >= minPrice[type.value];
};
const getPriceErrorMessage = () => {
  const type = adForm.querySelector('#type');
  return `От ${minPrice[type.value]} до 100000`;
};

function onTypeChange() {
  price.placeholder = minPrice[this.value];
  pristine.validate(price);
}

adForm.querySelectorAll('#type').forEach((item) => item.addEventListener('change', onTypeChange ));

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  'минимум от 30 до 100 символов'
);

pristine.addValidator(
  price,
  validatePrice,
  getPriceErrorMessage
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
