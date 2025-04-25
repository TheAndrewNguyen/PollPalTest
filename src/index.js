import "./styles.css";

document.getElementById("searchBtn").addEventListener("click", function () {
  const zip = document.getElementById("zipInput").value.trim();
  if (zip !== "") {
    // Placeholder logic - replace with real API call
    document.getElementById("locationName").textContent = "Seattle";
    document.getElementById("electionDate").textContent = "November 5, 2025";
    document.getElementById("registrationDeadline").textContent =
      "October 15, 2025";
    document.getElementById("registerLink").href = "https://vote.gov";

    document.getElementById("results").classList.remove("hidden");
    document.getElementById("zipInput").value = "";
  }
});
