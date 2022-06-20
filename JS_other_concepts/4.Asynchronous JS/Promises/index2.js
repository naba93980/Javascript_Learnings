//https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/

const prom = new Promise((resolve, reject) => {
    let x = 27;
    setTimeout(() => { //(capturing of variables in outer/parents lexical environment)a.k.a closures happen at the time of creation of callabck funciton execution context.................lexical environment of a function = inner variable environment + parents lexical environment
        console.log( "its prom " + ++x );
        resolve("prom1 resolved");
    }, 2000)
    x++;
})
const prom2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error hai")
        console.log("its prom2");
        resolve("prom2 resolved");
    },4000)
})
prom2.catch(val => console.log(val))


const prom3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log( "its prom3" );
        resolve("prom3 resolved");
    },3000)
})

Promise.all([prom, prom2, prom3])
    .then((val => { console.log(val); }))
        .catch((val => { console.log("val "+val); }))
// shobti resolve ekta reject hoile, returned promise tao reject


Promise.any([prom, prom2, prom3])
    .then((val => { console.log(`val: ${val}`); }))
// jekunu ekta resolve hoile, returned promise tao resolve


Promise.allSettled([prom, prom2, prom3])
    .then((val => { console.log(val); }))
// resolve hok ba reject, returned promise shob return korbo in array


Promise.race([prom, prom2, prom3])
    .then((val => { console.log(val); }))
    .catch((val => { console.log("val " + val); }))
        


Promise.resolve("its prom bairer thika").then(val=>console.log( val ))
Promise.reject("error aisere").catch(val=>console.log( val ))
