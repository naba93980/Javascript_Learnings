const myPrices = [100, 200, 300, 400, 500];
//filter creates new array of elements for which the callbackfn returns a truthy value
console.log(myPrices.filter((element, indes) => {
    if ((element >200)&&((element%100) == 0))
        return "element"; //truthy value is being returned so, element get added to new array.
}))
//filter() calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a value that coerces to true.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

 