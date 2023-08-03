// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
  });
  
  // Initialize the dashboard at start up 
  function startdashboard() {
  
      // Use D3 to select the dropdown menu
      let dropdown = d3.select("#selDataset");
  
      // Use D3 to get sample names and populate the drop-down selector
      d3.json(url).then((data) => {
          
          // Set a variable for the sample names
          let var_names = data.names;
  
          // Add  samples to dropdown menu
          var_names.forEach((id) => {
  
              // Log the value of id for each iteration of the loop
              console.log(id);
  
              dropdown.append("option")
              .text(id)
              .property("value",id);
          });
  
          // Set the first sample from the list
          let first_sample = var_names[0];
  
          // Log the value of first_sample
          console.log(first_sample);
  
          // Build the initial plots
          gaugechart(first_sample);
      });
  };
  
  // Function that builds the gauge chart
  function gaugechart(sample) {
  
      // Use D3 to retrieve all of the data
      d3.json(url).then((data) => {
  
          // Retrieve all metadata
          let metadata = data.metadata;
  
          // Filter based on the value of the sample
          let value = metadata.filter(result => result.id == sample);
  
          // Log the array of metadata objects after the have been filtered
          console.log(value)
  
          // Get the first index from the array
          let valueData = value[0];
  
          // Use Object.entries to get the key/value pairs and put into the demographics box on the page
          let frequency = Object.values(valueData)[6];
          
          // Set up the trace for the gauge chart
          let trace2 = {
              value: frequency,
              domain: {x: [0,1], y: [0,1]},
              title: {
                  text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week",
                  font: {color: "black", size: 18}
              },
              type: "indicator",
              mode: "gauge+number",
              gauge: {
                  axis: {range: [0,10], tickmode: "linear", tick0: 2, dtick: 2},
                  bar: {color: "rgba(255, 0, 0, 0.8)"},
                  steps: [
                      {range: [0, 1], color: "rgba(0, 176, 255, 0.1)"},
                      {range: [1, 2], color: "rgba(0, 144, 255, 0.2"},
                      {range: [2, 3], color: "rgba(0, 112, 255, 0.3)"},
                      {range: [3, 4], color:  "rgba(0, 80, 255, 0.4)"},
                      {range: [4, 5], color:  "rgba(0, 48, 255, 0.5)"},
                      {range: [5, 6], color: "rgba(0, 32, 192, 0.6)"},
                      {range: [6, 7], color: "rgba(0, 24, 144, 0.7)"},
                      {range: [7, 8], color:  "rgba(0, 16, 96, 0.8)"},
                      {range: [8, 9], color: "rgba(0, 8, 48, 0.9)"},
                      {range: [9, 10], color: "rgba(0, 0, 0, 1)"},
                  ]
              } 
          };
  
          // Set up the Layout
          let layout = {
              width: 400, 
              height: 400,
              margin: {t: 0, b:0}
          };
  
          // Call Plotly to plot the gauge chart
          Plotly.newPlot("gauge", [trace2], layout)
      });
  };
  
  // Call the initialize function
  startdashboard();