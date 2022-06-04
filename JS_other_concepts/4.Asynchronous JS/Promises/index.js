console.log( "Start" );

function user(resolve, reject) {
    setTimeout(() => {
        resolve({"user":"naba93980","password":12345});
    }, 2000);
}
function getUserVideos(user) {
    console.log( user );
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
        resolve (["video", "video2", "video3"]);
    }, 2000);
    })
}
function getvideoDetails(video) {
    console.log( video );
    
    return new Promise((resolve,reject)=>{setTimeout(()=>{
        resolve({"name":"dhinkachika","duration":"11:23 minutes"})
    },2000)})
    
}


const prom = new Promise(user);
prom.then((userDetail) => {
    console.log(userDetail);
    return getUserVideos(userDetail.user);
}).then((videos) => {
    console.log(videos);
    return getvideoDetails(videos[0]);
}).then((videoDetail) => {
    console.log(videoDetail);    
})



console.log("End");

