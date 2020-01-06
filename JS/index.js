
var fixed = document.getElementById("fixed");
// var suport = document.getElementById("suport");


if(window.innerWidth < 442){
  fixed.classList.remove("fixed")
  // suport.classList.remove("suport")

}
else{
  fixed.classList.add("fixed");
  // suport.classList.add("suport");
}

var p_list = document.getElementsByClassName("change_letter");

for(p of p_list){
  p.addEventListener("mouseover", change_color, true);
  p.addEventListener("mouseout", reset_color, true);
}

function change_color(p){
  for(p of p_list)
    p.style.color = "#FFD700";
}

function reset_color(){
  for(p of p_list)
    p.style.color = "black";
}
