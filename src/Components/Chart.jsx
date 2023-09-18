import React, { useEffect, useRef, useState } from "react";
import ApexCharts from "react-apexcharts";

const SparklineChart = ({ data, strokeColor, width }) => {
const [chartOptions] = useState({
	chart: {
		id: "sparkline",
		animations: {
			enabled: false,
		},
		toolbar: {
			show: false, // Hide the toolbar with buttons
		},
		height: 160,
		sparkline: {
			enabled: true
		},
	},
	// xaxis: {
	// 	labels: {
	// 		show: false, // Hide x-axis labels
	// 	},
	// },
	yaxis: {
		labels: {
		  show: false, // Hide y-axis labels
		},
	},
	stroke: {
		curve: "straight",
		// curve: "smooth",
		width: 1,
		colors: [strokeColor],
	},
	markers: {
		size: 0,
	},
	tooltip: {
		enabled: false,
	},
	grid: {
		show: false,
	},
});

const [chartSeries, setChartSeries] = useState([
	{
		name: "sparkline",
		data: data,
	},
]);

useEffect(() => {
	setChartSeries([{ ...chartSeries[0], data: data }]);
}, [data]);

return (
	<div>
		<ApexCharts
			options={chartOptions}
			series={chartSeries}
			type="line"
			width={width?width:'80%'}
			height="100px"
		/>
	</div>
);
};

export default SparklineChart;
