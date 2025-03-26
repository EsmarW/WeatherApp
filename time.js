function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  
  // Determine A.M. or P.M.
  const amPm = hours >= 12 ? "P.M." : "A.M.";

  // Convert to 12-hour format
  hours = hours % 12 || 12; // Convert 0 (midnight) to 12

  // Format time to always have two digits
  const formattedHours = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
  document.querySelector(".clock").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
