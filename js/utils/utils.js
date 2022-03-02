export const getRandomNumber = (from, to) => {
  if (0 <= from && from < to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
  throw new Error('Неверное значение');
};

export const getFloatingPointNumber = (from, to, fractionDigit) => {
  if (0 <= from && from < to && 0 <= fractionDigit) {
    const result = Math.random() * (to - from + 1) + from;
    return +result.toFixed(fractionDigit);
  }
  throw new Error('Неверное значение');
};

export const getRandomArray = (array) => array.slice(0, getRandomNumber(1, array.length) );

export const getRandomArrayElement = (array) => array[ getRandomNumber(0, array.length - 1) ];
