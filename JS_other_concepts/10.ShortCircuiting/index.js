// if a condition is correct then subsequent condition is evaluated and finally if all conditions are correct then last expression is evaluated and result is returned
console.log(1 == 1 && 2 == 2 && "hello");
console.log(1 == 1 && 2 == 2 && console.log("hello"));
console.log(1 == 1 && 2 == 2 && 2 == 2);
console.log(1 == 1 && 2 == 2 && 2 == 3);
console.log(1 == 2 && 2 == 2 && 2 == 3); //-> will return false after evaluating only the first expression
