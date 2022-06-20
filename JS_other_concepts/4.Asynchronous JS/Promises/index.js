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
//returns another pending promise object, the resolution/rejection of the promise returned by then will be subsequent to the resolution/rejection of the promise returned by the handler. Also, the resolved value of the promise returned by then will be the same as the resolved value of the promise returned by the handler.

const prom = new Promise(user);
const prom2 = prom.then((userDetail) => {
    console.log(userDetail);
    // return 5; //-> returning a value
    // throw new Error("hello"); //-> throws error
    return getUserVideos(userDetail.user); //-> returning an impending promise
    // return prom; //->returning an already fulfilled promise
});
prom2.then((videos) => {
    console.log(videos);
    return getvideoDetails(videos[0]);
})//, (err => console.log("errorHai " + err)));
.then((videoDetail) => {
    console.log(videoDetail);
}).catch((err) => {
    console.log(err);
    return 10;
}).then((val)=>console.log( "val "+val )
).finally(()=>console.log( "its done" ));


console.log("End");
//If a handler function --
    //returns a value, the promise returned by then gets resolved with the returned value as its value.
    //doesn't return anything, the promise returned by then gets resolved with an undefined value.
    //returns an already fulfilled promise, the promise returned by then gets fulfilled with that promise's value as its value.
    //returns another pending promise object, the resolution/rejection of the promise returned by then will be subsequent to the resolution/rejection of the promise returned by the handler. Also, the resolved value of the promise returned by then will be the same as the resolved value of the promise returned by the handler.
    //returns an already rejected promise, the promise returned by then gets rejected with that promise's value as its value.
    //throws an error, the promise returned by then gets rejected with the thrown error as its value.
