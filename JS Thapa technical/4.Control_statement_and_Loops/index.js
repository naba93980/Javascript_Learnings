var x = '5';
if (x == 5)
{
    console.log("matched")
}
if (x === 5)
{
    console.log("not matched");
}
else {
    console.log("nai");
}
var x = 2008;
if (x % 4 == 0) {
    if (x % 100 == 0) {
        if (x % 400 == 0) {
            console.log("leap year");
        }
        else {
            console.log("not leap yer")
        }
    }
    else console.log("leap year");

} 

//truthy, falsy
if (0)
{
    console.log("truthy");
}
else {
    console.log("falsy");
}
if ("")
{
    console.log("truthy");
}
else {
    console.log("falsy");
}
if (null)
{
    console.log("truthy");
}
else {
    console.log("falsy");
}
if (undefined)
{
    console.log("truthy");
}
else {
    console.log("falsy");
}
if (false)
{
    console.log("truthy");
}
else {
    console.log("falsy");
}
if (NaN)
{
    console.log("truthy");
}
else {
    console.log("falsy");
}
if ('a')
{
    console.log("truthy");
}
else {
    console.log("falsy");
}

console.log("------------------------------");
    
var x=3;
 switch (1)
{
    case 1: console.log(3 + 3);
        // break;
    case 2: console.log(3 * 3);
        // break;
    case 3: console.log(3 % 3);
        // break;
    case 4: console.log(3 - 3);
        // break;
    case 5: console.log(3 / 3 + "hello");
        // break;
    default: console.log("sahi value dal gadhe");
}
//imagine a variable flag, if set to 1, then case matching doesnot take place and statements for all case gets executed.
//if flag is 0 as per initial value, and no case matches then default case sets flag to 1 and executes its statement.

console.log("------------------------------");
var varWhile = 5;
while (varWhile > 0)
{//--------------blockscope begins
    console.log(varWhile);
    varWhile--;
}//--------------blockscope ends

var dovarWhile = 5;
console.log("------------------------------");
do {
    console.log(dovarWhile);
    dovarWhile--;
    
} while (dovarWhile > 0);
console.log("------------------------------");

for (var loop = 1; loop <= 6; loop++)
{
    console.log(loop);
}
console.log("------");
console.log(loop); 
console.log("------------------------------");
for (let loopi = 1; loopi <= 6; loopi++)
{
    console.log(loop);
}
console.log("------");
// console.log(loopi); //loopi belongs only upto for block scope

//using let in the for loop like that should bind the variable in the scope of the loop's body.
/*

//https://stackoverflow.com/questions/16473350/let-keyword-in-the-for-loop#:~:text=According%20to%20MDN%20using%20let,scope%20of%20the%20loop's%20body.


let/const declarations in "standard" C-style for-loops have
some complex desugaring to accommodate the case where loop
loop variables may be captured. This slows down the baseline
performance of for-loops with let variables.

This change attempts to avoid this desugaring if it's known that
the loop variable is not captured at any point. A side effect of
this change is that let/const loop variables, when not captured
within the loop body, are not necessarily shown in the debugger,
similar to other stack-allocated vars.

*/
var tableOf = 12;
var num = 10;
for (var count = 1; count <= num; count++)
{
    console.log(tableOf + " * " + count + " = " + tableOf *count);
}