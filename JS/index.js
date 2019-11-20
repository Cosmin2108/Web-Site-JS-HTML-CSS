
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
