

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



// slider...
const images = document.getElementsByClassName("crousal-image");
const imagelink = ["./images/crousal-first-image.JPG","./images/crousal-second-image.JPG","./images/hero-session-image.jpg", "./images/hero-session-image2.jpg", "./images/hero-session-image3.jpg"];
let count = 0;

setInterval(() => {
    // Set the source of the current image
    images[0].src = imagelink[count];
    
    // Increment the count and reset if it exceeds the length of imagelink
    count = (count + 1) % imagelink.length;
}, 3000);

