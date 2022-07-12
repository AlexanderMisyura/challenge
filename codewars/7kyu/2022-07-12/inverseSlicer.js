// write a function inverse_slice() that takes three arguments: 
// a list items, an integer a and an integer b. 
// The function should return a new list with the slice specified by items[a:b] excluded. 

function inverseSlice(items, a, b) {
  const i = [...items]
  i.splice(a, b - a);
  return i;
}
