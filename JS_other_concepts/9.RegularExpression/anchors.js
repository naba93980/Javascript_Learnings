var regNotWordBoundary=/s\B/gim;
var regWordBoundary=/s\b/gim;
var regBeggining=/^\w+/i;
var regEnd=/\w+$/i;
var str="Groups mulbtiple sos65488ens together and creates a capture group67s or extracting a subs74637tring or using a backrefe8745rences"
let res=null;
console.log("not word boundary");

while(1)
{
    res=regNotWordBoundary.exec(str);     
    if(res==null){
        break;
    }
    console.log(res);
}

console.log("word boundary");
while(1)
{
    res=regWordBoundary.exec(str);     
    if(res==null){
        break;
    }
    console.log(res);
}


console.log("beginning");
    res=str.match(regBeggining)   
    console.log(res);

console.log("end");
    res=str.match(regEnd)   
    console.log(res);


