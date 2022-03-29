import {createPopup, advertisementList} from './popup.js';
import {setAdress, activateForm} from './ad-form.js';

const TOKYO__CENTER = {
  lat: '35.652832',
  lng: '139.839478'
};
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
const mainMarker  = L.marker(
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
    setAdress(`${TOKYO__CENTER.lat}, ${TOKYO__CENTER.lng}`);
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

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const {lat, lng} = evt.target.getLatLng();
  setAdress(`${lat.toFixed(5)}, ${lng.toFixed(5)}`);
});

const createMarker = ({lat, lng}, icon) =>  L.marker({lat, lng}, {icon});
const addMarkersToMap  = (advertisements) => {
  advertisements.forEach((item) => {
    const popup = createPopup(item);
    const offerMarker = createMarker(item.location, offerIcon);

    offerMarker
      .addTo(map)
      .bindPopup(popup);
  });
};

addMarkersToMap(advertisementList);
