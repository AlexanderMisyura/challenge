function getFunction(sequence) {
  const b = sequence[0];
  const k = (sequence[1] - sequence[0]);

  const isLinear = sequence.every((fx, x) => fx === k*x + b);

  if (isLinear) {
    let first = k === 0 ? '' : k === 1 ? 'x' : k === -1 ? '-x' : `${k}x`;
    let sign = k === 0 && b > 0 ? '' : k === 0 && b < 0 ? '-' : k !== 0 && b > 0 ? ' + ' : k !== 0 && b < 0 ? ' - ' : '';
    let second = b === 0 ? '' : `${Math.abs(b)}`;
    
    return 'f(x) = ' + first + sign + second
  }

  return 'Non-linear sequence';
}