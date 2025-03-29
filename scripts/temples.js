document.addEventListener('DOMContentLoaded', () => {
   
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const lastModifiedParagraph = document.querySelector('p:nth-of-type(2)');
    const footerParagraph = document.querySelector('footer p:first-of-type');

    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');

       
            if (navMenu.classList.contains('active')) {
                hamburger.innerHTML = '&times;'; 
            } else {
                hamburger.innerHTML = '&#9776;'; 
            }
        });
    }

   
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    if (footerParagraph) {
        const currentYear = new Date().getFullYear();
        footerParagraph.textContent = `© ${currentYear} Ssematimba Bruno Martin`;
    }
});
