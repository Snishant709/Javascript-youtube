/*
Primitive (Pass by value)
String ,Number,Boolean,null,undefined,Symbol,BigInt
*/
const score=110
const scoreValue=100.3
const isloggedIn=true
const outsideTemp=null
let useremail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)
const BigNumber=74618946189248216812689
console.log(BigNumber)

// Non-Primitive (Pass by refernce)
// Array,Objects,Functions (type of all this is object and type of function is function object to be specific)
const heros=["shaktiman","Naagraj"]
const myobj={
nishant:32,
age:1
}




const myfunction=function()
{
    console.log("Hello Nishant")
}
console.log(typeof myobj)