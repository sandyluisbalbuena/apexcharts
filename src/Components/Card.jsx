import React from 'react'
import SparklineChart from './Chart';
import Avatar from './Avatar';
import Badge from './Badge';

export default function Card({ title, coinData, children }) {

		
	console.log(coinData);

	const strokeColor = (value) => {
		let className; 
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

	return (
		<div className="card w-full glass border-none">
			{/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
			<div className="card-body">
				{coinData?(
					<div className='flex justify-between'>
						<span className='flex'><Avatar imgSrc={ coinData.image.large } imgWidth={ 'w-10' } />&nbsp;<h1 className="card-title uppercase">{ coinData.name }&nbsp;<span className='text-gray-700 font-thin'>{ coinData.symbol }</span></h1></span>
						<Badge><span className='font-semibold text-base-content'>Rank #{ coinData.market_cap_rank }</span></Badge>
					</div>
					
				):null}
				<h2 className="uppercase">&nbsp;{ title }</h2>
				<div className='mx-5'>
					{ children }
					{coinData?(
						<>
							Info
						
						</>
					):null}
				</div>
			</div>
		</div>
	)
}
