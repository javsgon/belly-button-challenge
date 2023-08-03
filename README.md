# Belly Button Challenge

## Background
In this assignment, an interactive dashboard was built to explore the Belly Button Biodiversity datasetLinks, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Instructions

1- Used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2- An horizontal bar chart was created with a dropdown menu to display the top 10 OTUs found in that individual.

  - Used sample_values as the values for the bar chart.

  - Used otu_ids as the labels for the bar chart.

  - Used otu_labels as the hovertext for the chart.

<img width="387" alt="Screenshot 2023-08-03 at 3 03 14 PM" src="https://github.com/javsgon/belly-button-challenge/assets/125521896/b90103f0-784f-4a2c-bb07-245d3fcbaba4">

3- Created a bubble chart that displays each sample.

  - Used otu_ids for the x values.

  - Used sample_values for the y values.

  - Used sample_values for the marker size.

  - Used otu_ids for the marker colors.

  - Used otu_labels for the text values.

<img width="1057" alt="Screenshot 2023-08-03 at 3 05 05 PM" src="https://github.com/javsgon/belly-button-challenge/assets/125521896/e349ff09-8ad2-4d4d-b10a-ea0c0532c5c3">


4- Displayed the sample metadata.

5- Displayed each key-value pair from the metadata JSON object.

<img width="178" alt="Screenshot 2023-08-03 at 3 06 19 PM" src="https://github.com/javsgon/belly-button-challenge/assets/125521896/e4f13a7e-dbae-40cc-9f30-12c900c4fd17">


6- Updated all the plots when a new sample is selected.

<img width="590" alt="Screenshot 2023-08-03 at 3 07 39 PM" src="https://github.com/javsgon/belly-button-challenge/assets/125521896/99d67b46-95fb-4b58-ba26-3cbd5fe32327">

7- Deployed the app to a free static page hosting service, such as GitHub Pages.

## Advanced Challenge Assignment

1- Adapted the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.

2- Updated the chart whenever a new sample is selected.

<img width="365" alt="Screenshot 2023-08-03 at 3 09 50 PM" src="https://github.com/javsgon/belly-button-challenge/assets/125521896/a7c22473-a8dc-4e92-bf5d-8f52f8f660c0">
