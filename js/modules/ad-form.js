const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const types = adForm.querySelectorAll('#type');
const rooms = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');

const capacityOptions = {
  '1': ['для 1 гостя'],
  '2': ['для 2 гостей', 'для 1 гостя'],
  '3': ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100': ['не для гостей']
}
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
const validateCapacity = () => capacityOptions[rooms.value].includes(capacity.value);
const getPriceErrorMessage = () => {
  const type = adForm.querySelector('#type');
  return `От ${minPrice[type.value]} до 100000`;
};
const getCapacityErrorMessage = () => {
  return `${rooms.value} ${capacityOptions[rooms.value].join(' или ')}`
};

function onTypeChange () {
  price.placeholder = minPrice[this.value];
  pristine.validate(price);
}

types.forEach((item) => item.addEventListener('change', onTypeChange ));

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
pristine.addValidator(
  rooms,
  validateCapacity,
  getCapacityErrorMessage
);
pristine.addValidator(
  capacity,
  validateCapacity,
  getCapacityErrorMessage
);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
