function* generatorFunction() {
    try {
        yield "my";
        yield "name";
        yield "is";
        yield "nabajyoti";
        yield "modak";
    }
    catch (error) {
        console.log(error);
    }
    return ("answer finished");
}
const generatorObj = generatorFunction();

// iterator protocol implementation : -

// method 1
// for (const value of generatorObj) {
//     console.log(value);
// }


// method 2
// const values = [...generatorObj];
// console.log(values);

// Both spread and for...of will not factor the return into the values


// method 3 - using only next()
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.next());


// method 4 - using next() & return()
// console.log(generatorObj.next());
// console.log(generatorObj.next());
// console.log(generatorObj.return("sesh hoia gese"));
// console.log(generatorObj.next());
// console.log(generatorObj.next());


// method 5 - using next() & throw()
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.throw(new Error("error aise re")));
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());

//https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript

// A generator is a process that can be paused and resumed and can yield multiple values.

//A generator in JavaScript consists of a generator function, which returns an iterable object.