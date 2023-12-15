let x=document.querySelectorAll("button") 
let z=document.querySelector("section")
let h=document.querySelector("h3")
let re=document.querySelector("#AK")
x.forEach((y)=>{
    y.addEventListener("mouseover" ,()=>{
        y.style.backgroundColor=y.innerText
        h.innerText=`CLICK THE BUTTON TO ${y.innerText} THEME`
        h.style.color=y.innerText
        h.style.transition="1s"
        h.style.transform="scale(1.1)"
       
    })
    y.addEventListener("mouseout" ,()=>{
        y.style.backgroundColor="black"
        h.style.transform="scale(0.8)"
        h.style.color="white"
        h.style.transition="none"
        h.style.transform="none"
        h.innerText=`CLICK THE THEME TO CHANGE`
       
    })
    y.addEventListener("click",()=>{
      z.style.backgroundColor=y.innerText
      h.style.color="white"
      
    })    
   
})
function a() {
    z.style.backgroundColor="black"
   }
