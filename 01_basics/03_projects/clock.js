const clock=document.querySelector("#clock")
setInterval(function ()
{
    const date=new Date()
    const res=date.toLocaleTimeString()
    clock.innerHTML=res

},1000)//1000 milliseconds
