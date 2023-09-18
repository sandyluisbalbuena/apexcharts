import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Accordion from '../Components/Accordion';
import { useDataStore } from '../Context/DataStoreContext';

export default function Layout() {
const { theme } = useDataStore();

	return (
		<main data-theme={ theme } className='flex flex-col min-h-screen overflow-x-hidden'>
			<Navbar />
			<div className='grid grid-cols-5 flex-1'>
				<section className='bg-base-100 z-20 fixed top-0 left-0 h-full'>
					<div className=' mt-16'>
						<div className='mx-2 my-20'>
							<Accordion />
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
