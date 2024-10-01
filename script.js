// script.js
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === currentIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 1000); // Change slide every 3 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Initialize the slider and start the slideshow
showSlide(currentIndex);
startSlideShow();

