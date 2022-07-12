// Complete the function that takes one argument, a list of words, 
// and returns the length of the longest word in the list.

function longest(words) {
  return words.reduce((l, w) => Math.max(l, w.length), 0)
}
