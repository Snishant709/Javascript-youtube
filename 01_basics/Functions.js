/*
function add(num1,num2)//parameters
{
    console.log(num1+num2)
}
add(1,2)//arguments 
//note the above function will not print the value if you store it in any variable because it is not returning
*/
function add(num1,num2)//parameters
{
    return num1+num2
}
const res=add(1,2)//arguments 
console.log(res)
//while you are making any function at that time it is called parameters and if you call that functions than it is called arguments
function userloogedin(name)
{
    if(!name)//this is the second way of writing if(name===undefined)
        {
            console.log("Please enter the username")
            return
        }
    return `${name} has just logged in`
}
console.log(userloogedin())
nishant =function()
{
    console.log("Hello Nishant")
}
nishant()

function count_cart_prices(...prices)//use of rest operator for getting 'n' numebrs of parameters 
{
    return prices
}
function count_cart_prices2(val1,val2,...prices)//use of rest operator for getting 'n' numebrs of parameters 
{
    return prices
}
console.log(count_cart_prices2(100,200,300,800,900,500))


//passing the object as parameter of a function
const user={
name:"Nishant",
age:20
}

function getUser(anyuser)
{
    return `The name of the user is ${anyuser.name} and the age is ${anyuser.age}`
}
console.log(getUser(user))//passing the object as an argument
console.log(getUser({name:"Pratham",age:20}))

//passing the array as a parameter of the function
const myarry=[1,2,3,4,5,6]
 function arrSecondElement(anyNumber)
{
    return `The second array elemets is ${anyNumber[1]}`
}
console.log(arrSecondElement(myarry))//passing the array as an argument
console.log(arrSecondElement([1,6,3,4,5]))

