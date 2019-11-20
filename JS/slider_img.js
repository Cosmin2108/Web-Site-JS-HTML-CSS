var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("description");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

var demoGallery = document.getElementById("demo-gallery");

function leftDemo(){
  var x = demoGallery.scrollLeft;

  if( x < 20){
      demoGallery.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
  }
  else{
    demoGallery.scroll({
      top: 0,
      left: x-20,
      behavior: 'smooth'
    });
  }
}

function rightDemo(){
  var divWidth = demoGallery.scrollWidth;
  var x = demoGallery.scrollLeft;

  if( x > divWidth - 20){
    demoGallery.scroll({
      top: 0,
      left: divWidth,
      behavior: 'smooth'
    });
  }
  else{
    demoGallery.scroll({
      top: 0,
      left: x+20,
      behavior: 'smooth'
    });
  }
}
