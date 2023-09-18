import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export default function Card({ title, coinId, content, definition, children }) {

	if(coinId){
		const fetchingCoinInfo = async () => {
			const {data:fetchedCoinInfo} = await axios.get(`https://api.coingecko.com/api/v3/coins/${ coinId }?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true`);
			return fetchedCoinInfo;
		}
		
		const {data:coinData} = useQuery({queryKey:['fetchingCoinInfo'],queryFn:fetchingCoinInfo });

		console.log(coinData);
	}

	return (
		<div className="card w-full glass border-none">
			{/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!"/></figure> */}
			<div className="card-body">
				<h2 className="card-title uppercase">{ coinId }{ title }</h2>
				<div>{ content }</div>
				<p>{ definition }</p>
				{ children }
			</div>
		</div>
	)
}
