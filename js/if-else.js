/**
 * Created by Fer on 11/3/16.
 */
"use strict";

var avg = (70 + 80 + 95) / 3;

if(avg >= 80 ){
    console.log("You're awesome");
}else{
    console.log("You need to practice more");
}


// Exercise 2

var cam = 180, ryan = 250, george = 320, discount = 10;
var res = 0;
var client = "";

var amount = ryan;

if(amount == 180){
    client = "Cam";
}else if(amount == 250){
    client = "Ryan";
}else if(amount == 320){
    client = "George";
}

if(amount >= 200){
    //Apply discount
    console.log('discount applied');
    res = (amount / (1+(discount/100)));
}
console.log(client+" Original amount "+amount+" with discount "+res);

var flipACoin = Math.floor(Math.random()* 2)

var whatToBuy = (flipACoin == 1) ? "Buy a house" : "Buy a car";
console.log(whatToBuy);

