
export function updatePie(ticker,quantity,price) {
	let value = [];
	for (let i = 0; i < ticker.length; i++) {
		let val = quantity[i] * price[i];
		value.push(val);
	}
	// Data for the Pie chart
	var data = [{
		values: value,   // Values for the sections
		labels: ticker,   // Labels for the sections
		type: 'pie'  // Chart type (pie chart)
  	}];
  
  	// Layout configuration (optional)
  	const layout = {
        showlegend: true,  // Show the legend
        hoverlabel: {
            bgcolor: "white",  // Background color for hover label
            font: {
                size: 16,
                color: '#333'
            }
        },
        margin: { t: 50, b: 50, l: 50, r: 50 },  // Adjust margins
        height: 800,  // Set chart height
        width: 800,  // Set chart width
        plot_bgcolor: '#f7f7f7',  // Set background color
        paper_bgcolor: '#f7f7f7',  // Set paper color       
    };
  
  	// Render the pie chart inside the div with id 'pie-chart'
  	Plotly.newPlot('pie-chart', data, layout);
}