function evaporator(_, e_p_d, t){
  let day = 0;
  for (let cont = 100; cont >= t; cont -= cont * e_p_d / 100) {
    day++;
  }
  return day;
}
