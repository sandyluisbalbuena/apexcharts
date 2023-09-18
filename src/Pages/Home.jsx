import React from 'react';
import Radial from '../Components/Radial';
import Table from '../Components/Table';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Card from '../Components/Card';

export default function Home() {

	const fetchingCoinsMarkets = async () => {
		// const { data:fetchedCoinsMarkets } = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`);
		const { data:fetchedCoinsMarkets } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`);
		// const fetchedCoinsMarkets  = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en`);
	console.log(fetchedCoinsMarkets);
		
		return fetchedCoinsMarkets;
	}

	const { data:tableData, isLoading } = useQuery({ queryKey: ['fetchingCoinsMarkets'], queryFn:fetchingCoinsMarkets, refetchInterval:45000});

	// console.log(tableData);

	return (
		<section className='w-full h-full'>
			<div className='grid grid-cols-1'>
				<Radial value={10} />
				{!isLoading?(
					<Card title={'Cryptocurrency Prices by Market Cap'}>
						<Table tableData={ tableData }/>
					</Card>
				):null}
			</div>
		</section>
	);
}
