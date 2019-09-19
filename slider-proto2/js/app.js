/* Code javascript here */

const slideshow = document.querySelector('#slideshow'),
      slideTrack = document.querySelector('#slide-track'),
      slideRow = document.querySelector('#slide-row'),
      slides = document.querySelectorAll('.slide'),
      prevBtn = document.querySelector('#prev'),
      nextBtn = document.querySelector('#next');

let   counter = 1;

// Clones

const cloneFirst = slides[0].cloneNode(true), 
      cloneLast = slides[slides.length - 1].cloneNode(true);

slideTrack.appendChild(cloneFirst);
slideTrack.insertBefore(cloneLast, slides[0]);

// Redeclare variables after cloning

const totalSlides = document.querySelectorAll('.slide');

totalSlides[0].classList.add('cloned');
totalSlides[totalSlides.length - 1].classList.add('cloned');

const slideAction = {
  goToSlide:function(i){
    slideTrack.style.transform = `translate3d(-${slideRow.clientWidth * i}px, 0, 0)`;
  },
  transition:function(i){
    slideTrack.style.transition = `${i}`;
  }
}



function slideResize(){
  slideTrack.style.width = `${slideRow.clientWidth * totalSlides.length}px`;
  slideTrack.style.transform = `translate3d(-${slideRow.clientWidth * counter}px, 0, 0)`;

  totalSlides.forEach(function(slide){
    slide.style.width = `${slideRow.clientWidth}px`;
    
  });
}


// Next Button
nextBtn.addEventListener('click', function(){

  slideAction.transition(`transform 0.4s ease-in-out`);
  counter++; 
  
  slideAction.goToSlide(counter);

});

// Prev Button
prevBtn.addEventListener('click', function(){

  slideAction.transition(`transform 0.4s ease-in-out`);
  counter-- 
  
  slideAction.goToSlide(counter);

});


// After each ending of transition it checks if it's the last or the first slide
slideTrack.addEventListener('transitionend', function(){
  slideAction.transition(`none`);

  if(counter > slides.length){
    counter = 1;
    slideAction.goToSlide(counter);
  }

  if(counter < 1){
    counter = slides.length;
    slideAction.goToSlide(counter);
  }

});


setInterval(function(){
  nextBtn.click();
}, 2000);

setTimeout(window.onload = slideResize, 10);

window.onresize = slideResize;



