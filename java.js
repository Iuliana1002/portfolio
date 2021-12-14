
// Image slideshow

let slideIndex = 1;
showSlides(slideIndex);
showSlides2(slideIndex);
showSlides3(slideIndex);
showSlides4(slideIndex += n);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  showSlides2(slideIndex += n);
  showSlides3(slideIndex += n);
  showSlides4(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  showSlides2(slideIndex = n);
  showSlides3(slideIndex = n);
  showSlides4(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  if (n > slides.length) {slideIndex = 1}
	console.log(slides);
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
   slides[slideIndex-1].style.display = "block";
  }
function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("slider2");
  if (n > slides.length) {slideIndex = 1}
  console.log(slides);
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
   slides[slideIndex-1].style.display = "block";
  }
function showSlides3(n) {
  let i;
  let slides = document.getElementsByClassName("slider3");
  if (n > slides.length) {slideIndex = 1}
  console.log(slides);
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
   slides[slideIndex-1].style.display = "block";
  }
function showSlides4(n) {
  let i;
  let slides = document.getElementsByClassName("slider4");
  if (n > slides.length) {slideIndex = 1}
  console.log(slides);
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
   slides[slideIndex-1].style.display = "block";
  }