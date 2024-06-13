//forin
/*
const myObj={
    name:"Nishant",
    surname:"Sharma",
    phone:9702621749
}
for (const key in myObj) {
    console.log(`${key} ${myObj[key]}`)
}

const arr=["Nishant","Bharat","Sharma"]
for (const key in arr) {
    console.log(arr[key])
}
*/
const myMap=new Map()
myMap.set("IN","INDIA")
myMap.set("WI","WESTINDIES")
myMap.set("AUS","AUSTRALIA")
for (const key in myMap) {
    console.log(key)
}

//So from the above loop you will not get any output because 
//Note:The loop from which Map are iterable is forof loop and for Objects we use forin loop


