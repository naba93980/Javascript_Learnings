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
console.log( "-----------*****--------------------" );

myFriends.forEach((element, index, myFriends) => {
    console.log(element); return 0;
});

// forEach() executes the callbackFn function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.
// forEach() does not mutate the array on which it is called. (However, callbackFn may do so)


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
console.log(namesofMyfriends.indexOf('ak'));
console.log(namesofMyfriends.at(namesofMyfriends.length-2)); //returns the element present at the argument index works in browser, namesofMyfriends and the at() property is found in 
console.log( "#####*******$$$$" );

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

//filter creates new array of elements for which the callbackfn returns a truthy value
console.log(myPrices.filter((element, indes) => {
    if ((element >200)&&((element%100) == 0))
        return "element"; //truthy value is being returned so, element get added to new array.
}))
//filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//sort
// The sort() method sorts the elements of an array in place and i
//returns the sorted array. The default sort order is ascending, built |
//upon converting the elements into strings, |
// then comparing their sequences of UTF-16 code units values. |


// sort() sorts the original array
let months = ['march', 'April','DEC'] //in unicode A comes before D then  comes 'm'
console.log( months.sort() );
let nummbers = [4, 20000, 600, 80, 275, 6, 9]; //gets converted to string inside sort so 20000<275
console.log(nummbers.sort());
console.log(nummbers);

//push unshift , pop shift mutates the original array
let animals = ['dog', 'cat', 'rat'];
console.log(animals.push('elephant','cow')); //returns lenth of mutated array
console.log(animals);
console.log(animals[animals.length-1]);
console.log(animals.unshift('peacock', 'donkey'));//adds into array from begging in the same order as pushed and returns length of new array
console.log(animals);
console.log(animals.pop() );//removes the last element from array and returns it
console.log(animals.shift());//removes the first element from array and returns it
console.log(animals);

//splice method mutates the original array.
//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements

// splice(start, deleteCount, item1, item2, itemN)

// start - The index at which to start changing the array.

            //If greater than the length of the array, start will be set to the length of the array. In this case, no element will be deleted but the method will behave as an adding function, adding as many elements as items provided.
            //If negative, it will begin that many elements from the end of the array....-n is the index of the nth last element, and is therefore equivalent to the index of array.length - n. If start is negative infinity, it will begin from index 0.

//deleteCount Optional-  An integer indicating the number of elements in the array to remove from start.
            //If deleteCount is omitted, or if it is equal to or greater than the number of elements left in the array, starting at start), then all the elements from start to the end of the array will be deleted. However, it must not be omitted if there is any item1 parameter.
            // If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element.

//item1, item2, ... - The elements to add to the array/add to array in place of deleted elements, beginning from start. If you do not specify any elements, splice() will only remove elements from the array

/*
Return value - An array containing the deleted elements. If only one element is removed, an array of one element is returned.
If no elements are removed, an empty array is returned.

Description - If the specified number of elements to insert differs from the number of elements being removed, the array's length will be changed.
*/

console.log(animals.splice(1, 3, 'akash'));
console.log(animals);
let myGoals = ['a', 'v', 'r', 'i', 'f'];
console.log(myGoals.splice(1, 0, 'b'));
console.log( myGoals );
console.log(myGoals.splice(-3, 2, 'xyz'));
console.log( myGoals );
console.log(myGoals.splice(1));
console.log( myGoals );
console.log(myGoals.splice(20,34,'hi','hello'));
console.log( myGoals );
console.log(myGoals.splice(myGoals.length-1,34,'huhu','hey'));
console.log(myGoals);
var indexOfhi = myGoals.indexOf("hi");
console.log(indexOfhi);
myGoals.splice(1, indexOfhi, 'HI')
console.log( myGoals );

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//slice - The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log( myGoals.slice(0,2) );

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
//https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy
