//window object allows execution of code at specific time intervals
//https://linuxhint.com/timing-events-in-javascript/
//settimeout and setinterval are timing events available to use as global methods.
//setinterval is same as settimeout but repeats the execution of function continuously
//settimeout runs a function only once
//The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
//The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.
document.getElementById("btn1").onclick = () =>
{
    console.log(setTimeout((() => {
        document.getElementById("me").innerHTML = `${Date().toLocaleString()}`;
    }), 200));
    clearTimeout((setTimeout((() => {
        document.getElementById("me").innerHTML = `${Date().toLocaleString()}`;
    }), 300)));
}
const button1 = document.getElementById("btn1");
button1.addEventListener('click', () => {
    console.log(setTimeout((() => {
        document.getElementById("me").innerHTML = `${Date().toLocaleString()}`;
    }), 3000));
})
const button2 = document.getElementById("btn2");
button2.addEventListener('click', () => {
    document.getElementById("mee").innerHTML="loading..."
    console.log(setTimeout((() => {
        document.getElementById("mee").innerHTML = `${Date().toLocaleString()}`;
    }), 4000));
})
var button3 = document.getElementById("btn3");
let stop=null;
button3.addEventListener('click', () => {
    stop=setTimeout(() => {
        alert("u pressed");
    }, 2000)
    console.log( stop );
    
})
//settimeout returns timeoutID even before the code is actually executed.
const button4 = document.getElementById("btn4");
button4.addEventListener('click', () => {
    console.log( "pressed stop" );   
    console.log( stop );   
    clearTimeout(stop);
})


let stop2 = null;
let val = 25;
const button5 = document.getElementById("btn5");
button5.addEventListener('click', () => {
    if (stop2 != null)
        clearInterval(stop2);
    stop2 = setInterval(() => {
        console.log(`val= ${val++}`);
    }, 200);
    console.log(`stop2= ${stop2}`);
});

const button6 = document.getElementById("btn6");
button6.addEventListener('click', () => {   
    console.log(stop2);
    clearInterval(stop2);
})




//https://developer.mozilla.org/en-US/docs/Web/API/setTimeout