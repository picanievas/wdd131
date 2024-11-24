// Placeholder for future interactive elements
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded and ready!");
});
// Function to update the current year and last modified date in the footer
document.addEventListener("DOMContentLoaded", function () {
  // Check if the conditions are suitable for windchill calculation
  const temperature = 83;
  const windSpeed = 4;
  let windchillFactor = "N/A";

  if (temperature <= 50 && windSpeed > 3) {
    // Call the function to calculate windchill and display it
    windchillFactor = calculateWindChill(temperature, windSpeed);
  }

  document.getElementById("windchill").textContent = windchillFactor;
});

// Function to calculate windchill based on temperature and wind speed
function calculateWindChill(temperature, windSpeed) {
  // Wind chill formula (Farenheit and mph)
  return (
    Math.round(
      35.74 +
        0.6215 * temperature -
        37.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temperature * Math.pow(windSpeed, 0.16)
    ) + "°F"
  );
}
