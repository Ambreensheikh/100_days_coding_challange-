"use strict";
let laptop1prices = [50000, 25000, 12000];
let laptop2prices = [60000, 15000, 45000];
let Bothprices = [...laptop1prices, ...laptop2prices].sort((a, b) => a - b);
console.log(Bothprices);
