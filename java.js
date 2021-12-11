let heading = document.querySelector('.text-1');
let heading1=  document.querySelector('.text-2');

window.onscroll = () =>{
	let position = window.scrollY - 100;
	heading.style.left = `${position}px`;
	heading1.style.right = `${position}px`;
	console.log('HEyllo')
}


// Image slideshow

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
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
