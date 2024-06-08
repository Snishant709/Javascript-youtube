let arr=[1,2,3,4,5]
let arr2=[7,8,[4,9]]
console.log(arr)
console.log(arr.concat(5))//adding the element in the array using concat function
console.log(arr)
console.log([...arr,...arr2])//adding the element in the array using spread function
console.log(arr.concat(arr2))
let new1=arr.slice(1,3)
console.log(`Result after doing slice to array [1,2,3,4,5] ${new1} `)
console.log(`Note the original array does not change that is it remains ${arr} `)
let new2=arr.splice(1,3)
console.log(`Result of splice after doing splice to array [1,2,3,4,5] is ${new2}`)
console.log(`Here the original array changes that is  ${arr} `)
const new_array=[7,8,9,5]
new_array.unshift(1)
console.log("The array after using unshift the value get inserted in the beginning ",new_array)
new_array.shift()
console.log("The array after using shift the value get deleted in the beginning ",new_array)
const ans=arr2.flat()
console.log(`Give the numbers which  are present in whole array and subarray that is ${ans}`)
console.log(Array.isArray("Nishant"))
console.log(Array.from("Nishant,Bharat,Sharma"))
console.log(Array.from({name:"Nishant"}))
//returns an empty array because it cant differentiate that it has to make the array of keys or values

console.log(Array.of("Nishant,Bharat,Sharma"))
const score1=10
const score2=20
const score3=30
console.log(Array.of(score1,score2,score3))

