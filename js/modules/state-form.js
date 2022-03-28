const adForm = document.querySelector('.ad-form');
const mapFiltresForm = document.querySelector('.map__filters');


export function disabledForm () {
  adForm.classList.add('ad-form--disabled');
  mapFiltresForm.classList.add('map__filters--disabled');
}

export function activateForm () {
  adForm.classList.remove('ad-form--disabled');
  mapFiltresForm.classList.remove('map__filters--disabled');
}
