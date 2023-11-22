document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("about-section");
    const textElement = document.getElementById("about-us-paragraph");
    const lines = textElement.innerHTML.split("<br>");
    lines.forEach((line, index) => {
    const span = document.createElement("span");
    span.innerHTML = line;
    span.style.animationDelay = `${index * 3.5}s`;
    textElement.appendChild(span);
    });
});