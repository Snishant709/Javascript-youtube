//for each loop does not return any value 
// const coding=["JAVA","PHP","PYTHON","C++"]
// const res=coding.forEach((item)=>(item))
// console.log(res)

//So instead of that Replace came into the case
// const num=[1,2,3,4,5,6,7,8,9,10]
// const res=num.filter((item)=> (item))//it is called call back 
// console.log(res)

// const greater_5=num.filter((item)=> {
//     return (item>5)
// })
// console.log(greater_5)
// //this can be done also using for each but its more complex
// const mynums=[]
// num.forEach((number)=>{
//     if (number > 4) {
//         mynums.push(number)
//     }
// })
// console.log(mynums)

const books=[{bookname:"Nishant",year:2004},{bookname:"Pratham" ,year:2005},{bookname:"Chetan",year:2003}]
//console.log(books)
let res=books.filter((item)=> item.year==2005);//call back
console.log(res)
 let res1=books.filter((item)=>{
  return  item.year<2005 && item.bookname=="Nishant"
})
console.log(res1)