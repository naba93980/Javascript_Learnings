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
//elements is iterator of object
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