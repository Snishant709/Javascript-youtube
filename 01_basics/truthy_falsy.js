//truthy values
//[],true,function(),{}," ","false","0"

//Falsy Value
//"",false,null,undefined,NaN,0,-0,BigInt 0n

const myobj={}
if(Object.keys(myobj).length===0)
    {
        console.log("The Array is empty")
    }
    //Nullish Coalescing operator
    //const val1=20??15
   // val1=null??78
   //val1=45??undefined
   val1=null??23??45
    console.log(val1)
    

//Ternary Operator
const age=18
age<18?console.log("You are not qualified for the license "):console.log("Yes you are qualified for the license")
