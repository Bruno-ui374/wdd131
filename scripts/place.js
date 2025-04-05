document.addEventListener("DOMContentLoaded", function () {
    // Footer Year and Last Modified
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;
    // Function to calculate wind chill
    function calculateWindChill(temp, windSpeed) {
        return (temp <= 10 && windSpeed > 4.8) ?
            (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + "°C"
            : "N/A";
    }

    // Function to determine weather conditions
    function determineConditions(windChill) {
        if (windChill === "N/A") return "Mild";
        if (windChill < 0) return "Snowy";
        if (windChill >= 0 && windChill < 5) return "Cold and Cloudy";
        if (windChill >= 5 && windChill <= 10) return "Partly Cloudy";
        return "Sunny";
    }

    // Get values from HTML
    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

    // Calculate wind chill
    let windChill = calculateWindChill(temp, windSpeed);
    document.getElementById("wind-chill").textContent = windChill;

    // Set weather conditions
    document.getElementById("conditions").textContent = determineConditions(temp, windChill);
});