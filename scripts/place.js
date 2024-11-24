// Placeholder for future interactive elements
document.addEventListener("DOMContentLoaded", function () {
  console.log("Page loaded and ready!");
});
// Function to update the current year and last modified date in the footer
document.addEventListener("DOMContentLoaded", function () {
  // Get the current year and last modified date
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;

  // Display the current year in the footer
  document.getElementById("currentYear").textContent = currentYear;

  // Display the last modified date in the footer
  document.getElementById("lastModified").textContent = lastModified;

  // Static values for temperature and wind speed (You can replace these with dynamic values later)
  const temperatureC = 5; // Temperature in °C
  const windSpeedKmh = 10; // Wind speed in km/h

  // Call the function to calculate windchill and display it
  const windchillFactor = calculateWindChill(temperatureC, windSpeedKmh);
  document.getElementById("windchill").textContent = windchillFactor;
});

// Function to calculate windchill based on temperature and wind speed
function calculateWindChill(temperature, windSpeed) {
  // Check if the conditions are suitable for windchill calculation
  if (temperature <= 10 && windSpeed > 4.8) {
    // Wind chill formula (Celsius and km/h)
    return (
      Math.round(
        13.12 +
          0.6215 * temperature -
          11.37 * Math.pow(windSpeed, 0.16) +
          0.3965 * temperature * Math.pow(windSpeed, 0.16)
      ) + "°C"
    );
  } else {
    // If conditions are not met, return "N/A"
    return "N/A";
  }
}
