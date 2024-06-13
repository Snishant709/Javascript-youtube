//forof
const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log("The value is ",i)
}
const greetings="Hello Nishant"
for (const i of greetings) {
    if(i==" ")
        {
            continue
        }
    console.log("The value of greetings is ",i)
}

//Map
const myMap=new Map()
myMap.set("IN","INDIA")
myMap.set("WI","WESTINDIES")
myMap.set("AUS","AUSTRALIA")
console.log(myMap)
for (const [keys,values] of myMap ) {
    console.log(keys ," - ",values)
}
const myObj1=
{
    name:"Nishant",
    surname:"Sharma",
    phone:9702621749
}
//The below for of loop will not work for objects as it is saying that Objects are not Iterable
for (const [keys,values] of myObj1) {
    console.log(keys ," - ",values)
    
}
