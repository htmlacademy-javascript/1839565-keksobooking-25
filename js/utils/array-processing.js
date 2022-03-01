import { getRandomNumber } from './random-number.js';

export const getRandomArray = (array) => array.slice(0, getRandomNumber(1, array.length) );

export const getRandomArrayElement = (array) => array[ getRandomNumber(0, array.length - 1) ];
