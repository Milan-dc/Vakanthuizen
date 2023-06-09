let slideshow1Index = 0;
let slideshow2Index = 0;

showSlide(slideshow1Index, 'slideshow1');
showSlide(slideshow2Index, 'slideshow2');

function changeSlide(n, slideshow) {
  if (slideshow === 'slideshow1') {
    slideshow1Index += n;
    showSlide(slideshow1Index, 'slideshow1');
  } else if (slideshow === 'slideshow2') {
    slideshow2Index += n;
    showSlide(slideshow2Index, 'slideshow2');
  }
}

function showSlide(n, slideshow) {
  const slides = document.getElementsByClassName(slideshow)[0].getElementsByClassName("slide");

  if (n >= slides.length) {
    if (slideshow === 'slideshow1') {
      slideshow1Index = 0;
    } else if (slideshow === 'slideshow2') {
      slideshow2Index = 0;
    }
  }

  if (n < 0) {
    if (slideshow === 'slideshow1') {
      slideshow1Index = slides.length - 1;
    } else if (slideshow === 'slideshow2') {
      slideshow2Index = slides.length - 1;
    }
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideshow === 'slideshow1') {
    slides[slideshow1Index].style.display = "block";
  } else if (slideshow === 'slideshow2') {
    slides[slideshow2Index].style.display = "block";
  }
}
