//using class
class User1
{
    constructor(email,password)
    {
        this.password=password
        this.email=email
    }
    get email()
    {
        return this._email.toUpperCase()
    }
    set email(value_of_email)
    {
        this._email=value_of_email
    }
}
const u1=new User1("nishant@gmail.com","sharma")
console.log(u1.email)

//using function
function User2(email,password)
{
    this._email=email
    this._password=password
    Object.defineProperty(this,"email",{
        get:function()
        {
            return this._email.toUpperCase()
        },
        set:function(value_of_email)
        {
            this._email=value_of_email
        }
    })
}
const u2=new User2("nishant@gmail.com","Nishant")
console.log(u2.email)

//using object
const User3={
    _email:"Nishant@gmail.com",
    _password:"Nishant",
    get email ()
    {
        return this._email.toUpperCase()
    },
    set email (value_of_email)
    {
        this._email=value_of_email
    }
}

const u3=Object.create(User3)
console.log(u3.email)