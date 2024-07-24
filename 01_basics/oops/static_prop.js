class user{
    constructor(username)
    {
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId()
    {
        return 123;
    }
}
const u1=new user("Nishant")
//console.log(u1.createId())//in order to avoid the use of CreateId function from user declare that function as "static"

class user2 extends user{
    constructor(username,email)
    {
        super(username)
        this.email=email

    }

}

const u2=new user2("Nishant","Nishant@gmail.com")
console.log(u2.createId())

