// //using class 
// class User
// {
//     constructor(email,password)
//     {
//         this.email=email;
//         this.password=password;
//     }
//     get password()
//     {
//         return this._password.toUpperCase()
//     }
//     set password(password)
//     {
//         this._password=password
//     }
// }
// const u1=new User("Nishant","Sharma")
// console.log(u1.password)

//using function

function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);

function User1(email,password)
{
    this._email=email
    this._password=password
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

 u1=new User1("Nishant@gmail.com","Nishant")
 console.log(u1.password)

 //using Object
 const user2=
 {
    _email:"sharmanishant@gmail.com",
    _password:"Nishant@123",
    get email()
    {
        return this._email.toUpperCase()
    },
    set email(value)
    {
        this._email=value
    },
    get password()
    {
        return this._password.toUpperCase()
    },
    set password(value)
    {
        this._password=value
    }
    
 }

 const obj1=Object.create(user2)
 console.log(obj1.email)
 
 const obj2=Object.create(user2)
 console.log(obj2.password)
