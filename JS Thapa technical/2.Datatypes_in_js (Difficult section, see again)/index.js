var myName = "nabajyoti"; 
console.log(myName.valueOf());
console.log(typeof (myName));
console.log(typeof 'naba');
console.log(myName instanceof (String));
console.log('naba' instanceof (String));
var strobj = new String('nabajyoti modak');
console.log(strobj instanceof (String));
console.log(typeof(strobj));
console.log(strobj.valueOf());
myAge = 22;
console.log(typeof (myAge));
console.log(typeof (true));
console.log(typeof (age));
console.log(typeof (10.7676868686876));

//type of bigin and symbol is left.

//practise:
console.log(10 + '20'); // + symbol thakle conversion type preference string>number.
console.log(10 + parseInt('20')); 
console.log(9 - '5'); //- symbol thakle conversion type is number only, mane string and boolean is converted to number, (only if string characters consists of digits, else NaN is returned)
console.log(9 - parseInt('5'));
console.log(true);
console.log("java "+"script");
console.log(true+1);//boolean is converted to number.
console.log("true"+true); //boolean is converted to string.
console.log(true + "1" + 6);//boolean and number is converted to string.
console.log(" " + 0);//number converted to string.
console.log(true + true);//booleans are converted to number.(jodi minimum ekta string thakto taile string e convert hoito)
console.log("text" - 1);//NaN bcoz string('text' here) cannot be converted to number.
console.log(2 - true);//boolean converted to number
console.log("2" - true);//both string(digit here) and boolean converted to number.
console.log("2" - "true");//NaN bcoz string('true' here) cannot be converted to number.
console.log(2 - "true");//NaN bcoz string('true' here) cannot be converted to number.
// https://stackoverflow.com/questions/30475749/about-5-1-51-in-javascript-plus-and-minus-signs

//According to the standard EcmaScript 262. The + and - operators behave differently when strings are involved. The first converts every value to a string, if a string is present. The second converts every value to a number.

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf

//https://developer.mozilla.org/en-US/docs/Glossary/Primitive

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined

var number = 9436554994;
var myName = "nabajyoti";
console.log(isNaN(myName));
console.log(isNaN(number));
console.log("--------------")
console.log(NaN === NaN);
console.log((Number.NaN===NaN));
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(Number.NaN));
console.log(isNaN(null));//null is coerced to 0.


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN