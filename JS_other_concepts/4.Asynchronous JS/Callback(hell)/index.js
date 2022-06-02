//synchronous callbacks

/*console.log("start");
const items=[1,2,3,4,5,6,7];
items.forEach((element)=>{
    console.log(element);
})
console.log("start");
*/
//asynchronous callbacks

console.log("start");

function user(email,password,callback){
    setTimeout(()=>{
        // return ({"usermail":email});
        // console.log(email);
        callback({"user":email,"password":password});
    },2000);
}
function getUserVideos(email,callback){
    setTimeout(()=>{
        callback(["video","video2","video3"]);
    },4000)
}
function getvideoDetails(video,callback){
    setTimeout(()=>{
        callback({"name":"dhinkachika","duration":"11:23 minutes"})
    },5000)
}
user("naba93980",12345,(userDetail)=>{
    console.log(userDetail);
    Object.keys(userDetail).forEach(element => {
        console.log(element);
    });
    Object.values(userDetail).forEach(element => {
        console.log(element);
    });
    getUserVideos(userDetail.user,(videos)=>
    {
        videos.forEach((element)=>{
            console.log(element);
        })
        getvideoDetails(videos[0],(videoDetails)=>{
            console.log(videoDetails);
        })
    });
});
console.log("end");

