//singleton objects 
//objects.create


//object literals (more than one)
const gender= Symbol("any")
const myobj={
    name:"Nishant",
    no:9702621749,
    email:"sharma@gmail.com",
    age:20,
    "surname":"sharma",
    [gender]:"male",
    notloggedin:["Saturday,Sunday"]


}
console.log(myobj.age)//objects can be showed using dot(.) operator 
console.log(myobj["email"])
/*objects can also be showed or print using square braces which is more professional in certain cases its become the only 
choice to use example string and symbol keys*/
console.log(myobj[gender])
console.log(myobj.surname)
console.log(typeof myobj)
//Object.freeze(myobj)
myobj.email="Nishant@gmail.com"
console.log(myobj.email)//it will not change the email as the freeze function is applied to the object
myobj.greetings=function()
{
    console.log("Hello Nishant")
}
myobj.greet=function()
{
    console.log(`Your age is ${this.age}`)
}
console.log(myobj.greetings())
console.log(myobj.greet())
console.log( myobj)