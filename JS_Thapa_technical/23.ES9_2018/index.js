//REST and SPREAD OPERATOR IN OBJECT

const person = { myName: "naba", myAge: 26, mySirname: "modak" };
// let { myName:namkita, ...others } = person;
let { myName:namkita, ...others } = {...person};
console.log(namkita, others);
let objcopy = {...person} ;
console.log( objcopy );


const per = ["name", "roll"];
console.log( ...per );

