// const Sharma=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Sharma)

let myobj={
    name:"Nishant",
    price:45,
    isAvailable:true,
    chai:function ()
    {
        console.log("Chai nahi bana hai")
    }

}

console.log(Object.defineProperty(myobj,"name",{
    enumerable:false,//if we keep the enumerable as false then the value will not display  
    writable:true,
    configurable:true
}))
for (const [key,values] of Object.entries(myobj)) {
    if(typeof values!=="function")
    console.log(`${key} : ${values}`)
}