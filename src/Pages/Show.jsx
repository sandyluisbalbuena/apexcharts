import React from 'react'
import Radial from '../Components/Radial'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import CandlestickChart from '../Components/Ohlc';

export default function Show() {
	const params = useParams();
	const fetchingCoinOhlc = async () => {
		// const {data:fetchedCoinOhlc} = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/ohlc?vs_currency=usd&days=max&precision=full`);
		const {data:fetchedCoinOhlc} = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/ohlc?vs_currency=usd&days=7&precision=full`);
		return fetchedCoinOhlc;
	}
	const { data:chartOhlcData, isLoading } = useQuery({ queryKey: ['fetchingCoinOhlc'], queryFn:fetchingCoinOhlc, refetchInterval:2100000});

	return (
		<section className=''>
			<Radial value={5} />
			{!isLoading?(
				<CandlestickChart data={ chartOhlcData } />
			):null}
		</section>
	)
}
