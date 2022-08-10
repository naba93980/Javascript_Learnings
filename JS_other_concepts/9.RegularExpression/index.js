// RegExp format -       /pattern/flags

// var reg=/jack/;
// var reg=/jack/g;
// var reg=/jack/i;
var reg=/jack/gi;
 
console.log(reg);
console.log(reg.source);
console.log(reg.flags);

let s="this is JaCk and  jack and jAck  ";
let res=null;

//1. exec()
while(1)
{
    res=reg.exec(s);     
    if(res==null){
        break;
    }
    [val,...rest]=res;
    console.log(res);
}

//2. test() - returns true or false
console.log(reg.test(s)); 

//3. match() - return array of results or null
console.log(s.match(reg)); 

//4. matchAll() - matchAll returns an iterable
console.log(s.matchAll(reg).next().value); 

//5. search() - returns index of first match
console.log(s.search(reg));

//6. replace() - returns new string with all the replacements
console.log(s.replace(reg,"nabajyoti"));


// practice here :- https://regexr.com/

//https://towardsdatascience.com/everything-you-need-to-know-about-regular-expressions-8f622fe10b03#character-classes

