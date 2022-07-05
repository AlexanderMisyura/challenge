function correctTail(body, tail ) {
  const sub = body.substring(body.length-tail.length);
  
  if (sub === tail) return true
  else return false  
}
