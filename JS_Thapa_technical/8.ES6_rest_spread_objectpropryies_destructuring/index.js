//Array destructuring

// const mybio = ["naba", "modak", 22];
// let myName = mybio[0];
// let mySirname = mybio[1];
// let myAge = mybio[2];
// console.log( myAge );
// console.log( myName );
// console.log( mySirname );
// let [myFN, myLN, myAge, myHeight="5\'10\""] = mybio; //right side er prothom index er data left side er prothom variable e jaibo
// console.log( myAge );
// console.log( myFN );
// console.log( myLN );
// console.log( myHeight );

//Object Destructuring
// const bio = {
//     myFname: "naba",
//     "myLname": "modak",
//     "myAge2":22
// }
// console.log( bio.myAge2 );
// console.log( bio.myFname );
// console.log(bio.myLname);

// let { myFname, myLname, myAge2, myDegree="btech" } = bio;
// console.log( myFname );
// console.log( myLname );
// console.log( myAge2 );
// console.log( myDegree );
// //in obj destructuring the variable names must match key names of object
// console.log( bio );

//object properties

/*
let myName = "naba";
const bio = {[myName]:"is a good boy"} //dynamically setting 'literal value' of key
//if key and val identifier are same then no need to mention both {myName:myName} can be written as below
const bio1 = { myName } //myName here is a variable refering to the myName variable defined outside
const bio2 = {myName: "is a good boi"}
const bio3 = {myAge: [myName]}//value is an array here
const bio4 = {myAge: myName}
console.log(bio);
console.log(bio1["myName"]); 
console.log(bio2); 
console.log(bio3); 
console.log(bio4); 
*/

//spread operator 
let name1 = ['ram', 'sam', "jodu", "modu"];
let name2 = [...name1, 'lengti', 'koddu'];
console.log(name1, name2);
function addnos(x, y, z)
{
    console.log( x+y+z );    
}
var args = [50, 31, 2]
addnos(...args); //spreading elements from an array... =>addnos(50,31,2);

//rest operator
var [first, ...others] = ['naba','jyoti','is','a','good','boy']; //condensing elements into an array
console.log( first );
console.log(others);
var [firstt, ...otherss] = [{ id: 1, skool: "skms" }, { id: 2, skool: "rkms" }, { id: 3, skool: "nkms" }];
console.log( firstt );
console.log(otherss);


let fname = 'naba';
let lname = 'modak';
let namearr = [lname, fname];
// [fname, lname] = namearr;
[fname, lname] = [lname, fname];
console.log( fname,lname );
console.log( "-------------" );
let arr = [1, 3, [4, 5], [6, 7, 8]];
let [one, two, [three, four], [five, six, seven]] = arr;
console.log( one,two,three,four,five,six,seven );


let obj = {
    namee: "naba",
    age: 22,
    breed: 'human',
}
let { namee, ...other } = obj; //condensing other properties into an object
console.log( namee );
console.log( other );

//different variable name in object destructuring
let { namee: myNamee, age: myAgee, breed: myBreed } = obj;
console.log(myNamee, myAgee, myBreed);//new names 





