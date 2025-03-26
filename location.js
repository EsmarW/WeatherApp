// Fetch weather based on user location
function getLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&APPID=${api.key}`)
          .then(response => response.json())
          .then(displayResults)
          .catch(error => console.error("Error fetching location weather:", error));
      },
      () => {
        console.warn("Geolocation not allowed. Fetching default city...");
        getResults("New York"); // Default city if geolocation is denied
      }
    );
  } else {
    console.warn("Geolocation not supported. Fetching default city...");
    getResults("New York"); // Default city if geolocation is unavailable
  }
}

// Fetch weather when the page loads
getLocationWeather();
