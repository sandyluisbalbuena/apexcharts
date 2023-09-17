import React from 'react'
import Radial from '../Components/Radial';

export default function About() {
	return (
		<section className='w-full h-full'>
			<div className='grid grid-cols-1'>
				<Radial value={100} />
			</div>
		</section>
	);
}
