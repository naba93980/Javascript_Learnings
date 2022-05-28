//Regarding elements

//1.
const h2 = document.createElement("h2");
const h4 = document.createElement("h4");
const p = document.createElement("p");

//2.
document.body.append("hello", "bye");
document.body.append(h2);

//3
document.body.appendChild(h4);
document.body.appendChild(h2);
//https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

//4
h2.innerHTML = "this is h2";//innertext prints the content as it is displayed in browser basically by taking consideration of css
p.innerHTML = "<strong>anirban</strong> is bad boi";
document.body.appendChild(p);

//5
h4.textContent = "this is h4"; //textcontent prints the content as it is written in raw html file

//6
const p1 = document.createElement("strong");
p1.innerText = "hello world";
document.body.appendChild(p1);

//7
h2.remove();


//Regarding attributes of elements
//8
const pw = document.querySelector("#pw");
console.log(pw.getAttributeNames() );

//9
pw.setAttribute("www", "hehehehe");
console.log( pw.getAttribute("www") );

//10
// pw.removeAttribute("www");
console.log(pw.dataset.customattri);

//11
pw.dataset.newclassname = "newvaluefromjs";//adding new attribute using javascript
console.log(pw.dataset.newclassname);
console.log(pw.dataset); //shows all custom attributes

//Regarding class attribute
//12
console.log(pw.classList); //shows all classes of this element
pw.classList.add("classthree");
console.log(pw.classList);

//13
pw.classList.remove("classtwo");
console.log( pw.classList );
console.log( pw.className );

//14
h2.style.backgroundColor="red";



const obj = {
    x: 5,
    y: {
        z:18,
    },
}
console.log( obj.y.z );

