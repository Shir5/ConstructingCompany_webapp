let slideIndex = 1;
slider(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slider(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    slider(slideIndex = n);
}

function slider(n) {
    let i;
    let slides = document.getElementsByClassName("slider-container");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("about-section");
    const textElement = document.getElementById("about-us-paragraph");
    const lines = textElement.innerHTML.split("\n");
    lines.forEach((line, index) => {
        const span = document.createElement("span");
        span.innerHTML = line;
        span.style.animationDelay = `${index * 1.2}s`;
        textElement.appendChild(span);
    });
});
