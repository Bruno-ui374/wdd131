document.addEventListener('DOMContentLoaded', (event) => {
    // Update the last modified date in the second paragraph
    const lastModifiedParagraph = document.querySelector('p:nth-of-type(2)');
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Update the copyright year in the footer's first paragraph
    const footerParagraph = document.querySelector('footer p:first-of-type');
    if (footerParagraph) {
        const currentYear = new Date().getFullYear();
        footerParagraph.textContent = `© ${currentYear} Ssematimba Bruno Martin`;
    }
});