// In the case of the Web, events are fired inside the browser window, and tend to be attached to a specific item that resides in it.
// This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window.

//To react to an event, you attach an {event handler} to it. This is a block of code (usually a JavaScript function that you as a
//programmer create that runs when the event fires.When such a block of code is defined to run in response to an event,
//we say we are {registering an event handler}.Note: Event handlers are sometimes called {event listeners} —
//they are pretty much interchangeable for our purposes, although strictly speaking, they work together.
//The {listener listens out for the event happening,} and the {handler is the code that is run in response} to it happening.

//An event called 'click'  fires when the user clicks the button. Objects that can fire events have an addEventListener() method,
//that takes at least two arguments: the name of the event and a function to handle the event

//By convention, Javascript objects that fire events have a corresponding "onevent" properties (named by prefixing "on" to the name of the event).
//These properties are called to run associated handler code when the event is fired


// The Node.js event model relies on listeners to listen for events and emitters to emit events periodically — it doesn't sound that
//different, but the code is quite different, making use of functions like on() to register an event listener, and once() to register
//an event listener that unregisters after it has run once.


//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events

/*
Registering event handlers

There are two recommended approaches for registering handlers. Event handler code can be made to run when an event is triggered by assigning 
it to the target element's corresponding onevent property, or by registering the handler as a listener for the element using the addEventListener() 
method. In either case the handler will receive an object that conforms to the Event interface (or a derived interface). The main difference is that 
multiple event handlers can be added (or removed) using the event listener methods.
*/
// elemenst can use event(eg. click) and has onevent properties(onclick) for event handling.

//In either case the handler will receive an object that conforms to the Event interface (or a derived interface).

/*
4 ways of writing Events in javascript

1. using inline events alert();
2. by calling a function and assining it to element.onevent property
3. using inline events(html onclick property)
4. using addeventlistener function
*/
var fun2 = () => {
    alert("this is 2nd way");
}
//console.log( h ); //Cannot access 'h' before initialization, h remains in temporal dead zone in script object  until it gets initialized., js execution stops as it throws error here
//let h=6;

var btn3 = document.getElementById("btn3");
btn3.onclick = () => alert("this is 3rd way");

var btn4 = document.querySelector("#btn4");
btn4.addEventListener("mouseup", (e) => {
    // alert("this is 4th way");
    // console.warn( e,e.target,e.type );
    window.document.documentElement.style.backgroundColor = "white";
})
btn4.addEventListener("click", (e) => {  //click event is both mousedown then mouseup
    alert("this is 4th way");
    console.warn( e,e.target,e.type );
})
btn4.addEventListener("mousedown", (e) => {
    // alert("this is 4th way");
    // console.warn( e,e.target,e.type );
    window.document.documentElement.style.backgroundColor = "red";
})
//keyboard events
document.addEventListener("keydown", (whichevent) => {
    document.getElementById("keyss").innerHTML = "how are y";
    console.log(whichevent);
})
//input events    
    
document.getElementById("selectflavour").addEventListener('change', () => {
    document.getElementById("result").innerHTML = `${document.getElementById("name").value} loves ${document.getElementById("selectflavour").value}`;
})



//you can call addEventListener('click', handler) on an element multiple times, with different functions specified in the second argument
//With onevent event_handler properties, you can't add more than one handler for a single event(gets overwritten)