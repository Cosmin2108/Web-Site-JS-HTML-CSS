
// Get the modal
var modal = document.getElementById("myModal");
// Insert this object inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementsByClassName("description")[0];


function show_img(z){

    modalImg.src = z.src;
    captionText.innerHTML = z.alt;
    modal.style.display = "flex";

}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeButton")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {

  modal.style.display = "none";
}
