let trafficData = [];
let mockTransactions = [];
let category_counts = {
  1: 0,
  2: 0,
  3: 0,
  4: 0
}

fetch('https://g8swxar75d.execute-api.us-east-1.amazonaws.com/traffic_route')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    
    
    // Process the data as needed
    // const reversedData = [...data].reverse();
    // reversedData.shift();
    data.pop();
    trafficData=data;
    
    mockTransactions = data.slice(0, 50);
    for (const item of data) {
      const category = item.open;
      category_counts[category] += 1;
    }
    // add an object with negative values for the line chart to mockTransactions
    
  })
  .catch(error => {
    console.error('Error:', error);
  });

// export default trafficData;
export { trafficData , mockTransactions, category_counts};
