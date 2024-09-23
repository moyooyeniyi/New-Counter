let zero = document.querySelector(".zero")
let button = document.querySelector(".buttons")

button.addEventListener("click", (e) => {
  if(e.target.classList.contains("add")){
    zero.innerHTML++; changeColor();
  }
  
  if (e.target.classList.contains("Subtract")){
zero.innerHTML--; changeColor();
  }

  if (e.target.classList.contains("reset")){
    zero.innerHTML = 0; changeColor();
  }
  
})

function changeColor(){
  if (zero.innerHTML > 0){
    zero.style.color = "yellow"
  } else if (zero.innerHTML < 0){
    zero.style.color = "orangered"
  }
  else{
    zero.style.color = "white"
  }
}

