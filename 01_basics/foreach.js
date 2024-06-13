const programming=["Python","JS","JAVA","C++"]
//1st way
programming.forEach(function (item)
{
    //console.log(item)
}
)
//2nd way
programming.forEach( (item)=>
{
  //  console.log(item)
})
//3rd way
programming.forEach((item,index,programming)=>{
//console.log(item,index,programming)
})

//4th way
function print(item)
{
//    console.log(item)
}
programming.forEach(print)

//Accessing the Array of Object using foreach
const user=[
    {
        name:"Nishant",
        surname:"Sharma"
    },
    {
        name:"Chetan",
        surname:"Amin"
    },
    {
        name:"Pratham",
        surname:"Shetty"
    }
]
user.forEach((item)=>
{
console.log(item.name)
})