//flatten array
var at = [
    
    ['zone 1', 'zone 2'],
    ['zone 3', 'zone 4'],
    ['zone 5', 'zone 6'],
    ['zone 7', ['zone 8', 'zone 9',['zone 10','zone 11']]],
]
// let a = [2, 4,8,9];
// let b = [5, 6];
// console.log( a.concat(b) );

// console.log(a);
// console.log(b);
// console.log(at.reduce((accum,element) =>
// {
//     accum = accum.concat(element);
//     return accum;
// }))
console.log(at.flat(0));
console.log(at.flat(1));
console.log(at.flat(Infinity));

const person = {
    myName:"naba",
    myAge:22,
}
let v = [["naba", 'jyoti'],['mod',22]];
console.log( Object.fromEntries(v) );


