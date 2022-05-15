function numberOfCarries(a, b) {
  var _ = require('underscore');
  let zipped = _.zip([...`${a}`], [...`${b}`])
  zipped.map(([n, m]) => (+n || 0) + (+m || 0)).reduce((acc, curr) => {

  }, 0)
}

console.log(...'487')
console.log(numberOfCarries(1927,6426))