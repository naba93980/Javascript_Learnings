console.log( Number.MAX_SAFE_INTEGER);
console.log( Number.MAX_SAFE_INTEGER +12);
console.log( 9007199254740991n+12n );
console.log( typeof(9007199254741003n) );//bigint

//await import

//nullish coalescing

//const foo = null ?? 'nabajyoti';
const foo = undefined ?? 'nabajyoti'; //if left of ?? is null or undefined then right of ?? is returned
console.log( foo );//nabajyoti
const foo1 = 'name' ?? 'nabajyoti';//if left of ?? is not null or not undefined then left of ?? is returned
console.log( foo1 );//name

