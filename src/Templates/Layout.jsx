import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Accordion from '../Components/Accordion';
import { useDataStore } from '../Context/DataStoreContext';

export default function Layout() {
const { theme } = useDataStore();

	return (
		<main data-theme={ theme } className='flex flex-col min-h-screen overflow-x-hidden dark'>
			<Navbar />
			<div className='grid grid-cols-5 flex-1'>
				<section className='col-span-1 bg-base-100 z-20'>
					<div className=' mt-16'>
						<div className='mx-2 my-20'>
							<Accordion />
						</div>
					</div>
				</section>
				<section className='col-span-4 bg-neutral'>
					<div className='flex flex-col min-h-screen mt-16'>
						<div className='m-10 flex-1'>
							<Outlet />
						</div>
						<Footer />
					</div>
				</section>
			</div>
		</main>

	)
}
