let sirname = 23;
let age = 22;
let bioData = {
    "namee": "naba",
    [sirname]: "modak",
    sirname,
    myage: age,
}
console.log( bioData );  
console.log( bioData.namee );
console.log( bioData.sirname );
console.log( bioData["23"] );
console.log( bioData["sirname"] );
console.log( bioData["myage"] );
//non string keys are coerced into string
//values has to be either literals or identifiers
//In the object.property syntax, the property must be a valid JavaScript identifier.
//In the object[property_name] syntax, the property_name is just a string or Symbol




//Unassigned properties of an object are undefined (and not null).
//Properties of JavaScript objects can also be accessed or set using a bracket notation
//Objects are sometimes called associative arrays, since each property is associated with a string value that can be used to access it.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
//all keys in the square bracket notation are converted to string

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#method_binding