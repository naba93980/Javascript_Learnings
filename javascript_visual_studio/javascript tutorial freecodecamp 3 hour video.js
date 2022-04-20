//  //lesson - 1 - comment.
// // inline comment
// /*multiline
// comment*/
// let namee = "nabajyoti"; //namee is a variable.
// console.log(namee);
// //data types - undefined, null, boolean,string , symbol, number, object


// //lesson -2 - data types, let vs var vs const.
// let nothing;
// let nothing1=null;
// let nothing2=true;
// console.log(typeof (nothing));
// console.log(typeof (namee));
// console.log(typeof (nothing1));
// console.log(typeof (nothing2));

// var nam = "akash";
// console.log(nam);

// //lesson 3 - assign vs declararing
// var a;//declaring / creating (memory gets assigned here)
// var b = 2;//assigning.
// a = 5;
// console.log(a);
// a=90
// b = 7;
// b = a;
// console.log(a);
// //lesson 4 - assigning and concatenation.
// var x = "i am " + namee;
// console.log(x);
//  //lesson - 5 - arithmetic operators - increment, decrement , DMAS,+=,-=,/=,*/
// console.log(5 / 5);
// console.log(++a);
// console.log(a++);
// console.log(a);
// console.log(--a);
// console.log(a--);
// console.log(a); 
// var decval = 0.004500;
// console.log(decval);
// console.log(typeof(decval));
// //lesson 6 - escape character same as in c/c++
// var string = "nabajyoti is a \"good boy\"";
// console.log(string);
// var string = 'nabajyoti is \naaaaaaaa \n "good boy"'; //
// console.log(string);
// //lesson - 7 - string concatenation & length & more
// var ss = string;
// console.log(ss);
// string = string + "hellohi ";
// console.log(string);
// console.log("hello " + namee + " bacha");
// console.log(namee + " bacha");
// console.log(namee.length);
// console.log(string.length);
// console.log(string[4]);
// string = "akashhhhhl";
// console.log(string);
// string[4] = 'k'; //doesnot change
// console.log(string);
// console.log(string[string.length - 1]);

// //upto - 36:30 min.
//lesson 8 - array--
// var arr = ["naba", 21];
// console.log(arr);
// arr[0] = "nabajyoti";
// console.log(arr);
// arr = ["nabajyoooti",23];
// console.log(arr);
// var ar = [arr[0],arr[1], "is a good boi", 420, " hai sala"];
// console.log(ar);
// var mularr = [[1, 2, 3], [4, 5, 6], [7, 8, 9],["naba","aka"]];
// console.log(mularr[2][1]);
// ar.push("kaka");
// console.log(ar);
// console.log(ar.pop());
// console.log(ar);
// console.log(ar.constructor)
// console.log(ar.shift());
// console.log(ar.unshift("aaaaaaaa"));
// console.log(mularr[3][0][2]);

//lesson 9 - function-----

// function print()
// {
//     console.log("namaskar\n");
// }
// print();
// print();
// print();
// print();

// function add(a, b)
// {
//     console.log(a + b);
// }
// add(5, 10);

// //lesoon 10 - scope
// var sum=50;
// function add(a, b)
// {
//     var sum = a + b;
//     console.log(sum);

// }
// add(10, 10);
// function summ()
// {
//     sum = sum - 10;
//     console.log(sum);
// }
// summ();

//upto 59 mins.

// lesson 10 - let , var , local, global & function scope
// var x = 5;
// function fun1() {
//     var y = 10;
//     console.log(y);
// }
// function fun2() {
//     var output;
//     y = 5; // y is var and local to only function
//     { let z = 6; } //z is local to scope
//     console.log(x);
//     // console.log(z);
// }
// console.log(x);
// fun2();

// //lesson - 11 - undefined return val

// function fun() {
//     var sum = 5;
//     sum += 5;
// }
// console.log(fun());

// if (3 == '3')
//     console.log("true");
// else console.log("false");
//other if else topics and practices

//upto 1 hour 32 mins

//lesson - 12 - switch statement

// var num = 2;
// switch (num) {
//     case 1: console.log("one");
        
//     case 2: console.log("two");
        
//     case 1 + 2: console.log("three");
//     default: console.log("three");
//suppose initially if a variable keep track if any case is matched using variable match; initially match is false;
//if then match = false; checks case value with switch val; if matches then variable match=true, else match =false;
//once a case value equals switch value, match = true;
//in subsequent steps if match = true, then case value is not matched with switch value and subsequent statments gets printed.        
//if until end match = false, then default statement gets executed;
    
// }

//lesson - 13 - return values from function

function isless(a, b) {
    return a < b;
}
console.log(isless(54, 20));

//leson 14 - objects in js 

var dog = {
    "name": "labrador",
    "tail": 1,
    "friends": ["everything", 10],
    "the color": "red",
};
console.log(dog);
console.log(dog.tail);
console.log(dog.name);
dog.name = "rotweiler";
console.log(dog.name);
console.log(dog.friends);
console.log(dog.friends[1]);
console.log(dog.friends[0]);
console.log(dog);
console.log(dog["the color"]); //use third bracket to access memebers whose name has a space in between.
var tailno = dog.tail;
var taill = tailno;
console.log(taill);
dog.bark = "bow-bow"; //add new property to the object.
console.log(dog);
console.log(dog.bark);
delete dog.tail; //delete tail property/member
console.log(dog.tail);

// upto 1:58 hour
if (dog.namee)
    console.log("yes");
else
    console.log("no");
 
String;