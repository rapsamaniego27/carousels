// Variable Declarations

const slideshow = document.querySelector('.slideshow');
      slick = document.querySelector('.slick'),
      slickTrack = document.querySelector('.slick-track'),
      slickList = document.querySelector('.slick-list'),
      nextBtn = document.querySelector('#next'),
      prevBtn = document.querySelector('#prev');

let slides = document.querySelectorAll(".slick-slide:not(.cloned)"),
    slideCount = slides.length;


const cloneFirst = slides[0].cloneNode(true),
      cloneLast = slides[slides.length - 1].cloneNode(true);
      
      slickTrack.appendChild(cloneFirst);
      slickTrack.insertBefore(cloneLast, slides[0]);
     

      // Re declare variables after cloning
const totalSlides = document.querySelectorAll('.slick-slide'),
      totalSlideCount = totalSlides.length;
      
      totalSlides[0].classList.add('cloned');
      totalSlides[totalSlides.length - 1].classList.add('cloned');

let counter = 1;
      
// Slide Actions
const slideAction = {
  goToSlide:function(i){
    slickTrack.style.transform = `translate3d(-${(slick.clientWidth * i)}px, 0, 0)`;
  },
  transition:function(i){
    slickTrack.style.transition = `${i}`;
  }
}



function resize(){

slideAction.transition('none');

//slickTrack width 
slideAction.goToSlide(counter);

//total slickTrack width
slickTrack.style.width = `${slick.clientWidth*totalSlideCount}px`;

totalSlides.forEach(function(slide){
  // console.log(slide.style.transform = `translate3d(${slick.clientWidth}, 0, 0)`);
  slide.style.width = `${slick.clientWidth}px`;
});

}


// Next Button
nextBtn.addEventListener('click', function(){

  slideAction.transition(`transform 0.4s ease-in-out`);
  counter++;

  console.log(counter);

  slideAction.goToSlide(counter);
  
});
// Prev Button
prevBtn.addEventListener('click', function(){

  slideAction.transition(`transform 0.4s ease-in-out`);
  counter--;

  console.log(counter);

  slideAction.goToSlide(counter);
  
});

// Do this when transition ends or after sliding
slickTrack.addEventListener('transitionend', function(){
  slideAction.transition(`none`);
  if(counter > slides.length){
    counter = 1;
    slideAction.goToSlide(counter);
  }

  if (counter <= 0){
    counter = slides.length;
    slideAction.goToSlide(counter);
  }
});


setInterval(function(){
  nextBtn.click();
}, 2000); 

setTimeout(window.onload = resize, 10);

window.onresize = resize;
