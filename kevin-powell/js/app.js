/* Code javascript here */
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__button--right');
const prevBtn = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;



//arrange the slides next to one another
// slides[0].style.left = `${slideWidth * 0}px`;
// slides[1].style.left = `${slideWidth * 1}px`;
// slides[1].style.left = `${slideWidth * 2}px`;

const setSlidePosition = (slide, index) =>{
  slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

//This is a function for dynamic moving of slides
//track means the positioning of the slide
//currentSlide to be used to remove its current-slide class
//targetSlide is the indicator if were moving next 

const gotoSlide = function(track, currentSlide, targetSlide){
  //move to the next slide
  track.style.transform = `translate3d(-${targetSlide.style.left}, 0, 0)`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

const updateDots = function(currentDot, targetDot){
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}

const hideShowArrows = function(slides, prevButton, nextButton, targetIndex){
  if(targetIndex === 0){
    prevBtn.classList.add('is-hidden');
    nextBtn.classList.remove('is-hidden');
  }else if (targetIndex === slides.length - 1){
    prevBtn.classList.remove('is-hidden');
    nextBtn.classList.add('is-hidden');
  } else{
    prevBtn.classList.remove('is-hidden');
    nextBtn.classList.remove('is-hidden');
  }
}

//when I click right, move slides to the right
nextBtn.addEventListener('click', function(e){

  //move to the side
  //find the current slide
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  
  gotoSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
});

prevBtn.addEventListener('click', function(e){

  //move to the side
  //find the current slide
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  gotoSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
});

dotsNav.addEventListener('click', function(e){
  //what indicator was clicked on?

  const targetDot = e.target.closest('button');

  if(!targetDot) return;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotsNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot); 
  const targetSlide = slides[targetIndex];
  
  gotoSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevBtn, nextBtn, targetIndex);

});