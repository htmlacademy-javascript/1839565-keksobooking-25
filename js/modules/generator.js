const DICTIONARY_OF_TYPES = {
  flat : 'Квартира',
  bungalow: 'Бунгало',
  house : 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const createHtmlElementLi = (elem) => `<li class="popup__feature popup__feature--${elem}"></li>`;
const createHtmlElementImg = (elem) => `<img src="${elem}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;

export default class Generator {

  constructor(options) {
    this.root = options;
    this.offer = this.root.offer;
    this.title = this.offer.title;
    this.address = this.offer.address;
    this.price = this.offer.price;
    this.type = this.offer.type;
    this.rooms = this.offer.rooms;
    this.guests = this.offer.guests;
    this.checkin = this.offer.checkin;
    this.checkout = this.offer.checkout;
    this.description = this.offer.description;
    this.photos = this.offer.photos;
    this.features = this.offer.features;
    this.avatar = this.root.author.avatar;
  }

  render() {
    return `<article class="popup">
              ${this.avatar ? `<img src="${this.avatar}" class="popup__avatar" width="70" height="70" alt="Аватар пользователя"></img>` : ''}
              ${this.title ?  `<h3 class="popup__title">${this.title}</h3>` : '' }
              ${this.address ? `<p class="popup__text popup__text--address">${this.address}</p>` : '' }
              ${this.price ? `<p class="popup__text popup__text--price">${this.price} <span>₽/ночь</span></p>` : '' }
              ${this.type ? `<h4 class="popup__type">${DICTIONARY_OF_TYPES[this.type]}</h4>` : '' }
              ${this.rooms && this.guests ? `<p class="popup__text popup__text--capacity">${this.rooms} комнаты для ${this.guests} гостей</p>` : '' }
              ${this.checkin && this.checkout ? `<p class="popup__text popup__text--time">Заезд после ${this.checkin}, выезд до ${this.checkout}</p>` : '' }
              ${this.features ? `<ul class="popup__features">
                                ${this.features.map((element) => createHtmlElementLi(element)).join('')}
                                </ul>` : '' }
              ${this.description ? `<p class="popup__description">${this.description}</p>` : ''}
              ${this.photos ? `<div class="popup__photos">
                              ${this.photos.map((element) => createHtmlElementImg(element)).join('')}
                              </div>` : ''}
            </article>`;
  }
}
