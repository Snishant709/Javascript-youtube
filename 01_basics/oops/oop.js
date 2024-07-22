// //object literals
// const user=
// {
//     username:"Nishant",
//     age:20,
//     std:"TY",
//     getuserdetails:function ()
//     {
        
//         console.log(`Username is ${this.username}`)
//         console.log(this)
//     }
// }
// console.log(user.getuserdetails())
// console.log(this)


//Constructor
function users(username,age,isLoggedin)
{
this.username=username;
this.age=age;
this.isLoggedin=isLoggedin;

}

// const user1=users("Nishant",24,true)
// console.log(user1)
// const user2=users("Sharma",20,false)
// console.log(user2)//if you do not use the new keyword for using the function then it will override it


// //so instead of that use new keyword before using that function
// const user1=new users("Nishant",24,true)
// console.log(user1)
// const user2=new users("Sharma",20,false)
// console.log(user2)