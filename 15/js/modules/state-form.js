const map = document.querySelector('.map__canvas');
const adForm = document.querySelector('.ad-form');
const mapFiltresForm = document.querySelector('.map__filters');
const adFormElements = Array.from(adForm.elements);
const mapFiltresFormElements = Array.from(mapFiltresForm.elements);


function disabledForm () {
  map.innerHTML = '';
  adForm.classList.add('ad-form--disabled');
  mapFiltresForm.classList.add('map__filters--disabled');
  adFormElements.forEach( (item) => item.setAttribute('disabled', 'disabled') );
  mapFiltresFormElements.forEach( (item) => item.setAttribute('disabled', 'disabled') );
}

function activateForm () {
  adForm.classList.remove('ad-form--disabled');
  mapFiltresForm.classList.remove('map__filters--disabled');
  adFormElements.forEach( (item) => item.removeAttribute('disabled') );
  mapFiltresFormElements.forEach( (item) => item.removeAttribute('disabled') );
}

disabledForm();
activateForm();
