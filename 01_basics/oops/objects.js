function multiplyby5(num)
{
    return num*5; 
}
multiplyby5.power=2
console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

function createUser(username,price)
{
    this.username=username
    this.price=price
}

createUser.prototype.priceIncrement=function()
{
    this.price++
    console.log(this.price)
}
createUser.prototype.printPrice=function()
{
    console.log(`the price is ${this.price}`)
}

const u1=new createUser("chai",25)
const u2=new createUser("code",250)
 u1.priceIncrement()
u1.printPrice()