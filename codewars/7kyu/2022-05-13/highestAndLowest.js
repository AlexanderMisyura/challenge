function highAndLow(str) {
  const nums = str.split(' ').map(n => +n);
  let [max, min]  = [Math.max(...nums), Math.min(...nums)];
  return `${max} ${min}`;
}
