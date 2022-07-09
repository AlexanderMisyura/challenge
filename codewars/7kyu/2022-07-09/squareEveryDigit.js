// square every digit of a number and concatenate them.

function squareDigits(num){
  return `${num}`.split('').map(n => n * n).join('');
}
