

// function definition using -
//   function declaration:
x = 10;    //without var or let or const x becomes property of global object

//below myName is object of type function 
function myName(firstName, lastName) //function parameters //we dont need to use var or let to declare parameters bcoz arguments array 
//already has allocated memory for arguments of a function, we just name those arguments, eg here.argument[0] if named as 
//firstName, and argument[1] is named as lastName.
{   
    x = 5; //of line 3
     y = 10; //doesnot matter if it is defined inside a function scope,without var or let or const x becomes 'property' of global object(window in browser)
    console.log(firstName+" "+lastName+" "+x+" "+y);
    return 0;
}    
//calling function
myName('NABAJYOTI',"MODAK");//function arguments
// myName(5,"MODAK");

console.log(x);
console.log(y); //if there was var keyword before y in line 9 then it leads to error.
console.log(myName instanceof (Function));
console.log(Function instanceof (Object));
console.log(Object instanceof (Object));
console.log(myName);
console.log(Date);
console.log(myName.prototype);
console.log(myName.prototype instanceof(Object));
console.log(typeof(myName.prototype));
console.log(Function.prototype.length);
console.log(typeof(Date));
console.log(Date());
console.log(myName);
console.log(Date instanceof(Function));
console.log(Date instanceof(Object));
console.log(myName instanceof(Object));
console.log(myName instanceof (Date));
console.log(myName.prototype.constructor);
console.log(typeof(myName.prototype.constructor));
console.log(typeof(myName.prototype));
console.log(myName.prototype.__proto__.__proto__);
console.log(myName.__proto__);
console.log(myName.__proto__.__proto__);
console.log(myName.__proto__.__proto__.__proto__);

//function expression //usign function in an expression

//var myFunc = function xyz(a, b) , xyz can also be used below but better not to use bcoz for calling the function and its properties u have to use myFunc only, xyz wont work, only constructors name will be xyz. bcoz xyz name is only local to the function body scope outside not present

var myFunc = function (a, b) //myFunc is an Object of type function bcox in js a function is also an object.
{
    console.log(a + b);
    // myFunc(5, 5);
    return a - b;
}
myFunc(5, 5);
console.log(myFunc + "ttt");
console.log(myFunc(5,5) + "ttt");
console.log(myFunc);
console.log(typeof(myFunc));
console.log(typeof(myFunc.prototype));
console.log(myFunc.prototype instanceof(Function));
console.log(myFunc instanceof (Function));
console.log("--------------")
console.log(myFunc.prototype.constructor instanceof(Function));
console.log(typeof(myFunc.prototype.constructor));
console.log(myFunc.prototype instanceof(Object));
console.log(myFunc.prototype.__proto__.constructor);
var myFuncRes = myFunc(86, 6);//assigning return value of myFunc function Object.
console.log(myFuncRes);
console.log(typeof(myFuncRes));//number, not function
console.log(myFuncRes instanceof(Number));
console.log(myFuncRes instanceof(Object));
console.log(myFuncRes.valueOf());
console.log(valueOf);


//arrow function

function sum(a, b)
{
    console.log(`the value of sum = ${a+b}`);
}
sum(3, 4);
console.log(sum instanceof (Function));

const summation = () => { return 5 + 6; }
console.log(typeof (summation));
   console.log( summation() );
    

(() => { console.log(5 + 6); })() //IIFE



//IIFE


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function#using_a_function_as_a_callback