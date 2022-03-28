import {activateForm} from './state-form.js';
import {createPopupOffersData, createPopup} from './popup.js';

const apartmentAddress = document.querySelector('#address');
const ADVERTISEMENS__AMOUNT = 10;
const advertisementList = createPopupOffersData(ADVERTISEMENS__AMOUNT);
const offerIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const marker  = L.marker(
  {
    lat: 35.652832,
    lng: 139.839478,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  }
);
const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.652832,
    lng: 139.839478
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

apartmentAddress.setAttribute('readonly', 'readonly');
marker.addTo(map);

marker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  apartmentAddress.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
});

advertisementList.forEach((advertisement) => {
  const {lat, lng} = advertisement.location;
  const popup = createPopup(advertisement);
  const offerMarker = L.marker(
    {
      lat,
      lng
    },
    {
      icon: offerIcon
    }
  );

  offerMarker
    .addTo(map)
    .bindPopup(popup);
});
