import "./styles.css";
document.getElementById('searchBtn').addEventListener('click', async () => {
  const address = document.getElementById('addressInput').value.trim();

  if (!address) {
    alert('Please enter a full address.');
    return;
  }

  const encodedAddress = encodeURIComponent(address);

  try {
    const response = await fetch(`http://44.220.155.22:3000/api/getBasicInfo/:${encodedAddress}`);

    console.log('Response status:', response.status); // good for debugging

    if (response.status === 200) {
      const data = await response.json();
      console.log('API Data:', data);

      // Display election info
      document.getElementById('results').innerHTML = `
        <h2 id="locationName">${data.name || 'Unknown Election'}</h2>
        <p><strong>🗳️ Election Date:</strong> <span id="electionDate">${data.date || 'N/A'}</span></p>
        <p><strong>🛑 Registration Deadline:</strong> <span id="registrationDeadline">${data.regDead || 'N/A'}</span></p>
        <a href="${data.regLink || '#'}" id="registerLink" target="_blank">Register to Vote</a>
      `;
    } 
    else if (response.status === 400) {
      // Special case: No election locally in 4 weeks
      document.getElementById('results').innerHTML = `
        <h2>No Local Elections Coming Up 🕊️</h2>
        <p>There are no elections scheduled near you in the next 4 weeks.</p>
        <p>Check back later or verify your registration status!</p>
      `;
    } 
    else {
      // Error: 500 or anything else
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    // Unhide the results div in all cases
    document.getElementById('results').classList.remove('hidden');

  } catch (error) {
    console.error('Error fetching election info:', error);

    document.getElementById('results').innerHTML = `
      <h2>Oops! Something went wrong. 😔</h2>
      <p>We couldn't fetch your local election info. Please try again later.</p>
    `;

    document.getElementById('results').classList.remove('hidden');
  }
});