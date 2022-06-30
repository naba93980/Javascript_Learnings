let myName = {
    firstName:"naba",
    lastName:"modak"
}
var firstName = "akash";
var lastName = "suar";
function printFullName(state="no state",country="no country")
{
    console.log( this.firstName+" "+this.lastName+" "+state+" "+country );
    
}
printFullName.call(myName,"agartala","india"); //call and apply are same except that in apply we can pass args as an array
printFullName.call();
printFullName.apply(myName,["agt","bharot"]);
printFullName.apply();
var printname = printFullName.bind(window, 'kolkata', 'india');//bind returns a new function with the same code and the this binded with the specified object in the first arg of bind function
printname();