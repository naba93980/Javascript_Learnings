// Javascript Date objects represent a single moment in time in a
// platform-independent format. Date objects contain a Number ;
// that represents milliseconds since 1 January 1970 UTC.

//There 4 ways to create date object


//1st way: new Date()
console.log( "----------1st method----------" );

let currentDate = new Date();
console.log( currentDate );
console.log( Date ); //represents the Date constructor function
console.log(Date()); //calls the object created by Date constructor function
console.log( new Date ); //calls default constructor function and creates a new Date object with default parameters
console.log( new Date()); //calls constructor function and creates a new Date object with passed parameters(the parameters are passed inside the brackets)
console.log( new Date().toString() );
console.log( new Date().toTimeString());
console.log( new Date().toDateString());
console.log( new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log( new Date().toLocaleString() );
//Date.now() --> Returns the numeric value corresponding to the current time-the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC
console.log( Date.now()); //now() is property of Date constructor function.
console.log( new Date(1651349957383).toLocaleString() );

//2nd way --> new Date(year, month, day, hours, minutes, seconds, milliseconds)
//it takes 7 arguments, u can give less than 7 bt not more
// Note: JavaScript counts months from 0 to 11.
console.log( "----------2nd method----------" );

var datte = new Date(2022, 4, 1, 2, 11, 8, 500);
console.log(datte.toLocaleString());
console.log(datte.toDateString());
var dattte = new Date(2022,4);
var dattte = new Date(2022); //month argument is must
console.log(dattte.toLocaleString());

//3rd way - // new Date(dateString) creates a new date object from a date string
console.log( "----------3rd method----------" );
var d = new Date('May 01 2022');
console.log( d.toLocaleString() );
var d1 = new Date('5/1/2022, 1:49:17 AM');
console.log( d1.toLocaleString() );
var d2 = new Date('5 01 2022');
console.log( d2.toLocaleString() );
//format - month day year hr:min:sec:milisec
 
//4th way - new Date(milisecond)
console.log( "----------4th method----------" );
var d4 = new Date(1651355868169);
console.log( d4.toLocaleString() );
//Date methods:
console.log("----------Date method---------");

//Date constrcutor function which returns string
console.log((Date())); //Calls the constructor function which creates the date object and then returns value of the date object in string. u cannot the store the date object here, jehetu  constructor function da object create koira loge loge object er value da string format e return koira dey

//Date constructor function which returns Date object
console.log(new Date);//creates the date object using default constrcutor and then prints that object. u can store the date object here

console.log(d4.toLocaleString());
//get
console.log( d4.getFullYear());
console.log( (new Date()).getFullYear());
console.log((new Date).getFullYear()); 
console.log(d4.getMonth());
console.log( d4.getDate() );
console.log(d4.getDay());//sunday -> 0, saturday -> 6.
//set
console.log( d4.setFullYear(2012 ,11,17) );
console.log( new Date(d4.setFullYear(2012)).toLocaleString() );
console.log( d4.setMonth(11) );
console.log( d4.setDate(31) );
console.log( d4.toLocaleString());

//Time methods:
console.log("----------Time method---------");
//get
console.log( d4.getTime() );
//The getTime() method returns the number of milliseconds since January 1, 1970
console.log( d4.getHours() );
console.log( d4.getMinutes() );
console.log((new Date).getMinutes());
console.log( d4.getSeconds());
console.log( d4.getMilliseconds());

//set
var d5 = new Date;
console.log( d5.setTime(5)); // A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 
console.log(d5.setHours(26));//A numeric value(0-23) equal to the hours value
console.log(d5.getHours().toLocaleString());
console.log(d5.getHours());
console.log( d5.setMinutes(60));
console.log(d5.getMinutes());
console.log(d5.setSeconds(61));
console.log(d5.getSeconds());
console.log(d5.setMilliseconds(1000));
console.log(d5.getMilliseconds());


//after dom check date object webpage from 8:10:00;
