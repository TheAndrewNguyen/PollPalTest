import "./styles.css";

document.getElementById("searchBtn").addEventListener("click", async () => {
  console.log("button got pressed")
  // getting the address 
  const address = document.getElementById("addressInput").value.trim();

  // error handling for empty box 
  if (!address) {
    alert("Please enter a full address.");
    return;
  }

  // encode the address 
  const encodedAddress = encodeURIComponent(address);

  // if succesfful
  try {

    document.getElementById("results").classList.add("hidden");
    const response = await fetch(
      `http://44.220.155.22:3000/api/getBasicInfo/:${encodedAddress}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    // getting the data from api call 
    const data = await response.json();
    console.log("API Data:", data);

    // Fill in the results
    document.getElementById("locationName").textContent =
      data.name || "Unknown Election";
    document.getElementById("electionDate").textContent = data.date || "N/A";

    console.log("location name edited"); 

    // edit election info field 
    const electionInfo = document.getElementById("electionInfo");
    electionInfo.href = data.electionInfo || "#";
    electionInfo.textContent = "Election Info";

    // regestration Link 
    const registerLink = document.getElementById("registerLink");
    registerLink.href = data.regLink || "#";
    registerLink.textContent = "Register to Vote";

    // hiding and unhiding f
    document.getElementById("resultFail").classList.add("hidden");        // hide the reusltsFail
    document.getElementById("results").classList.remove("hidden");       // Unhide the results
    document.getElementById("resultSuccess").classList.remove("hidden"); // uhide success message


  } catch (error) {
      console.log(error); 
      document.getElementById("results").classList.remove("hidden");    // unhide the whole results div 
      document.getElementById("resultSuccess").classList.add("hidden"); // hide result success if it was there before 
      document.getElementById("resultFail").classList.remove("hidden"); // unhide error message 
  }
});
