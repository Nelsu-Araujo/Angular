"use strict";
// G
let change = 0;
let finalChange = 0;
let message = "";
change = Number(prompt("Please insert the change: "));
finalChange = change * (1 - 0.1);
message = `The real change is ${finalChange}.`;
alert(message);
