import './modules/map.js';
import { addMarkersToMap } from './modules/map.js';
import { setAdFormSubmit } from './modules/ad-form.js';
import { getDate } from './modules/api.js';
import { showSuccessMessage } from './utils/utils.js';

getDate(addMarkersToMap);
setAdFormSubmit(showSuccessMessage);
