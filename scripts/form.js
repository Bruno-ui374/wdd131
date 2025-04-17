const products = [
    { id: "product1", name: "Smart Thermostat" },
    { id: "product2", name: "Wireless Doorbell" },
    { id: "product3", name: "LED Light Strip" },
    { id: "product4", name: "Bluetooth Speaker" }
];

window.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

window.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCount").textContent = count;
});

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;