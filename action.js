function myFunction(imgs) {
    var modal = document.getElementById("myModal");
    modal.src = imgs.src;
    modal.parentElement.style.display = "block";

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
}

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
