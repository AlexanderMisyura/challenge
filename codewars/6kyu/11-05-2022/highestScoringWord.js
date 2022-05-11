// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.


function high(x){

  const words = x.split(' ');
  const scores = [];
  const alphabet = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

  const countScore = (char, charArray) => charArray.indexOf(char) + 1;

  words.forEach((word) => {
    let counter = 0;
    for (const letter of word) {
      counter += countScore(letter, alphabet);
    }
    scores.push(counter);
  })
  return words[scores.indexOf(Math.max(...scores))]
}
