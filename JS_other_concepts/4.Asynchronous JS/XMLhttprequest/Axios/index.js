const getbtn=document.getElementById('get-btn');
const setbtn=document.getElementById('set-btn');

function getData()
{
    axios.get('https://reqres.in/api/users')
    .then((response)=>{
        console.log(response);
    })
}
function setData()
{
    axios.post('https://reqres.in/api/register',{
        "email": "eve.holt@reqres.in",
    // "password": "pistol"
    // },{  option object argument to set any header
    //     Headers:{
    //         'Content-Type':'application/json'
    //     }
    }).then(response=>{
        console.log(response);
    }).catch(response=>{
        console.log(response.response)
    })
}











getbtn.addEventListener('click',getData);
setbtn.addEventListener('click',setData);