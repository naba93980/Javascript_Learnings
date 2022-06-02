const prom=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({user:"ed"});
        },2000);
        console.log("hello");
});