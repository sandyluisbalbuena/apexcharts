import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";

const CandlestickChart = ({ data }) => {
	const [chartOptions] = useState({
		chart: {
			type: 'candlestick',
			height: 300,
			id: 'candles',
			toolbar: {
				autoSelected: 'pan',
				show: false
			},
			zoom: {
				enabled: false
			},
		},
		plotOptions: {
			candlestick: {
				colors: {
					upward: '#3C90EB',
					downward: '#DF7D46'
				}
			}
		},
		xaxis: {
			type: "datetime", // Specify that x-axis should be a category axis
		},
		plotOptions: {
			candlestick: {
				colors: {
				upward: "#00B746", // Color for bullish (upward) candles
				downward: "#FF4560", // Color for bearish (downward) candles
				},
			},
		},
		tooltip: {
			enabled: true,
		},
		grid: {
			show: false,
		},
	});

	const [chartSeries, setChartSeries] = useState([
		{
			name: "candlestick",
			data: data, // Replace 'data' with your OHLC data array
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
				type="candlestick" // Set the chart type to candlestick
				width="100%"
				height="400px" // Adjust the height as needed
			/>
		</div>
	);
};

export default CandlestickChart;
