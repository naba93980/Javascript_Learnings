const getbtn=document.getElementById('get-btn');
const setbtn=document.getElementById('set-btn');
const url='https://reqres.in/api/users?page=2';
const url2='https://reqres.in/api/register';

function httpreq(method,url,data)
{
    return new Promise((resolve,reject)=>{
    const xhr=new XMLHttpRequest();

    xhr.addEventListener('load',(e)=>{
        if(xhr.status>=400)
        {
            reject('error hai bhai response mai error mila')
        }
        else
        {
            resolve(JSON.parse(xhr.response));
        }
    })
    xhr.addEventListener('error',()=>{  //this works only in case the request fails, request fails here means xhr request object fails to complete all the readystatechanges from 0 to 4 and there comes an error in between.
        reject('error nikla re baba');
    })
    
    xhr.open(method,url);
    if(data)
    {
        xhr.setRequestHeader('content-type','application/json')
    }
    xhr.send(JSON.stringify(data));
    })    
}

function getData()
{
    httpreq('GET',url).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
}
function setData()
{
    httpreq('POST',url2,{
        "email":"eve.holt@reqres.in",
        "password":"pistol"
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
}
getbtn.addEventListener('click',getData);
setbtn.addEventListener('click',setData);

//https://www.freecodecamp.org/news/what-is-the-correct-content-type-for-json-request-header-mime-type-explained/