import "./styles.css";

document.getElementById("searchBtn").addEventListener("click", async () => {
  const address = document.getElementById("addressInput").value.trim();

  if (!address) {
    alert("Please enter a full address.");
    return;
  }

  const encodedAddress = encodeURIComponent(address);

  try {
    document.getElementById("results").classList.add("hidden");
    const response = await fetch(
      `http://44.220.155.22:3000/api/getBasicInfo/:${encodedAddress}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Data:", data);

    // Fill in the results
    document.getElementById("locationName").textContent =
      data.name || "Unknown Election";
    document.getElementById("electionDate").textContent = data.date || "N/A";
    document.getElementById("registrationDeadline").textContent =
      data.regDead || "N/A";

    const registerLink = document.getElementById("registerLink");
    registerLink.href = data.regLink || "#";
    registerLink.textContent = "Register to Vote";

    // Unhide the results
    document.getElementById("results").classList.remove("hidden");
  } catch (error) {
    console.error("Error fetching election info:", error);

    // Show a friendly error message instead of the normal results
    document.getElementById("results").innerHTML = `
      <h2>Wonderful! There are no elections within the next 4 weeks </h2>
      <p>You are all caught up on Local Elections. Come back in a few weeks!</p>
  `;

    document.getElementById("results").classList.remove("hidden");
  }
});
