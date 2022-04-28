//anything inside quotes is string in javascript
//strings can be created as primitives from string literals or as objects using string() constructor
let myName = 'nabajyoti'
let mySirname = 'modak';
let myAge = new String('22');
console.log( myAge )
console.log( myName.length );
console.log("we are the so called \"vikings\" from north");
console.log('we are the so called \'vikings\' from north');
console.log('we are the so called "vikings" from north');
// ->  \" backslash is escape sequence operator
//The index0f() method returns the index of the first occurrence of a specified text in a string
console.log(myName.indexOf('jyo'));
console.log(myName.indexOf('n',5)); //starts searching from index 6.
console.log(myName.indexOf('jyuo')); //returns -1 if unable to find
console.log( myName.lastIndexOf('jyo') );
console.log(myName.lastIndexOf('jyo', 3));//starts searching from index 3 but backwords
console.log(myName.search('jyo'));//it doesnot take second argument

//The search function (one description here) takes a regular expression, which allows you to match against more sophisticated patters, case-insensitive strings, etc., while indexOf (one description here) simply matches a literal string. However, indexOf also allows you to specify a beginning index.
//regular expression - https://www.educative.io/blog/regex-javascript-tutorial?utm_source=Organic%20Social&utm_medium=Facebook&utm_campaign=What%20are%20Regex%3F%20JavaScript%20regular%20expressions%20in%205%20minutes


//slice()
const myFruits = ['fruits', 'apple', 'orange','peanut','badam'];
console.log( myFruits.slice(1,3) ); //doesnot include elemeny in last index
console.log( myFruits.slice(2,-2) );
console.log( myFruits.slice(-4,3) );
var tweet = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia illum voluptatem dolor exercitationem ipsam rem dolores dignissimos iure aliquam nisi, maiores consectetur repudiandae tempore natus expedita ipsum reprehenderit sequi modi unde dolore magni obcaecati explicabo repellendus? Quisquam soluta vel possimus tempore velit maiores, sunt modi voluptates, quam atque sit assumenda cum deserunt facere repudiandae porro quos architecto placeat culpa nobis nesciunt labore! Ipsum, iusto reiciendis cumque error aperiam fugiat ex, enim illum, et laboriosam quo asperiores. Ad culpa quod voluptatibus suscipit a dolorem, laborum inventore amet, nisi iste explicabo hic voluptatum, animi eveniet earum dolorum. Aliquid, impedit eius illo commodi debitis quidem animi beatae tenetur! Eos quaerat, accusantium in adipisci omnis ullam ratione distinctio at nemo placeat amet fuga minima laborum quas? Magni nemo, ipsam doloremque corporis voluptates officia aut minus eveniet labore mollitia at consectetur, aliquid a architecto, consequuntur sunt dicta? Nobis rerum assumenda et facere amet quaerat vitae similique minus corrupti nisi obcaecati suscipit molestiae itaque recusandae eius veritatis, repellat maiores dolore asperiores dolor mollitia, aperiam sapiente iste quae? Aut dolores ea natus recusandae earum repellendus nemo reiciendis dolore, illum, voluptatem assumenda aspernatur quae nihil eveniet saepe minima dignissimos aperiam sunt deserunt eum porro? Assumenda eligendi possimus perferendis obcaecati ab animi aliquid similique saepe. Aspernatur natus modi iusto nobis quidem quae pariatur facilis odio impedit porro laboriosam, eius et cupiditate aut, distinctio corporis itaque beatae ipsam repellendus nulla commodi ab voluptates dignissimos. Perspiciatis fuga omnis ad consequatur sequi consectetur beatae est molestias nam! Perferendis, aliquid cumque. Iure enim esse illum repudiandae, cum, atque deserunt eaque quidem eum quo laudantium facilis pariatur maiores similique autem odit, natus alias vel rerum ea. Beatae quo necessitatibus dolorem praesentium voluptas doloribus sapiente officiis impedit, ad suscipit harum, voluptatibus eveniet, eligendi non inventore error at reiciendis est quia porro maiores? Impedit, consectetur?"
console.log( tweet.slice(0,280) );
console.log( tweet.slice(-5,-1) );
console.log(tweet.indexOf("explicab"));
const bbb = [1, 2, 3, 4, 5];
console.log( bbb.slice(1,3) );

//substring() similar to slice but cannot accept neg index as argument also cant work on array
console.log( tweet.substring(0,4) );
console.log(tweet.substring(16, -4)); //-4 hv no effect, it prints substring from 0 to index no-1 passed as first argument

//substr() similar to splice but the second parameter represents length of the substring and doesnot work on array
//depricated 
console.log(tweet.substr(3, 10)); //3 is starting index, 10 is length from that index
console.log( tweet.substr(-4) );//prints last 4 digits.

//negative arg works with slice() but not with substr(),substring();
//substr and substring is only for strings not for any array
//splice works for strings as well as array and also accepts negative arguments, so better to use splice for both string and array


//replace() for strings only

//The replace() method searches a string(case sensitive) for a value or a regular expression.
//The replace() method returns a new string with the value(s) replaced.
//The replace() method does not change the original string.

var tt = new String("hellheo");
console.log(tt.constructor.prototype.replace);
console.log(tweet.constructor.prototype==String.prototype);
console.log(tt.replace('he','55')); //replaces the first ocuurence of the passed argument, in case multiple ocuurences exist
//replaceAll() exists which replaces all the occurences of the passed argument
console.log(tt.replace('she', '55'));//if does not match it returns full original string;


//charAt()
// The charAt() method returns the character at a specified index (position) in a string

let str = "hellO WorLd";
console.log( str.charAt(3) );
console.log(str.charCodeAt(3));//return unicode of the character at the specified index.
console.log(str[2]);//property access [ ] on strings(ES 5)
console.log(str.toUpperCase());//Converts all the alphabetic characters in a string to uppercase. doesnot mutate original array
console.log(str.toLowerCase());
console.log(str);
console.log( str.concat(" baby") );//concatenates new string to the current string and returns result doesnot mutate original array
console.log( str );

//trim() removes whitespaces from both sides of a string

var sttr = "             hhee     hghf    "; //removes whitespaces before the non space characters begins and after the non space character ends, if any whitespace character exist in between then they are not trimmed.

console.log( sttr.trim() );


