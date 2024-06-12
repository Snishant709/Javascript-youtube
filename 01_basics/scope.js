/*
{let num1=1
var num2=2
const num3=3
}
if(true)
    {
        console.log("Nishant")
    }
console.log(num2)//only num2 will be printed as its scope is not limited to  the scope it can be accessed throughout the code
*/
function one(){
    name="Nishant"
    function channel(){
        channel_name="sharma"
    }
    console.log(name)//name can be accessed here but the channel_name cant be accessed as it is out of scope  here
} 
//console.log(name) name cannot be accessed here as it is out of scope  here

console.log(one())
//addone(7) this will throw not throw an error as function declared in this type can be called before it is initialized
function addone(number1)
{
    console.log(number1+1)

}
addone(7)

//addwo(6) this will throw an error as function declared in this type cant be called before it is initialized
const addwo=function(number2)
{
    console.log(number2+2)
}
addwo(6)