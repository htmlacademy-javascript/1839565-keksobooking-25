import './modules/map.js';
import { addMarkersToMap } from './modules/map.js';
import { setAdFormSubmit } from './modules/ad-form.js';
import { getData } from './modules/api.js';

getData(addMarkersToMap);
setAdFormSubmit();
