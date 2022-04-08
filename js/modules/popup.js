import Advertisement from './advertisement.js';

const DICTIONARY_OF_TYPES = {
  flat : 'Квартира',
  bungalow: 'Бунгало',
  house : 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};
const ADVERTISEMENS__AMOUNT = 10;
const popupTemplate = document.querySelector('#card')
  .content.querySelector('.popup');

function createPopupOffersData(count) {
  return Array.from({length: count}, (_item, index) => new Advertisement(++index) );
}

export const advertisementList = createPopupOffersData(ADVERTISEMENS__AMOUNT);

const createFeatureElement = (feature) => {
  const element = document.createElement('li');
  element.classList.add('popup__feature');
  element.classList.add(`popup__feature--${feature}`);
  return element;
};
const createFeatureList = (array) => {
  const featuresFragment = document.createDocumentFragment();
  array.forEach((item) => {
    const element = createFeatureElement(item);
    featuresFragment.append(element);
  });
  return featuresFragment;
};

const createPhotoElement = (photo) => {
  const element = document.createElement('img');
  element.classList.add('popup__photo');
  element.width = '45';
  element.height = '40';
  element.alt = 'Фотография жилья';
  element.src = photo;
  return element;
};
const createPhotoList = (photos) => {
  const photosFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const element = createPhotoElement(photo);
    photosFragment.append(element);
  });
  return photosFragment;
};

const createPopup = (data) => {
  const avatar = data.author.avatar;
  const offer = data.offer;
  const popupOffer = popupTemplate.cloneNode(true);
  const popupOfferAvatar = popupOffer.querySelector('.popup__avatar');
  const popupOfferTitle = popupOffer.querySelector('.popup__title');
  const popupOfferAddress = popupOffer.querySelector('.popup__text--address');
  const popupOfferPrice = popupOffer.querySelector('.popup__text--price');
  const popupOfferType = popupOffer.querySelector('.popup__type');
  const popupOfferCapacity = popupOffer.querySelector('.popup__text--capacity');
  const popupOfferTime = popupOffer.querySelector('.popup__text--time');
  const popupOfferDescription = popupOffer.querySelector('.popup__description');
  const popupOfferFeatureContainer = popupOffer.querySelector('.popup__features');
  const popupOfferPhotosContainer = popupOffer.querySelector('.popup__photos');

  popupOfferAvatar.src = avatar;
  popupOfferPrice.textContent = offer.price;
  popupOfferType.textContent = DICTIONARY_OF_TYPES[`${offer.type}`];
  popupOfferCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  if (offer.title) {
    popupOfferTitle.textContent = offer.title;
  } else {
    popupOfferTitle.remove();
  }

  if (offer.description) {
    popupOfferDescription.textContent = offer.description;
  } else {
    popupOfferDescription.remove();
  }

  if (offer.address) {
    popupOfferAddress.textContent = offer.address;
  } else {
    popupOfferAddress.remove();
  }

  if (offer.checkin && offer.checkout) {
    popupOfferTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }

  if (offer.feature) {
    popupOfferFeatureContainer.append(createFeatureList(offer.features));
  }

  if (offer.photos) {
    popupOfferPhotosContainer.append(createPhotoList(offer.photos));
  }

  return popupOffer;
};

export {createPopup};
