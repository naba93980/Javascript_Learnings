/*
Event Propagation (Event Bubbling and Event Capturing)
order ---> event capture ---> event target ------> event bubbling

Event bubbling and capturing are two ways of event propagation in the HTML DOM API, when an event 
occurs in an element inside another element, and both elements have  registered a handle for that event.

The event propagation mode determines in which order the elements recelve the event.

-----------------------------------
*/

//Higher Order Function -> takes function as argument

function sum(a, b) {
    return a + b;
}

function calculate(a,b,operator) {
    return sum(a, b);
}
console.log( calculate(5,6,sum) );


//---------------------------------
//Callback Function

//uses concept of lexical scoping,higher order,callback
function calculate2(a, b, operator2) {
    return operator2(a,b);
}
console.log(calculate2(4, 7, (a,b) => {
    return a - b;
}
));
//operator2 is callback function
//calculate2 is higherorder function
//operator2 when called takes a and b from its lexical environment, which are arguments a and b of calculate2


//----------------------------------
//Hoisting


// x is hoisted and initialized with undefined
console.log(x); 
var x = 5;

// console.log( y ); //let and const declarations remain uninitialized. They will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript engine.
// let y = 6;

//----------------------------------
/*

7️⃣ What is Closures in JavaScript 🤔

A closure is the combination of a function bundled together (enclosed) with references 
to its surrounding state (the lexical environment). 

In other words, a closure gives you 
access to an outer function’s scope from an inner function. 

In JavaScript, closures are created every time a function is created, at function creation time.

https://itnext.io/javascript-event-listeners-delegation-vs-closures-8fe52ac49872


"because the callback function in our .then() is closed over the callback function of our event listener, which is closed over the entire forEach statement where our itemLi variable lives."

//---------------------------------


Function Currying (We will see after Async JS section)

CallBack Hell

AJAX call using XMLHttprequest

BONUS Section JSON

Fetch API

Promises

Async-Await

Error Handling in JS
*/