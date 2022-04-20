//let vs const vs var

let a = 78; //variable in main execution context but not a property of window global object.
const b = 78;
var c = 789; //property of global window object
w = 99; //property of global window, scope where it is declared doesnot matter
if (true) {
    let d = 78; //variable in main execution context but not a property of window global object.
    const e = 78;
    var f = 789;//property of global window object
    x = 99;//property of global window, scope where it is declared doesnot matter

}
function biodata() {
    
    let g = 78;
    const h = 78;
    var i = 789;
    w = 555;
    y = 99;//property of global window, scope where it is declared doesnot matter
    if (true) {

        var j = 12;
        const k = 13;
        z = 99;//property of global window, scope where it is declared doesnot matter
        console.log(j);
        console.log(k);
        console.log("-----");
        console.log(a);
        console.log(d);

    }
    console.log(j);
    console.log(this.c);

   

}
biodata();

z = 777;
     console.log(this.c);
     console.log(this.a); //undefined in browser as a is in GEC but not in window object of GEC.

console.log(w, z);

//need to check execution context for more indepth understanding.

//https://developer.mozilla.org/en-US/docs/Glossary/Global_object

//https://www.contentful.com/blog/2017/01/17/the-global-object-in-javascript/

//https://stackoverflow.com/questions/39414692/a-javascript-let-global-variable-is-not-a-property-of-window-unlike-a-global

//https://stackoverflow.com/questions/28776079/do-let-statements-create-properties-on-the-global-object

// https://mathiasbynens.be/notes/globalthis

//https://v8.dev/features/modules

// https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/

//https://stackoverflow.com/questions/19855823/are-global-variables-just-properties-on-the-window-object

//https://njkhanh.com/javascript-execution-context-behind-the-scenes-p5f34343830

//https://stackoverflow.com/questions/9384758/what-is-the-execution-context-in-javascript-exactly

//https://cabulous.medium.com/javascript-execution-context-lexical-environment-and-block-scope-part-3-fc2551c92ce0

//https://www.freecodecamp.org/news/javascript-execution-context-and-hoisting/

//in c/c++ global variables are stored in data segment not in  main function activaton record in call stack, but in js it is stored in GEC.

