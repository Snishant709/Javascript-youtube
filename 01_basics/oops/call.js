// const setUsername=function (username)
// {
//     this.username=username
// }
// const setUser=function (username,email,id)
// {
// setUsername.call(this,username)
// this.email=email
// this.id=id
// }

// const user1=new setUser("Nishant","Nishant@gmail.com",20)
// console.log(user1)

















const fy=function (name)
{
    this.name=name
}
const sy=function (std)
{
    this.std=std
}
const ty=function (name,std,marks)
{
    fy.call(this,name)
    sy.call(this,std)
    this.marks=marks
}
const student=new ty("Nishant","TY",88)
console.log(student)