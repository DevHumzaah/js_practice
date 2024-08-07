// const promiseOne= new Promise(function(resolve, reject){

//     //do async task
//     //DB calls network

//     setTimeout(function(){
//         console.log("task is completed");
//         resolve()
        
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log("promise consume");
    
// })



const promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(function() {
        console.log("task 2 is completed");
        resolve();
    }, 1000);
}).then(function() {
    console.log("resolved");
});

   //promise is object  
