let slideIndex = 1;
slider(slideIndex);

function plusSlides(n) {
    slider(slideIndex += n);
}

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
    const lines = textElement.innerHTML.split(`\n`);
    lines.forEach((line, index) => {
        const span = document.createElement("span");
        span.innerHTML = line;
        span.style.animationDelay = `${index * 1.2}s`;
        textElement.appendChild(span);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const scrollSection = document.querySelectorAll('.hidden');
    scrollSection.forEach((el) => observer.observe(el));

});

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector("#closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
} else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    closeIcon.style.position = "fixed";
    menuIcon.style.display = "none";
}
}

hamburger.addEventListener("click", toggleMenu);