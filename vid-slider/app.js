// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelectorAll('.carousel-wrap');

// const prevBtn = document.querySelector('#prevBtn');
// const nextBtn = document.querySelector('#nextBtn');

// let counter = 0;
// const width =  carouselImages[0].clientWidth;

// nextBtn.addEventListener('click', function(){
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = 'translateX(' + (-width * counter) + 'px)';
  
// });

const slideshow = document.querySelector('.slideshow')
const slick = document.querySelector('.slick');
const slickTrack = document.querySelector('.slick-track');
const slides = document.querySelectorAll('.slick-slide');

function resize(){
  
//slickTrack width 
slickTrack.style.transform = `translate3d(${slick.clientWidth}px, 0, 0)`;

//total slickTrack width
slickTrack.style.width = `${slick.clientWidth*5}px`;

// slickTrack.style.transform = `translate3d(${slick.clientWidth}, 0, 0)`;
// slides.forEach(function(slide){
//   console.log(slide.style.transform = `translate3d(${slick.clientWidth}, 0, 0)`);
// });

// slides.forEach(function(slide){
//   console.log(slide.style.transform = `translate3d(${slick.clientWidth}, 0, 0)`);
// });
  
}




// console.log(slick.clientWidth);

window.onresize = resize;
