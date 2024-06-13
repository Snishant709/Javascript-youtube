const arr=[1,2,3]
const initialvalue=0
//1ST WAY
//const sum=arr.reduce((accumulator,currentValue)=> accumulator+currentValue,initialvalue );
//2ND WAY
//const sum=arr.reduce((acc,curr)=>acc+curr,0)
//3RD WAY
const sum=arr.reduce((acc,curr)=>
    {   
        return acc+curr
    },0)
console.log(sum)
//printing the sum of all the prices of the Book
const books=[{bookname:"Nishant",price:4000},{bookname:"Sharma",price:2000}]
const res=books.reduce((acc,item)=>item.price+acc,0)
console.log(res)