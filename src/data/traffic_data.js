export let trafficData = [];

fetch('https://g8swxar75d.execute-api.us-east-1.amazonaws.com/traffic_route')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    // Process the data as needed
    trafficData = data; // Assign the fetched array to trafficData
    console.log(trafficData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
