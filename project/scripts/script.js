
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () =>
{
    navLinks.classList.toggle('active');
});


const header = document.querySelector('header');

window.addEventListener('scroll', () =>
{
    if (window.scrollY > 100)
    {
        header.classList.add('scrolled');
    }
    else
    {
        header.classList.remove('scrolled');
    }
});


const fadeElements = document.querySelectorAll('.fade-in');

const fadeIn = () =>
{
    fadeElements.forEach(element =>
    {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100)
        {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);


const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn =>
{
    btn.addEventListener('click', () =>
    {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});