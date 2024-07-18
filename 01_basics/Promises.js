const promise1=new Promise((resolve,reject)=>{
//Do an async task
//like DB calls,Networks,Cryptography
//Creation of Promise is below
setTimeout(()=>{console.log("Async task1 is completed ")
    resolve();//to show that promise is completed
},1000);
});
//Consume of Promise is below
promise1.then(()=>{console.log("Promise1 Consumed")});

new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("Async task2 is completed ");
    resolve();
},1000)
}).
then(()=>console.log("Promise2 Consumed"));

// const Promise3=new Promise((resolve,reject)=>{
// setTimeout(
// ()=>{
//         resolve({username:"Nishant",email:"sharmanishant709@gamil.com"})
//     },1000)
// })
// Promise3.then((user)=>{console.log(user)})

const Promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;
        if(!error)
        {
            resolve({username:"Nishant",password:"sharma"})
        }
        else
        {
            reject("Error while retriving the file username and password")
        }
    },1000)
})
.then((user)=>{
    console.log(user)
    return user.username
})
//chaining the below then block parameter will receive the value of the above then block which is username
.then((username)=>{
    console.log(username)
})
.catch(()=>{
    console.log("Error while loading the file userename and password")
}).finally(()=>console.log("Promise4 is completed either resolved or rejected"))
