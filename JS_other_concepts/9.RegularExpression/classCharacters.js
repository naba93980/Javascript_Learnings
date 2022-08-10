var regCharacterSet=/[a-z]/gim;
var regNegatedCharacterSet=/[^a-z]/gim;
var regDotCharacterSet=/./gim;
var regDotCharacter=/[.]/gim;
var regDotNegatedCharacterSet=/[^.]/gim;
var str="Groups mulbtiple sos65488ens together and creates a capture group67s or extracting a subs74637tring or using a backrefe8745rences."
console.log(str.match(regCharacterSet));
console.log(str.match(regNegatedCharacterSet));
console.log(str.match(regDotCharacterSet));
console.log(str.match(regDotCharacter));
console.log(str.match(regDotNegatedCharacterSet));

console.log("ABC7657DEF".match(/\d+/));
