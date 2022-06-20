
function user() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ "user": "naba93980", "password": 12345 });
        }, 2000);
    })
}
function getUserVideos(user) {
    console.log( user );
    return new Promise((resolve, reject)=>
    {
        setTimeout(() => {
        // reject(new Error("error haire"))
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

//async function returns promise which resolve with a val which is returned by first return statement inside async function.
async function getDetails() {
    console.log( "inside getDetails" );
    
    try {
        const userDetail = await user();
        console.log(userDetail);
        const videos = await getUserVideos(userDetail.user);
        console.log(videos);
        const videoDetail = await getvideoDetails(videos[0]);
        console.log(videoDetail);
    }
    catch (err) {
        console.log(err);
        //return 5; //ida active thkle r nicher kunu return statement execute hoitona
    }
    finally {
        console.log("inside finally");
        return 50; //ei line ta thakle nicher r kisui execute hoitona
    }       
}
// getDetails();
// console.log(getDetails());
getDetails().then((val)=>console.log(val))
//control go to getDetail fucntion, then getDetail fucntion returns pending promise, and after that async functions inside getDetals get executed, then finally based 
//on the return statement(i.e resolves values of promises returned by the internal async functions) from the internal async functions the promise returned earlier by getDetail function gets resolved
