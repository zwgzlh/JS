//задание 1
let max = 999;
    let digit = {
         number: Math.round (Math.random() * max),
         units: 0,
         tens: 0,
         hundreds: 0,
};
        if (digit.number <= 9){
          digit.units = digit.number;
        } else if (digit.number <= 999){
          digit.units =  digit.number / 10;
          digit.tens = digit.number / 10 % 10;
          digit.hundreds = digit.number / 100 % 10 ;
        }
        console.log(digit);

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
