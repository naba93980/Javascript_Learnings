//synchronous onSuccessCallbacks

/*console.log("start");
const items=[1,2,3,4,5,6,7];
items.forEach((element)=>{
    console.log(element);
})
console.log("start");
*/
//asynchronous onSuccessCallbacks

console.log("start");

function user(email,password,onSuccessCallback){
    setTimeout(()=>{
        // return ({"usermail":email});
        // console.log(email);
        onSuccessCallback({"user":email,"password":password});
    },2000);
}


function getUserVideos(email,onSuccessCallback){
    setTimeout(()=>{
        onSuccessCallback(["video","video2","video3"]);
    },4000)
}


function getvideoDetails(video,onSuccessCallback){
    setTimeout(()=>{
        onSuccessCallback({"name":"dhinkachika","duration":"11:23 minutes"})
    },5000)
}


user("naba93980",12345,(userDetail)=>{
    console.log(userDetail);
    
    getUserVideos(userDetail.user,(videos)=>
    {
        console.log(videos);
        
        getvideoDetails(videos[0],(videoDetails)=>{
            console.log(videoDetails);
        })
    });
});
console.log("end");
//callbacks calling a function and passing another callback as parameter, basically callbacks passing callbacks is callback hell.

