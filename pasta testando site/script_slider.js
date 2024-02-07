document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll("#slider img");
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Add event listeners for next and previous buttons
    const btnNext = document.createElement("button");
    btnNext.innerHTML = "Próxima Imagem";
    btnNext.addEventListener("click", nextSlide);

    const btnPrev = document.createElement("button");
    btnPrev.innerHTML = "Imagem Anterior";
    btnPrev.addEventListener("click", prevSlide);

    // Append buttons to the slider section
    const sliderSection = document.getElementById("slider");
    sliderSection.appendChild(btnPrev);
    sliderSection.appendChild(btnNext);
});
