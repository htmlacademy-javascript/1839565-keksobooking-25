import Advertisement from './modules/advertisement.js';

function createOnArrayOfObject(count) {
  return Array.from({length: count}, (_item, index) => new Advertisement(index) );
}

console.log(createOnArrayOfObject(10));
