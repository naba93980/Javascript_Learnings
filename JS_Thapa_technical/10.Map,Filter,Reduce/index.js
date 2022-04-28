const myPrices = [100, 200, 300, 400, 500];
//filter creates new array of elements for which the callbackfn returns a truthy value
console.log(myPrices.filter((element, indes) => {
    if ((element >200)&&((element%100) == 0))
        return "element"; //truthy value is being returned so, element get added to new array.
}))
//filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const val = [2, 4, 8, 16, 32];
console.log(val.map((element, index, val) =>
{
    if (element > 9)
    return 1;
    else return false;
}, val));

let newarray = val.map((element, index, val) => {
    return `index  ${index} is of element ${element} that belong to ${val};`
}, val);
console.log(newarray);
// Returns a new array containing the results of calling a function on every element in this array.
let newarrayfor = val.forEach((element, index, val) => {
    return `index  ${index} is of element ${element} that belong to ${val};`
}, val);
console.log( newarrayfor );
//map return an array but foreach returns undefined.
//map is chainable but foreach is not chainable.

let arr = [25, 36, 49, 64, 81];
let squarert = arr.map((element, index, arr) => {
    return (Math.sqrt(element));
})
console.log( squarert );
let arrr = [3, 4, 5, 6, 7];
console.log( 
    arrr.map((element, index) => {
        return element * 2;
    }).filter((element, index) => {
        if (element >= 10)
            return "true";
    }).reduce((sum, element, index, arrr) =>
    {
        return sum += element;
},1000000));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

//reduce

const myMarks = [34, 22, 56, 54, 78];
// const myMarks = []; if this array is passes then reduce will return only 55;
var initialSum = 55;

console.log(myMarks.reduce((sumofMarks, element, index, myMarks) => {
    debugger    
    sumofMarks += element;
    return sumofMarks;
}, initialSum));

//The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

//map gives new array consisting of all new elements, filter filters certain values from original map and put a copy of those values
//in a new array , reduce reduces elements of the array to a certain value based on certain logic given in the callback function

var at = [
    
    ['zone 1', 'zone 2'],
    ['zone 3', 'zone 4'],
    ['zone 5', 'zone 6'],
    ['zone 7', ['zone 8', 'zone 9']],
]
console.log(at.reduce((subarrayaccumulator, currsubarray) => {
    subarrayaccumulator = subarrayaccumulator.concat(currsubarray); //concat() used to concatenate strings or array of characters(in js arry of characters or array of strings)
    return subarrayaccumulator;
    }))
//reduce can also be used to flatten array but better to use another process as given in ES6