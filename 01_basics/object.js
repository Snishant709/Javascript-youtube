
/*
//singleton objects
const nishant=new Object()
console.log(nishant) 

*/

//objects.create

/*

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
objects can also be showed or print using square braces which is more professional in certain cases its become the only 
choice to use example string and symbol keys
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
*/

const user={}
user.name="Nishant",user.id=12,user.gender="male"
const employee={
    email:"sharma@gmail.com",
    fullname:{
      
        employee_full_name:{
            firstname:"Nishant",
            lastname:"Sharma"
        }
    }
}
//console.log(user)
console.log(employee.fullname.employee_full_name.firstname)

const myobj1={
    1:"a",
    2:"b"
}
const myobj2=
{
    3:"c",
    4:"d"
}
//const myobj3=Object.assign(myobj1,myobj2)// First way of merging the objects
const myobj4={...myobj1,...myobj2}//Second way of merging the Objects
console.log(myobj4)
console.log(Object.keys(myobj1))
console.log(Object.values(myobj1))
console.log(myobj1.hasOwnProperty(1))
console.log(myobj1.hasOwnProperty(5))

//De-Structuring of Objects
const fullname={
    Name:"Nishant",
    Surname:"Sharma"
}
//accesing the objects in a short way or instead of calling it with object name  using dot operator use Destructuring 
const {Name}=fullname//Destructuring
console.log(Name)
const {Name:N}=fullname//Destructuring along with changing the name
console.log(N) 

/*
//Look how the JSON looks like

First it may looks like an Object
{
    "name":"Nishant",
    "roll":20,
    "surname":"sharma"
}
Second it may looks like array of objects
{
    [
        {

        }
    ]
}
*/
