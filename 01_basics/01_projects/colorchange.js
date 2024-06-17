const body=document.querySelector("body")
const buttons=document.querySelectorAll(".buttons")
buttons.forEach((button)=>{
    button.addEventListener("click",function (e){
        console.log(e)//tells which event has occur
        console.log(e.target);//tells which tag is targeted here its is 'span' tag
        if(e.target.id=="grey")
            {
                document.body.style.backgroundColor=e.target.id;
            }
        else if(e.target.id=="white")
            {
                document.body.style.backgroundColor=e.target.id;
            }
        else if(e.target.id=="blue")
                {
                    document.body.style.backgroundColor=e.target.id;
                }
        else if(e.target.id=="yellow")
                    {
                        document.body.style.backgroundColor=e.target.id;
                    }

    })
    
})