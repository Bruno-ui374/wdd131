
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let carouselDom = document.querySelector(".carousel");
let listItemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector(".carousel .thumbnail");
let runTimeout;
let autoInterval;
const timeRunning = 3000;
const timeAutoNext = 10300; 


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    
    const footer = document.querySelector('footer');
    const carouselHeight = carouselDom.offsetHeight;

    if (window.scrollY > carouselHeight * 0.7) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});


const fadeElements = document.querySelectorAll('.fade-in');

const fadeIn = () => {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);


nextDom.onclick = function () {
    showSlider('next');
    resetAutoSlide(); 
};

prevDom.onclick = function () {
    showSlider('prev');
    resetAutoSlide(); 
};


function startAutoSlide() {
    autoInterval = setInterval(() => {
        showSlider('next');
    }, timeAutoNext);
}


function resetAutoSlide() {
    clearInterval(autoInterval);
    startAutoSlide();
}

startAutoSlide();

function showSlider(type) {
    let itemSlider = document.querySelectorAll(".carousel .list .item");
    let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

    if (type === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
    } else {
        let lastIndex = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[lastIndex]);
        thumbnailDom.prepend(itemThumbnail[lastIndex]);
        carouselDom.classList.add("prev");
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() => {
        carouselDom.classList.remove("next", "prev");
    }, timeRunning);
}