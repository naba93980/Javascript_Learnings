const getbtn=document.getElementById('get-btn');
const setbtn=document.getElementById('set-btn');



function httpreq(method,url,data){
    return fetch(url,{
        method,
        "headers":data?{
            'content-type':'application/json',
        }:{},
        body:JSON.stringify(data)     //to convert the data into a json data string
    }).then((response)=>{             //once the inner promise is rejected with error below, the outer promise also gets rejected with that thrown value, then the thrown val is passed down to next catch block at line 49
        if(response.status>=400)   
        {
            alert("at line 16");
            return response.json().then((responsedata)=>{  
            const error=new Error("kuch to garbar hai re baba");
            error.data=responsedata;
            throw error
        })
        }
        else
        {   
            alert("at line 25");
            return response.json();
        }
    })
    // .catch(err=>{
    //     console.log("problem in getting response due to : "+err);
    //     return "promise returned by fetch() resulted in rejected due to error";
    // })
}

function getData(){
    console.log(this)
    fetch('https://reqres.in/api/users?page=2') //returns a promise 
    .then((response)=>{                         //which gets resolved with a response object
        return response.json();                 //returns promise which gets resolved with the result of parsing the response body text as json object 
    }).then((responsebody)=>{
        console.log(responsebody);
    })
    .catch(error=>console.log(error)); //these kinda error works only in case of readystatechange error like in case of network error
}
function setData()
{
    httpreq('POST','https://reqres.in/api/register',{
    "email": "eve.holt@reqres.in",
    // "password": "pistol"
    })
    .then((responsebody)=>{
        alert("at line 52")
        console.log(responsebody);
    }).catch((error)=>{
        alert("at line 55")
        console.log(error);
        console.log(error.data);
    })
}


getbtn.addEventListener('click',getData);
setbtn.addEventListener('click',setData);

// https://stackoverflow.com/questions/59925744/what-exactly-is-the-second-parameter-that-the-fetch-api-takes
