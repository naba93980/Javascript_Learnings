const gp = document.querySelector(".grand");
const p = document.querySelector(".parent");
const child = document.querySelector(".child");
/*
//bubbling
//target = element that originally triggered event for first time.
//currentTarget = element which currently is firing the event in the event propagation path.
document.addEventListener('click', (e) =>
{
    console.log("pressed document", e.currentTarget,e.target);
    
})
gp.addEventListener('click', (e) =>
{
    console.log("pressed grand", e.currentTarget, e.target);
    
    
})
// p.addEventListener('click', (e) =>
// {
//     console.log( "pressed parent",e.currentTarget,e.target );
//     // e.stopPropagation(); 
   
// })
p.addEventListener('click', printHi);

child.addEventListener('click', (e) =>
{
    console.log( "pressed child",e.currentTarget,e.target );
    
})
function printHi() {
    console.log( "hi" );  
}
setTimeout(() => {
    p.removeEventListener("click", printHi);
},4000)

//addeventlistener listens to the event fired by the element and assigns the handler to the element
//Elements fire an event, they do not listen to it. We just assign/attach handler to act/handle on the firing of the event, when it occurs. currentTarget is the one where event handler got attached.
//We add an event-listener to an HTML-element. It's not the element that listens, rather it's a listener in the Web-Api that is provided by the browser.

//capturing

document.addEventListener('click', (e) =>
{
    console.log("pressed document", e.currentTarget,e.target);
    
},{capture:true})
gp.addEventListener('click', (e) =>
{
    console.log( "pressed grand",e.currentTarget,e.target);
    
},{capture:true})
p.addEventListener('click', (e) =>
{
    console.log("pressed parent", e.currentTarget, e.target);
    e.stopPropagation();
    
},{capture:true})
child.addEventListener('click', (e) =>
{
    console.log( "pressed child",e.currentTarget,e.target );
    
},{capture:true})

Short answer: The order is:

Capture (down)
Target
Bubble (up).

If you call e.stopPropagation() in the capture phase (by setting the addEventListener()'s 3rd argument to true), it stops at 1, so 2 & 3 cannot receive it.

If you call e.stopPropagation() in the bubble phase (by setting the addEventListener()'s 3rd argument to false or just not assign it), the 1 & 2 already complete, so it just prevents the event from bubbling up from the level where you call stopPropagation().

*/

//Event_Delegation

const divs = window.document.querySelectorAll("div");
console.log(gp.childNodes);
//Although NodeList is not an Array, it is possible to iterate over it with forEach(). It can also be converted to a real Array using Array.from().
Array.from(divs).forEach(ele => {
    ele.addEventListener("click", () => {
        console.log("hi from " + ele.className);        
    })
})
const newDiv = document.createElement("div");
newDiv.style.height = "100px";
newDiv.style.width = "100px";
newDiv.style.backgroundColor = "black";
document.body.appendChild(newDiv);

// newDiv.addEventListener("click", () => {
//     console.log("onnewDiv");    
// })
document.addEventListener("click", (e) =>
{
    console.log("onDocument", e.target);
    if (e.target.matches("div")) {
        console.log("from DIVS");        
    }
    if (e.target.matches(".parent")) {
        console.log( "from DIVSparent" );        
    }    
})
