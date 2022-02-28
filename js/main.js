function getRandomNumber(from, to) {
  if (0 <= from && from < to) {
    return +Math.floor(Math.random() * (to - from + 1) + from);
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

const LATS = [35.65000, 35.70000];
const LNGS = [139.70000, 139.80000];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getRandomPhotosArray() {
  return Array.from({length: getRandomNumber(1, PHOTOS.length)},
    () => getRandomArrayElement(PHOTOS));
}

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

function getRandomFeaturesArray() {
  return Array.from(new Set(Array.from({
    length: getRandomNumber(1, FEATURES.length)},
  () => getRandomArrayElement(FEATURES)
  )));
}

const TIMES = ['12:00', '13:00', '14:00'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

function getRandomArrayElement(array) {
  const length = array.length - 1;
  return array[getRandomNumber(0, length)];
}

function getAvatarNumber() {
  let number = 1;
  return function () {
    if (number < 10) {return `0${number++}`;}
    return 10;
  };
}

const avatarNumber = getAvatarNumber();

class Advertisement {
  constructor() {
    this.author = {
      avatar: `img/avatars/user${avatarNumber()}.png`
    };

    this.location = {
      lat: getFloatingPointNumber(LATS[0], LATS[1], 5),
      lng: getFloatingPointNumber(LNGS[0], LNGS[1], 5)
    };

    this.offer = {
      title: 'Какой то заголовок',
      address: `${this.location.lat}, ${this.location.lng}`,
      price: Math.floor(Math.random() * 10000),
      type: getRandomArrayElement(TYPES),
      rooms: Math.floor(Math.random() * 10),
      guests: Math.floor(Math.random() * 10),
      checkin: getRandomArrayElement(TIMES),
      checkout: getRandomArrayElement(TIMES),
      features: getRandomFeaturesArray(),
      description:'Описание помещения',
      photos: getRandomPhotosArray(),
    };

  }
}

const advertisementList = Array.from({length: 10} , () => new Advertisement());
