let multiply = function (x) {
    return function (y) {
        return function(z)
        {
            console.log(x * y * z)
        };        
    }
}
multiply(2)(3)(5); //function currying

multiplybythree = multiply(3);//function currying
multiplybyten = multiplybythree(10);
multiplybyten(2);