
// make navbar sticky on the top of windows

const navbar=document.querySelector('#navbar');
let tops=navbar.offsetTop;

function stickyNavbar (){
    if(window.scrollY >= tops){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
}

window.addEventListener('scroll',stickyNavbar);
 
// top navbar sticky end 




// best deal of day slider 

var img = document.getElementById("slider-image");
var slides=['slider_1','slider_2','slider_3','slider_4'];

var start=0;

function slideShow(){
    if(start<slides.length){
        start=start+1;
    }else{
        start=1;
    }

    img.innerHTML="<img src=img/"+slides[start-1]+".jpg>";
}

setInterval(slideShow,2000);

// end best deal of day slider




// advertising banner slider

var advertiseImage=document.getElementById("advertising");

var adverSlides=['adver_1','adver_2','adver_3','adver_4'];

var slideIndex = 0;

function adverSlideShow (){
    advertiseImage.innerHTML = "<img src='img/" + adverSlides[slideIndex] + ".webp'>";
    slideIndex = (slideIndex + 1) % adverSlides.length;
    
}

setInterval(adverSlideShow,2000);

// end of advertising banner slider


// best seller slider start 



document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.getElementById("carrd-Carousel");
    const cardItems = carousel.querySelectorAll(".card-items_3");
    const totalItems = cardItems.length;
    let currentIndex = 0;
    let autoSlideInterval; // Variable to hold the auto-slide interval

    function showImage(index) {
        cardItems.forEach((item, i) => {
            if (i >= currentIndex && i < currentIndex + 4) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showImage(currentIndex);

        if (currentIndex === 2) {
            clearInterval(autoSlideInterval); // Stop the auto-slide when index reaches 3
            setTimeout(() => {
                currentIndex = 0; // Reset index to 0
                showImage(currentIndex);
                startAutoSlide(); // Restart the auto-slide
            }, 3000); // Wait for 3 seconds before restarting
        }
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 6000); // Change image every 6 seconds (adjust as needed)
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    showImage(currentIndex); // Initial display of images
    startAutoSlide(); // Start auto-slide when the page loads
});


// best seller end 



// customer review slider start

const wrapper = document.querySelector('.cards-wrapper');

const dots = document.querySelectorAll('.dot');

let activeDotNum = 0;

dots.forEach((dot, idx) => {  

  dot.setAttribute('data-num', idx);
  

  dot.addEventListener('click', (e) => {
    
    let clickedDotNum = e.target.dataset.num;

    if(clickedDotNum == activeDotNum) {
      
      return;
    }
    else {
      
      let displayArea = wrapper.parentElement.clientWidth;
      
      let pixels = -displayArea * clickedDotNum
      wrapper.style.transform = 'translateX('+ pixels + 'px)';

      dots[activeDotNum].classList.remove('active');

      dots[clickedDotNum].classList.add('active');

      activeDotNum = clickedDotNum;
    }
    
  });
});

// customer review slider end 





