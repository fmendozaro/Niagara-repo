"use strict";

var myNameIs = 'Fernando'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello plus the passed value in the name parameter.
function generateHello(name){
    //console.log("Hello " + name);
    return "Hello "+ name;
}

console.log(generateHello(myNameIs));

// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

sayHello(myNameIs);

// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

function isOdd(number){
    var res = ( number % 2 == 0 ) ? number + " Is Even" : number + " is Odd";
    //console.log(res);
    return res;
}

isOdd(random);
console.log(isOdd(random));

//alert(isOdd(random));


// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
