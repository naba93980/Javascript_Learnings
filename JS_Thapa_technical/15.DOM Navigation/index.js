// 1: document.documentElement returns the Element that is the root element of the document.
// 2. document.head returns head element of the document
// 3. document.body returns only body element of the document
// 4. document.body.childnodes(includes tab,enter and whitespaces)
//5. document.body.children - returns only elements ...has property length.


// How to find the child in DOM tree 
// firstChild vs firstElementChild
// lastChild vs lastElementChild 
// const data = document.body.firstElementChild;
// undefined
// data
// data.firstElementChild
// data.firstElementChild.firstElementChild
// data.firstElementChild.firstElementChild.style.color = "red"
// vs 
// document.querySelector(".child-two").style.color = "yellow";

// 👉 How to find the Parent Nodes 
// document.body.parentNode
// document.body.parentElement

// 👉 How to find or access the siblings
// document.body.nextSibling
// document.body.nextElementSibling
// document.body.previousSibling
// document.body.previousElementSibling
console.log(document.body.firstElementChild);