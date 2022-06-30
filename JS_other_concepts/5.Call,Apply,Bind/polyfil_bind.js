let myName = {
    firstName: "naba",
    lastName:"modak"
}
let firstName = "miaa";
let lastName = "achaa";
function printname(city,state,country)
{
    console.log(this.firstName + " " + this.lastName+" "+city+" "+state+" "+country);
    
}
Function.prototype.mybindu = function (...args) {
    const [objname, ...rest] = [...args];
    let ob = this;
    console.log(this);
    console.log( rest );    
    return function (...args2) {   //function definition here is getting returned, the function is not being called to be returned
        console.log( this ); //window, bcoz window will call print()        
        ob.apply(objname, [...rest,...args2]);
    }
}
let print = printname.mybindu(myName,'udaipur')
print("Rajasthan","India");