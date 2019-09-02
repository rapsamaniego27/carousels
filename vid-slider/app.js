const slideshow = document.querySelector('.slideshow');
      slick = document.querySelector('.slick'),
      slickTrack = document.querySelector('.slick-track'),
      slickList = document.querySelector('.slick-list');

let slides = document.querySelectorAll(".slick-slide:not(.cloned)"),
    slideCount = slides.length;


const cloneFirst = slides[0].cloneNode(true),
      cloneLast = slides[slides.length - 1].cloneNode(true);

      slickTrack.appendChild(cloneFirst);
      
      slickTrack.insertBefore(cloneLast, slides[0]);

      // Re declare variables
const totalSlides = document.querySelectorAll('.slick-slide'),
      totalSlideCount = totalSlides.length;
      
      totalSlides[0].classList.add('cloned');
      totalSlides[totalSlides.length - 1].classList.add('cloned');

function resize(){

//slickTrack width 
slickTrack.style.transform = `translate3d(-${slick.clientWidth}px, 0, 0)`;

//total slickTrack width
slickTrack.style.width = `${slick.clientWidth*totalSlideCount}px`;

totalSlides.forEach(function(slide){
  // console.log(slide.style.transform = `translate3d(${slick.clientWidth}, 0, 0)`);
  slide.style.width = `${slick.clientWidth}px`;
});

  
}

function goToSlide(i){
  slickTrack.style.transform = `translate3d(-${(slick.clientWidth * i)}px, 0, 0)`;
}





const nextBtn = document.querySelector('#next');
const back = document.querySelector('#back');

let counter = 1;



nextBtn.addEventListener('click', function(){

  const active = document.querySelectorAll('.slide-active');

  slickTrack.style.transition = `transform 0.4s ease-in-out`;
  counter++;


  console.log(counter);
  // active[0].nextElementSibling.classList.add('slide-active');
  // active[0].classList.remove('slide-active');

  goToSlide(counter);
  
});


slickTrack.addEventListener('transitionend', function(){
  if(counter > slides.length){
    counter = 1;
    slickTrack.style.transition = "none";
    goToSlide(counter);
  }
});


window.onload = resize;
window.onresize = resize;

console.dir(document.querySelectorAll('.slick-slide') );