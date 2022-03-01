const ROOMS_RATIO = 6;
const GUESTS_RATIO = 10;
const FRACTION_DIGIT = 5;
const PRICE_RATIO = 10000;
const LATS = [35.65000, 35.70000];
const LNGS = [139.70000, 139.80000];
const TIMES = ['12:00', '13:00', '14:00'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getRandomNumber(from, to) {
  if (0 <= from && from < to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
  throw new Error('Неверное значение');
}

function getFloatingPointNumber(from, to, fractionDigit) {
  if (0 <= from && from < to && 0 <= fractionDigit) {
    const result = Math.random() * (to - from + 1) + from;
    return +result.toFixed(fractionDigit);
  }
  throw new Error('Неверное значение');
}

function getRandomArray(array) {
  const randomIndex = getRandomNumber(1, array.length);
  return array.slice(0, randomIndex);
}

function getRandomArrayElement(array) {
  const length = array.length - 1;
  return array[getRandomNumber(0, length)];
}

class Advertisement {
  constructor(index) {
    this.author = {
      avatar: `img/avatars/user${index.toString().padStart(2, '0')}.png`
    };

    this.location = {
      lat: getFloatingPointNumber(LATS[0], LATS[1], FRACTION_DIGIT),
      lng: getFloatingPointNumber(LNGS[0], LNGS[1], FRACTION_DIGIT)
    };

    this.offer = {
      title: 'Какой то заголовок',
      address: `${this.location.lat}, ${this.location.lng}`,
      price: Math.floor(Math.random() * PRICE_RATIO),
      type: getRandomArrayElement(TYPES),
      rooms: Math.floor(Math.random() * ROOMS_RATIO),
      guests: Math.floor(Math.random() * GUESTS_RATIO),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomArray(FEATURES),
      description:'Описание помещения',
      photos: getRandomArray(PHOTOS),
    };

  }
}

function createOnArrayOfObject(count) {
  const array = [];
  for (let i = 1; i <= count; i++) {
    array.push(new Advertisement(i));
  }
  return array;
}

createOnArrayOfObject(10);
