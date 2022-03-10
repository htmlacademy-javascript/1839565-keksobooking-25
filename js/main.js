import Advertisement from './modules/advertisement.js';
import Generator from './modules/generator.js';

function createOnArrayOfObject(count) {
  return Array.from({length: count}, (_item, index) => new Advertisement(++index) );
}

const options = createOnArrayOfObject(1);
const map = document.querySelector('#map-canvas');

options.forEach((element) => {
  const elem = new Generator (element);
  map.insertAdjacentHTML('afterbegin', elem.render());
});

