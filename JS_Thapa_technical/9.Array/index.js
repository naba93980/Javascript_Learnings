var myfriends = ['ram', 'shyam', 5, true, null, undefined];
console.log(myfriends);
console.log(typeof(myfriends));
var myFriends = new Array('naba', 'modak', 9044, 'cse');
console.log(myFriends);
console.log(typeof (myFriends));
console.log( myFriends instanceof Array );
console.log( typeof(Array) );
console.log( myFriends instanceof Object );
console.log( Array instanceof Object );
console.log(myFriends.length);
for (let i = 0; i < myFriends.length; i++) {
    var x = i;
    console.log( x );
    console.log( typeof(x) );
    const element = myFriends[x];
    console.log(typeof(element));
    console.log( typeof(x) );
}
for (var keysss in myfriends) {  
    console.log(keysss);
    const element = myfriends[keysss];   
    console.log( element );       
}
console.log( myfriends[0] );

//since arrays are also object, so the array is internally stored as objects, where the
//indexes are  basically keys and elements at that indexes are values of that key.
//now since in object in js every key is stored/coerced as a string, so every index initially
//entered as integers gets coerced as string.

console.log("-----------------for of ---------------");
//elements is iterator(values of key/value pairs) of object
for (const elements of myfriends) {
    console.log(elements);
    console.log( typeof(elements) );     
}
//break continue works in normal for,forin,forof but not in forEach
myFriends.forEach((element,index,array) => {
    console.log( element );
    
});
console.log( "-------------------------------" );

myFriends.forEach((element, index, myFriends) => {
    console.log(element); return 0;
});
//for in - gives only index number,
//for of - gives only elements,
//forEach - gives both elements and index, cant use break, continue statement

//searching & filter

//Returns the first (least) index of an element within the array equal
//to an element, or -1 if none is found. It search the element last to first

let namesofMyfriends = ['akash', 'pakash', 'jhakas','akash'];
console.log(namesofMyfriends.indexOf("akash"));//Returns the index of the first occurrence of a value in an array
console.log(namesofMyfriends.indexOf("akash", 2));//starts searching from index 2
console.log(namesofMyfriends.lastIndexOf('akash'));//Returns the index of the last occurrence of a specified value in an array, searches backwards from last index
console.log(namesofMyfriends.lastIndexOf('jhakas',2));//searches backward from index 2
console.log(namesofMyfriends.includes('jhakas')); //returns boolean val.
console.log(namesofMyfriends.includes('jhakas',3)); //starts searching from index 3

const myPrices = [100, 200, 300, 400, 500];
//Returns the found element in the array, if some element in the  array satisfies the testing function, or undefined if not found. Only problem is that it return only one element
var val = myPrices.find(((prices, indes) => {
    if (prices > 200) {
        console.log(prices, indes);
        // return "";
        return "ok";
    }
}))
 console.log( `++++++ ${val}` );
//find returns only one value
//find functions traverses entire array and executes the callback function for every element, the callback function return a truthy value if conditon is satisfied else returns undefined.
//The find method executes the callbackFn function once for each index of the array until the callbackFn returns a truthy value. If so, find immediately returns the value of that element. Otherwise, find returns undefined.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
console.log( "--------------" );

console.log(myPrices.findIndex((element, index) => {
    if (element > 0)
    {
        console.log( element );        
        // return ""//falsy, so callback fn running for all indexes even if condition satisfies, and findindex returns -1.
        return "0";
    }
    })
 );
//The findIndex() method executes the callbackFn function once for every index in the array until it finds the one where callbackFn returns a truthy value.
//If such an element is found, findIndex() immediately returns the element's index. If callbackFn never returns a truthy value (or the array's length is 0), findIndex() returns -1.
//if the index of the first element in the array that passes the test is 0, the return value of findIndex will be interpreted as Falsy in conditional statements

//callback functions in both cases above must return a truthy value(usually after the conditon matches but also may not return even if condition matches), if callbck fn returns truthy val then find() returns the value if not then undefined , in findindex returns index of that element if not then -1.


