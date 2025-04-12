
document.getElementById('currentYear').textContent = new Date().getFullYear();


document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
  
    const navLinks = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");

    
        if (navLinks.classList.contains("active")) {
            hamburger.innerHTML = "✖"; 
        } else {
            hamburger.innerHTML = "&#9776;";
        }
    });
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, US",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg 2193, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
    {
        templeName: "Ephraim Utah",
        location: "Ephraim, Utah",
        dedicated: "2022, August, 27",
        area: 39000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/ephraim-utah-temple/ephraim-utah-temple-25337-main.jpg"
    },
    {
        templeName: "Bangkok Thailand",
        location: "Bangkok 10400, Thailand",
        dedicated: "2023, October, 23",
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    }
];

function displayTemples(filteredTemples) {
    const container = document.getElementById("gallery");
    container.innerHTML = ""; // Clear existing content

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq. ft.</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(templeCard);
    });
}


displayTemples(temples);


document.getElementById("all").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
});

document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    const oldTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900);
    displayTemples(oldTemples);
});

document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    const newTemples = temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) > 2000);
    displayTemples(newTemples);
});

document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    const largeTemples = temples.filter(temple => temple.area > 90000);
    displayTemples(largeTemples);
});

document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    const smallTemples = temples.filter(temple => temple.area < 10000);
    displayTemples(smallTemples);
});
