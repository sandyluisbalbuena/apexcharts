import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { useDataStore } from '../Context/DataStoreContext';
import SearchBox from '../Components/SearchBox';

export default function Layout() {
const { theme } = useDataStore();

	return (
		<main data-theme={ theme } className='flex flex-col min-h-screen overflow-x-hidden'>
			<Navbar />
			<div className='grid grid-cols-5 flex-1'>
				<section className='bg-base-100 z-30 fixed top-0 left-0 h-full'>
					<div className=' mt-16'>
						<div className='mx-6 my-24'>
							<SearchBox />
						</div>
					</div>
				</section>
				<section className='col-start-2 col-span-4 bg-neutral'>
					<div className='flex flex-col min-h-screen mt-16'>
						<div className='my-5 mx-14 flex-1'>
							<Outlet />
						</div>
						<Footer />
					</div>
				</section>
			</div>
		</main>

	)
}
