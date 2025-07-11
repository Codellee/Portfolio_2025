const carousel = document.getElementsById("slider");
let scrollSpeed = 1;

function autoScroll() {
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
    } else {
        carousel.scrollLeft += scrollSpeed;
    }
    requestAnimationFrame(autoScroll);
}
autoScroll();

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function modalClose() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlider(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myModalSlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}