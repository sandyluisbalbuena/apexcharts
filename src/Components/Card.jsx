import React from 'react'
import Avatar from './Avatar';
import Badge from './Badge';
import { BsFillStarFill } from 'react-icons/bs'
import Card2 from './Card2';

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

	const addCommasToPrice = (value) => {
		const formattedValue = parseFloat(value).toFixed(2);
		const parts = formattedValue.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}

	return (
		<div className="card w-full glass border-none">
			{/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
			<div className="card-body">
				{coinData?(
					<div className='flex justify-between'>
						<span className='flex'><Avatar imgSrc={ coinData.image.large } imgWidth={ 'w-10' } />&nbsp;<h1 className="card-title uppercase text-3xl">{ coinData.name }&nbsp;<span className='text-gray-700 font-thin'>{ coinData.symbol }</span></h1></span>
						<Badge><span className='font-semibold text-base-content text-right'>Rank #{ coinData.market_cap_rank }</span></Badge>
					</div>
				):null}
				<h2 className="card-title uppercase">&nbsp;{ title }</h2>
				<div className='mx-5'>
					{ children }
					{coinData?(
						<>
							<div className="divider"></div>
							<Badge><span className='font-semibold text-base-content text-right flex items-center'><BsFillStarFill color='yellow'/>&nbsp;On { coinData.watchlist_portfolio_users } watchlists</span></Badge>
							
							<div className='my-5'>
								<Card2 />
							</div>

							<div className='my-5'>
								<div className='grid grid-cols-2 gap-16 mt-2'>
									<div>
										<h2 className="text-lg font-bold ">What is { coinData.name }?</h2>
										<div className='mt-5 indent-10' dangerouslySetInnerHTML={{ __html: coinData.description.en }} />
									</div>

									<div>
										<h2 className="text-lg font-bold "> <span className='uppercase'>{ coinData.symbol }</span> Price Statistics</h2>
										<div className='mt-5 text-xs'>
											<div className='flex justify-between'>
												<span className='font-thin'>{ coinData.name } Price</span><span className='font-semibold'>$ { addCommasToPrice(coinData.market_data.current_price.usd) }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>24h Low / 24h High</span><span className='font-semibold'>$ { addCommasToPrice(coinData.market_data.low_24h.usd) } / $ { addCommasToPrice(coinData.market_data.high_24h.usd) }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>7d Low / 7d High</span><span className='font-semibold'>$ { addCommasToPrice(Math.min(...coinData.market_data.sparkline_7d.price)) } / $ { addCommasToPrice(Math.max(...coinData.market_data.sparkline_7d.price)) }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>Trading Volume</span><span className='font-semibold'>$ { addCommasToPrice(coinData.market_data.total_volume.usd) }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>Market Cap Rank</span><span className='font-semibold'>#{ coinData.market_data.market_cap_rank }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>Market Cap</span><span className='font-semibold'>$ { addCommasToPrice(coinData.market_data.market_cap.usd) }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>Market Cap Dominance</span><span className='font-semibold'>$ { coinData.market_data.current_price.usd }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>Volume / Market Cap</span><span className='font-semibold'> { (coinData.market_data.total_volume.usd / coinData.market_data.market_cap.usd).toFixed(4) }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>All-Time High</span><span className='font-semibold'>$ { coinData.market_data.current_price.usd }</span>
											</div>
											<div className='divider'></div>
											<div className='flex justify-between'>
												<span className='font-thin'>All-Time Low</span><span className='font-semibold'>$ { coinData.market_data.current_price.usd }</span>
											</div>
											<div className='divider'></div>
										</div>
									</div>
								</div>
							</div>
						</>
					):null}
				</div>
			</div>
		</div>
	)
}
