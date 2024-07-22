class user{
    constructor(name)
    {
        this.name=name
    }
    myName()
    {
        return `My name is ${this.name}`
    }
}
class Trader extends user{

    constructor(name,email,password)
    {
        super(name)
        this.email=email
        this.password=password

    }
    myProfessionName()
    {
        return `My Profession name is ${this.name}`
    }
}

const u1=new Trader("Nishant","Nishant@gmail.com","Nishant@123").myProfessionName()
console.log(u1)