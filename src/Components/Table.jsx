import React from 'react'
import Avatar from './Avatar';
import SparklineChart from './Chart';




export default function Table({ tableData }) {

	const changeColor = (value) => {
		let className; // Replace with the Daisy UI class you want to target
		const inputValue = parseFloat(value);

		if (inputValue > 0) {
			className = 'text-success';
		} else if (inputValue < 0) {
			className = 'text-error';
		} else {
			className = 'text-white';
		}

		return className;
	} 

	const strokeColor = (value) => {
		let className; // Replace with the Daisy UI class you want to target
		const inputValue = parseFloat(value);

		if (inputValue > 0) {
			className = '#00cc00';
		} else if (inputValue < 0) {
			className = '#ff0000';
		} else {
			className = '#ffffff';
		}

		return className;
	} 

	const addCommasToPrice = (value) => {
		const formattedValue = parseFloat(value).toFixed(2);
		const parts = formattedValue.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}

	console.log


	return (
		<div className="overflow-x-auto text-gray-400">
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Coin</th>
						<th>Price</th>
						<th>1h</th>
						<th>24h</th>
						<th>7d</th>
						<th>24h Volume</th>
						<th>Mkt cap</th>
						<th>Last 7 Days</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((data)=>(
							<tr key={ data.id }>
								<th>{ data.market_cap_rank }</th>
								<td><div className='flex items-center'><Avatar imgSrc={ data.image } />&nbsp;&nbsp;{ data.name } <span className='uppercase text-gray-700'>&nbsp;&nbsp;{data.symbol}</span></div></td>
								<td>$&nbsp;{ addCommasToPrice(data.current_price) }</td>
								<td className={changeColor(data.price_change_percentage_1h_in_currency)}>{ data.price_change_percentage_1h_in_currency.toFixed(2) }</td>
								<td className={changeColor(data.price_change_percentage_24h_in_currency)}>{ data.price_change_percentage_24h_in_currency.toFixed(2) }</td>
								<td className={changeColor(data.price_change_percentage_7d_in_currency)}>{ data.price_change_percentage_7d_in_currency.toFixed(2) }</td>
								<td>$&nbsp;{ addCommasToPrice(data.total_volume) }</td>
								<td>$&nbsp;{ addCommasToPrice(data.market_cap) }</td>
								<td><SparklineChart strokeColor={ strokeColor(data.price_change_percentage_7d_in_currency) } data={ data.sparkline_in_7d.price } /></td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	)
}
