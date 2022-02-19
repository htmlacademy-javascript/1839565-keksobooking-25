function getRandomNumber(from, to) {
  if (
      0 <= from &&
      from < to
  ) {
    const result = Math.floor(Math.random() * (to - from + 1) + from);
    return +result;
  }
  throw new Error ("Неверное значение");
}

function getFloatingPointNumber(from, to, quatity) {
  if (
      0 <= from &&
      from < to &&
      0 <= quatity
  ) {
    const result = Math.random() * (to - from + 1) + from;
    return +result.toFixed(quatity);
  }
  throw new Error ("Неверное значение");
}

getRandomNumber(1, 10);
getFloatingPointNumber(1, 10, 3);
