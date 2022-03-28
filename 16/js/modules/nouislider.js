const sliderElement = document.querySelector('.ad-form__slider');
const price = document.querySelector('#price');
const type = document.querySelector('#type');
const minPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

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
      return parseFloat(value);
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
