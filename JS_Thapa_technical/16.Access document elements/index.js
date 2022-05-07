
/*
Document.getElementById()

    Returns an object reference to the identified element. (An object reference is information on how to find a particular object. The object is a chunk of main memory; a reference to the object is a way to get to that chunk of memory. The variable str does not actually contain the object, but contains information about where the object is. Objects are created while a program is running. Each object has a unique object reference, which is used to find it. When an object reference is assigned to a variable, then that variable says how to find that object.)
  
Document.getElementsByClass()  

*/
function fun(event)
{
    console.log( event );
    
    document.getElementById("para1").innerHTML = "my name is nabajyoti modak";
    
        
}
function fun2()
    {
    console.log(document.getElementsByClassName("para2"));
    Array.from(document.getElementsByClassName("para2")).forEach((element)=>(element.innerHTML='MODAK'))
    
}
function fun3()
    {
    console.log(document.getElementsByTagName("p"));
    Array.from(document.getElementsByTagName("p")).forEach((element)=>(element.innerHTML='MODAK'))
    
}
function fun4()
    {
    // console.log(document.getElementsByName("male"));
    Array.from(document.getElementsByName("gender")).forEach((element) => (console.log(element)));    
}
//querySelector() returns first matching value whereas querySelectorAll() will return all the elements.
function fun5()
{
    document.querySelector("#para1").innerHTML = "naabababjytoitoi";
}
function fun6()
{
    console.log(document.querySelectorAll("p"));
    //  Array.from(document.querySelectorAll(".para2")).forEach((element)=>(element.innerHTML='MODAK'))
     Array.from(document.querySelectorAll("p")).forEach((element)=>(element.innerHTML='MODAK'))
    
}
/*
getElementsByClassName will return a live HTMLCollection, possibly of length 0 if no matching elements are found
The method querySelector also returns a single element, and querySelectorAll returns an iterable collection.
If neither element is found, the querySelector method returns null 

getElementbyId will return an Element object or null if no element with the ID is found.

getElementbyId() is faster than querySelector()

*/