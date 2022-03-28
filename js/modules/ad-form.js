const adForm = document.querySelector('.ad-form');
const price = adForm.querySelector('#price');
const types = adForm.querySelectorAll('#type');
const rooms = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const type = adForm.querySelector('#type');
const sliderElement = document.querySelector('.ad-form__slider');
const apartmentAddress = document.querySelector('#address');
const mapFiltresForm = document.querySelector('.map__filters');
const titleError = 'минимум от 30 до 100 символов';

const capacityOptions = {
  1: ['для 1 гостя'],
  2: ['для 2 гостей', 'для 1 гостя'],
  3: ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  100: ['не для гостей']
};
const minPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

export function setAdress (value) {
  apartmentAddress.value = value;
}
export function disabledForm () {
  adForm.classList.add('ad-form--disabled');
  mapFiltresForm.classList.add('map__filters--disabled');
}
export function activateForm () {
  apartmentAddress.setAttribute('readonly', 'readonly');
  adForm.classList.remove('ad-form--disabled');
  mapFiltresForm.classList.remove('map__filters--disabled');
}


const validateTitle = (value) => value.length >= 30 && value.length <= 100;
const validatePrice = (value) => value <= 100000 && value >= minPrice[type.value];
const validateCapacity = () => capacityOptions[rooms.value].includes(capacity.value);
const getPriceErrorMessage = () => `От ${minPrice[type.value]} до 100000`;
const getCapacityErrorMessage = () => `${rooms.value} ${capacityOptions[rooms.value].join(' или ')}`;

function onTypeChange () {
  price.placeholder = minPrice[this.value];
  pristine.validate(price);
}

types.forEach((item) => item.addEventListener('change', onTypeChange ));

pristine.addValidator(
  adForm.querySelector('#title'),
  validateTitle,
  titleError
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

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value.toFixed(0));
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  price.value = sliderElement.noUiSlider.get();
});

type.addEventListener('change', (evt) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: minPrice[evt.target.value],
      max: 100000,
    }
  });
  sliderElement.noUiSlider.set(minPrice[evt.target.value]);
});
