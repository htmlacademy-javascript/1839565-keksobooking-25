'use strict'

function getRandomNumber(from, to) {
  if(0 <= from && from < to){
    let number = Math.random() * (to - from) + from;
    return +number.toFixed();
  }
  return console.log('Ведите положительные числа отличающиеся друг от друга!')
}

function getFloatingPointNumber(from, to, quatity){
  if(0 <= from && from < to && 0 <= quatity){
    let number = Math.random() * (to - from) + from;
    return +number.toFixed(quatity);
  }
  return console.log('Ведите положительные числа отличающиеся друг от друга!')
}

