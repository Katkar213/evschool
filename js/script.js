

const buttons=document.querySelectorAll("button");
// console.log(buttons)

    buttons.forEach((button)=>{
        console.log(button)
        button.addEventListener("click",()=>{
           button.classList.toggle("color")
           const answer=button.nextElementSibling;
           answer.classList.toggle("hide");
     
    })
})

