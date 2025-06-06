import "./styles.css";

document.getElementById("searchBtn").addEventListener("click", async (event) => {
  var valid = await onSearch(); 
  if(!valid) {
    event.preventDefault(); 
  }
});

document.getElementById('addressInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();  // Prevent the default action (form submission)
    // Trigger your search button click or any other action you want
    document.getElementById('searchBtn').click();
  }
});

async function onSearch() {
  console.log("button got pressed")
  // getting the address 
  const address = document.getElementById("addressInput").value.trim();
  
  const addressPattern = /.+, .+, .+/;   

    // error handling for empty box 
    if (!address || !addressPattern.test(address)) {
      document.getElementById("results").classList.add("hidden");   // hide any results from before
      alert('Please enter a full address, including street, city, and state.');
      return false; 
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

    // title 
    document.getElementById("locationName").textContent =
      data.name || "Unknown Election";
    
    // date 
    document.getElementById("electionDate").textContent = data.date || "N/A";

    // polling hours 
    const pollingHours = data.pollingHours;
    const timeMatch = pollingHours.match(/\d{1,2} (am|pm)/g);
    const timeRange = timeMatch ? timeMatch.join(" - ") : "N/A";
    document.getElementById("pollingHours").textContent = timeRange;

    // edit election info field 
    const electionInfo = document.getElementById("electionInfo");
    electionInfo.href = data.electionInfo || "#";
    electionInfo.textContent = "More Election Info";

    // regestration Link 
    const registerLink = document.getElementById("registerLink");
    const registerAnchor = document.getElementById("registerAnchor")

    if(data.regLink) {
      registerLink.href = data.regLink;
      registerLink.textContent = "Register to Vote";
      registerLink.style.display = "inline";
      registerLink.style.display = "inline";  
      registerAnchor.style.display = "list-item"; 
    } else {
      registerLink.style.display = "none"; 
      registerAnchor.style.display = "none"; 
    }

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

  return true; 
}