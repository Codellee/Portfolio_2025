/** let slideIndex = 0;
showSlides();

function showSlides (){
let i;
    let slides = document.getElementsByClassName("mySlides");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
} */


function myFunction(imgs) {
    var expandImg = document.getElementsByClassName("expandedImg");
    expandImg.scr = imgs.scr;
    expandImg.parentElement.style.display = "block";
}

const carousel = document.getElementsById("slider");
let scrollSpeed = 1;

function autoScroll(){
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
    } else {
        carousel.scrollLeft += scrollSpeed;
    }
    requestAnimationFrame(autoScroll);
}
autoScroll();
