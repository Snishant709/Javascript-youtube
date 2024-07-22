// class student{
//     constructor(name,email,password)
//     {
//         this.name=name
//         this.email=email
//         this.password=password

//     }
//     encryptPassword()
//     {
//         return `the password is ${this.password}abc`
//     }

//     changeName()
//     {
//         return `The name is ${this.name.toUpperCase()}`
//     }
// }

// const s1=new student("Nishant","Nishant@gmail.com","123").encryptPassword()
// console.log(s1)
// const s2=new student("Nishant","Nishant@gmail.com","123").changeName()
// console.log(s2)


//Doing the same thing which is done above without using class instead of that using function
const createStudent=function (name,email,password)
{
this.name=name;
this.email=email;
this.password=password;
}
createStudent.prototype.encryptPassword=function ()
{
    return `The password is ${this.password}abc`
}
createStudent.prototype.changeName=function ()
{
    return `The changed name is ${this.name}`
}

const s1=new createStudent("Nishant","Nishant@gmail.com","Nishant@123")
const s2=s1.encryptPassword()
console.log(s2)




