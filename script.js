function calculateOutTime() {
  const input = document.getElementById('inTime').value;
  const outputDiv = document.getElementById('outputAlert');
  outputDiv.innerHTML = ""; // Clear previous alert

  if (!input) {
    showAlert("Please enter a valid in-time.", "danger");
    return;
  }

  const [hourStr, minStr] = input.split(":");
  const inDate = new Date();
  inDate.setHours(parseInt(hourStr), parseInt(minStr), 0);

  const earliest = new Date();
  earliest.setHours(8, 0, 0);

  const latest = new Date();
  latest.setHours(18, 30, 0);

  if (inDate < earliest || inDate > latest) {
    showAlert("In-time must be between 8:00 AM and 6:30 PM.", "warning");
    return;
  }

  inDate.setMinutes(inDate.getMinutes() + 510); // Add 8 hours and 30 minutes

  if (inDate > latest) {
    showAlert("Calculated out-time exceeds office hours (after 6:30 PM). Please enter an earlier in-time.", "danger");
    return;
  }

  let hours = inDate.getHours();
  let minutes = inDate.getMinutes().toString().padStart(2, '0');
  let suffix = "AM";

  if (hours >= 12) {
    suffix = "PM";
    if (hours > 12) hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }

  const formattedTime = `${hours}:${minutes} ${suffix}`;
  showAlert(`Your calculated out-time is <strong>${formattedTime}</strong>.`, "success");
}

function showAlert(message, type) {
  const outputDiv = document.getElementById('outputAlert');
  outputDiv.innerHTML = `
    <div class="alert alert-${type}" role="alert">
      ${message}
    </div>
  `;
}
