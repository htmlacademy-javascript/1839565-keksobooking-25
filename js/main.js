function getRandomNumber(from, to) {
  if(0 <= from && from < to){
    const result = Math.random() * (to - from) + from;
    return +result.toFixed();
  }
  return 'Ведите положительные числа отличающиеся друг от друга!';
}

function getFloatingPointNumber(from, to, quatity){
  if(0 <= from && from < to && 0 <= quatity){
    const result = Math.random() * (to - from) + from;
    return +result.toFixed(quatity);
  }
  return 'Ведите положительные числа отличающиеся друг от друга!';
}

getRandomNumber(1, 10);
getFloatingPointNumber(1, 10, 3);
