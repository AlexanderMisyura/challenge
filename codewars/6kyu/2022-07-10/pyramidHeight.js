var pyramidHeight = function(n){
  let layers = 1;
  while (n >= 0) {
    n -= layers * layers;
    console.log(layers);
    if (n < 0) return layers;
    else layers++;
  };
}

console.log(pyramidHeight(5))