/*
window :
1: Window is the main container/tab or we can say the global Object and any operations related to entire browser window can be a part of window object.

2: All the members like objects, methods or properties. If they are the part of window object then we do not mention the window object while calling them.

3:Window has methods, properties and object. ex setTimeout() or setinterval() are the methods, where as Document is the object of the Window and It also has
a screen object with properties describing the physical display.
*/

/*
Document :
1: whereas the DOM is the child of window object

2: Where in the DOM we need to mention the document, if we want to use the document object, methods or properties.

3: Document is just the object of the global object that is Window, which deals with the document, the HTMl elements themselves.
*/

/*
DOM:
The DOM is the Document Object Model, which deals with the document, the HTML elements themselves, e.g. document and all traversal you
would do in it, events, etc.
*/

/*
BOM:
The BOM is the Browser Object Model, which deals with browser components aside from the document, like history, location, navigator and screen
(as well as some others that vary by browser). OR In simple meaning all the Window operations which comes under BOM are performed
usign BOM

Functions alert/confirm/prompt are also a part of BOM they are directly not related to the document, but represent pure browser methods of communicating with the user

*/
function hsi() {
    window.history.back();
}
window.alert(`u r ${window.location.href}`);
if (confirm("u wanna move to youtube?"))
{
    window.location.href = "https://www.youtube.com";
}