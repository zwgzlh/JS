//задание 1
function random(max) {
  return Math.random() * max;
}

function countDigits(value) {
  if (value > 999) {
    return {};
  }

  let digitInfo = { number: value, hundreds: 0, tens: 0, units: 0 };
  digitInfo.hundreds = Math.trunc(value / 100);
  digitInfo.tens = Math.trunc((value % 100) / 10);
  digitInfo.units = Math.trunc((value % 100) % 10);

  return digitInfo;
}
﻿//задание 2
let glasses  = {
    name: “Оправа”,
    price: 12000,
    quantity: 1
};
let lenses = {
    name: “Линзы”,
    price: 5000,
    quantity: 2
};
let basket = [glasses, lenses];
let sum = 0;
for ( i = 0; i < basket.length; i++ ) {
let item = basket [i];
sum += item.price * item.quantity;
};
