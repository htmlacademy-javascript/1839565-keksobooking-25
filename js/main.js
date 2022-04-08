import './modules/map.js';
import { addMarkersToMap } from './modules/map.js';
import { showAlert } from './modules/dialogs.js';
import { getData } from './modules/api.js';

const ERROR_MESSAGE = 'Ошибка получения данных';
const onError = () => showAlert(ERROR_MESSAGE);

getData(addMarkersToMap, onError);
