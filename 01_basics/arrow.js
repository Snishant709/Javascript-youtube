/*
const user={
    name:"Nishant",
    price:999,
    welcomeMessage:function(){
        console.log("Welcome ",this.name)
        console.log(this)//it will print the current context

    }
}
console.log(user.welcomeMessage())
user.name="Sharma"
console.log(user.welcomeMessage())
console.log(this)//here it will give empty object but in browser console it will give Window as an Object

function Nishant()
{
    const user_name="Nishant"
    console.log(user_name.this)//it will give undefined because we cannot use this keyword in Function
}

Nishant()

//Using of Arrow Function
const Nishant= ()=>
{
    const user_name="Nishant"
    console.log(user_name.this)//it will give undefined because we cannot use this keyword in Function
}

Nishant()
*/

//Arrow Function example Of Implicit Return
const add=(num1,num2)=> (num1+num2) //() this paranthesis indicates return keyword
//const add=(num1,num2)=> num1+num2 another way of writing the above statement 
//Arrow Function example of Explicit Return
function sum(n1,n2)
{
return n1+n2
}
console.log(add(2,3))
console.log(sum(3,4))

//another example of Arrow Function for returning the object
const returnobject=()=>({username:"Nishant"})//here for returning we use the paranthesis
console.log(returnobject())