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
const myobj1={
nishant:32,
age:1
}




const myfunction=function()
{
    console.log("Hello Nishant")
}
console.log(typeof myobj)

//************************************************************* 
/*
Stack(Premitive) Heap(Non-Premitive)


example of Pass by  value
let myname="Nishant"
let anothername=myname
anothername="Sharma"
console.log(anothername)
console.log(myname)
*/

//Example of Pass By Reference
let userOne ={
    email:"Nishant@gmail.com",
    number:9702621749
}
let userTwo=userOne
userTwo.email="sharma@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
