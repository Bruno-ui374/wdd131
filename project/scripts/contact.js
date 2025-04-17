
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

const header = document.querySelector('header');
window.addEventListener('scroll', () =>
    window.scrollY > 100 ? header.classList.add('scrolled') : header.classList.remove('scrolled')
);

const fadeElements = document.querySelectorAll('.fade-in');
const fadeIn = () => fadeElements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('visible');
});
window.addEventListener('scroll', fadeIn);
window.addEventListener('load', fadeIn);


document.addEventListener('DOMContentLoaded', () => {
  
    const bookBtn = document.getElementById('book-btn');
    bookBtn.addEventListener('click', handleBooking);

    function handleBooking(e) {
        e.preventDefault();
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        const timestamp = new Date().toLocaleString();
        appointments.push({ timestamp });
        localStorage.setItem('appointments', JSON.stringify(appointments));
        alert(`Appointment booked at ${timestamp}`);
    }

    
    const galleryImgs = document.querySelectorAll('.gallery-grid img');
    const modal = createModal();
    galleryImgs.forEach(img => img.addEventListener('click', () => openModal(img.src)));

    function createModal() {
        const m = document.createElement('div');
        m.className = 'modal';
        m.innerHTML = `
      <span class="modal-close">&times;</span>
      <img class="modal-img" src="" alt="Zoomed Image">
    `;
        document.body.appendChild(m);
        m.querySelector('.modal-close').addEventListener('click', () => m.classList.remove('open'));
        m.addEventListener('click', e => e.target === m && m.classList.remove('open'));
        return m;
    }

    function openModal(src) {
        const img = modal.querySelector('.modal-img');
        img.src = src;
        modal.classList.add('open');
    }

    
    const testimonials = [
        { text: 'Great service and impeccable quality.', author: 'Ian Galiwango' },
        { text: 'My suit fits like a dream—highly recommended!', author: 'Bruno Martin' },
        { text: 'Professional from start to finish.', author: 'Kizito Herman' }
    ];
    let idx = 0;
    const container = document.querySelector('.testimonial-container');
    const prev = document.getElementById('prev-btn');
    const next = document.getElementById('next-btn');

    function showTestimonial(i) {
        idx = i < 0 ? testimonials.length - 1 : i >= testimonials.length ? 0 : i;
        const { text, author } = testimonials[idx];
        container.innerHTML = `
      <p class="testimonial-text">"${text}"</p>
      <p class="testimonial-author">- ${author}</p>
    `;
    }
    prev.addEventListener('click', () => showTestimonial(idx - 1));
    next.addEventListener('click', () => showTestimonial(idx + 1));
    showTestimonial(0);

    
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleContact);

    function handleContact(e) {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const message = e.target.message.value.trim();
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }
        const messages = JSON.parse(localStorage.getItem('contacts')) || [];
        messages.push({ name, email, message, time: new Date().toLocaleString() });
        localStorage.setItem('contacts', JSON.stringify(messages));
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    }
});
