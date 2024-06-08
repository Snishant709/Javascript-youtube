/*
//************String********************
const name="Nishant"
console.log(name)
console.log(name[0])
const surname=new String('Shar-ma')
console.log(surname)
let i=0;
for(i=0;i<surname.length;i++)
    {
        console.log(surname[i])
    }
    console.log(typeof name)
    console.log(typeof surname)
    console.log(surname.charAt(0))
    console.log(surname.split('-'))

   // *********************Numbers**********************

   const num=22.34;
   console.log(num)
   let n=new Number(2);
   console.log(num.toString().length)
   console.log(typeof n)
   console.log(num.toPrecision(2))
   const n1=new Number(100000)
   console.log(n1.toLocaleString('en-IN'))
   //***************Math************************
   console.log(Math.abs(-4))
   console.log(Math.round(5263682.322))
   console.log(Math.floor(566.444))
   console.log(Math.ceil(2324.2))
   console.log(Math.min(3,566,11,1))
   console.log(Math.random())
   console.log(Math.round(Math.random()*10)+1)
   const min=5
   const max=10
   console.log(Math.round(Math.random()*(max-min+1))+min)
   */
   //******************* Date**********************
   let mydate=new Date()
   console.log(mydate.getDay())
   console.log(mydate.toLocaleDateString())
   let yourchoicedate=new Date("08-06-2024")
   console.log(yourchoicedate.toDateString())
   let anotherdate=new Date(2024,5,8)
   console.log(anotherdate.toString())
   console.log(anotherdate.toDateString())
   console.log(anotherdate.toLocaleDateString())

   let mytimestamp= Date.now()
   console.log(mytimestamp)
   let newdate=new Date()
   console.log(newdate.toLocaleString('default',{weekday:"long"}))


