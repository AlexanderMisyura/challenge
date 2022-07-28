// Write a function that takes an integer as input, and returns the number of bits 
// that are equal to one in the binary representation of that number. 
// You can guarantee that input is non-negative.
// Example: The binary representation of 1234 is 10011010010, 
// so the function should return 5 in this case

var countBits = function(string, symb) {
  return string.split(symb).length - 1
};

console.log(countBits('10010111', ))
// .split('n').length возвращает массив, чья длина равна количеству сепараторов + 1
