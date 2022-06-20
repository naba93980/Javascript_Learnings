let xhr = new XMLHttpRequest();
let url="https://jsonplaceholder.typicode.com/users";

console.log(document.readyState);
console.log(xhr.readyState)//0 -> unsent 

// debugger
xhr.addEventListener('readystatechange',(e)=>{
    console.log(xhr.readyState); //0 -> unsent // 1-> open has been called // 2-> send has been called //3->LOADING - Downloading; responseText holds partial data //4->DONE - operation is complete
    // console.log(e);
    if(xhr.readyState===4)
        {
            // console.log(xhr.response);
            // console.log(xhr.responseURL);
            // console.log(xhr.status);
            switch (xhr.status) {
                case 200 : outputUsers(xhr.responseText);
                break;
                case 304 : console.log("OK or Not Modified (cached)", xhr.status); 
                  
                break; 
                case 201 : console.log("Created", xhr.status); 
                break;  
                case 403 : 
                case 401 : console.log("Not Authorized or Forbidden", xhr.status); 
                break; 
                case 404 : console.log("Not Found", xhr.status); 
                break; 
                case 500 : console.log("Server Side Error", xhr.status); 
                break; 
                default : console.log("Some other code : ", xhr.status, xhr.status); 
                }            
        }
})
function outputUsers(res){
    let data=JSON.parse(res);
            console.log(data);
            
            
            data.forEach(element => {
                let newelement=document.createElement('p');
                newelement.textContent=`${element.id} : ${element.name}`;
                document.querySelector('body').append(newelement);
            });
}

xhr.addEventListener('error',(e)=>{
    console.log(e.type); 
    console.log(e);
})


//open(method:, url:, async:, username?:, password?:) - define the request that we are going to send
xhr.open('GET',url,true); //line containing open() method get synchronosly called, once open() is called, readystate changes and a readystatechange event is synchronously fired in js code and thus the callback is not sent to the task queue, but just called from the current context in the callstack,even when it is not empty
console.log(xhr.readyState)
//basically when a event is fired synchronously, the callback is also executed synchronously in the js code
xhr.send();
console.log(xhr.readyState);


