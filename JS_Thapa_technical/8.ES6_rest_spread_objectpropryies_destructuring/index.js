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

//------adding dynamic properties-------
let myName = "naba";
const bio = {[myName]:"is a good boy"} //dynamically setting 'literal value' of key
const bio1 = {myName} //myName here is a variable refering to the myName variable defined outside 
const bio2 = {myName: "is a good boi"}
const bio3 = {myAge: [myName]}//value is an array here
const bio4 = {myAge: myName}
console.log(bio);
console.log(bio1["myName"]); 
console.log(bio2); 
console.log(bio3); 
console.log(bio4); 




