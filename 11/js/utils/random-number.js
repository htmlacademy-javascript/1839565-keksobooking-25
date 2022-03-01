export const getRandomNumber = (from, to) => {
  if (0 <= from && from < to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
  throw new Error('Неверное значение');
};
