import Advertisement from './advertisement.js';

const DICTIONARY_OF_TYPES = {
  flat : 'Квартира',
  bungalow: 'Бунгало',
  house : 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};
const POPUP_OFFER_AMOUNT = 2;

const map = document.querySelector('#map-canvas');
const popupTemplate = document.querySelector('#card')
  .content.querySelector('.popup');

function createOnArrayOfObject(count) {
  return Array.from({length: count}, (_item, index) => new Advertisement(++index) );
}

const popupOffers = createOnArrayOfObject(POPUP_OFFER_AMOUNT);

popupOffers.forEach(({author, offer}) => {

  const popupOffer = popupTemplate.cloneNode(true);
  const popupOfferAvatar = popupOffer.querySelector('.popup__avatar');
  const popupOfferTitle = popupOffer.querySelector('.popup__title');
  const popupOfferAddress = popupOffer.querySelector('.popup__text--address');
  const popupOfferPrice = popupOffer.querySelector('.popup__text--price');
  const popupOfferType = popupOffer.querySelector('.popup__type');
  const popupOfferCapacity = popupOffer.querySelector('.popup__text--capacity');
  const popupOfferTime = popupOffer.querySelector('.popup__text--time');
  const popupOfferFeatureContainer = popupOffer.querySelector('.popup__features');
  const popupOfferFeatureList = popupOfferFeatureContainer.querySelectorAll('.popup__feature');
  const popupOfferPhotosContainer = popupOffer.querySelector('.popup__photos');
  const popupOfferPhotositem = popupOfferPhotosContainer.querySelector('.popup__photo');

  popupOfferAvatar.src = author.avatar;
  popupOfferPrice.textContent = offer.price;
  popupOfferType.textContent = DICTIONARY_OF_TYPES[`${offer.type}`];
  popupOfferCapacity.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

  if (offer.title) {
    popupOfferTitle.textContent = offer.title;
  } else {
    popupOfferTitle.remove();
  }

  if (offer.address) {
    popupOfferAddress.textContent = offer.address;
  } else {
    popupOfferAddress.remove();
  }

  if (offer.checkin && offer.checkout) {
    popupOfferTime.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  }

  popupOfferFeatureList.forEach((popupOfferFeatureListItem) => {
    const isNecessary = offer.features.some(
      (feature) => popupOfferFeatureListItem.classList.contains(`popup__feature--${feature}`),
    );

    if (!isNecessary) {
      popupOfferFeatureListItem.remove();
    }
  });

  popupOfferPhotosContainer.innerHTML = '';
  offer.photos.forEach((photo) => {
    const popupOfferPhoto = popupOfferPhotositem.cloneNode(true);
    popupOfferPhoto.src = photo;
    popupOfferPhotosContainer.append(popupOfferPhoto);
  });

  map.appendChild(popupOffer);
});
