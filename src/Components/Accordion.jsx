import React from 'react'
import Button from './Button'
import SearchBox from './SearchBox'

export default function Accordion() {
	return (
		<div className='flex flex-col gap-2'>
			<div className="collapse collapse-arrow bg-slate-800">
				<input type="radio" name="my-accordion-3"/> 
				<div className="collapse-title text-sm font-medium">
					Action1
				</div>
				<div className="collapse-content"> 
					<div className='flex flex-col gap-1'>
					<SearchBox />
					</div>
				</div>
			</div>
			<div className="collapse collapse-arrow bg-slate-800">
				<input type="radio" name="my-accordion-3" /> 
				<div className="collapse-title text-sm font-medium">
					Action2
				</div>
				<div className="collapse-content"> 
					<div className='flex flex-col gap-1'>
						<Button content={ 'btn1' }/>
						<Button content={ 'btn2' }/>
					</div>
				</div>
			</div>
			<div className="collapse collapse-arrow bg-slate-800">
				<input type="radio" name="my-accordion-3" /> 
				<div className="collapse-title text-sm font-medium">
					Action3
				</div>
				<div className="collapse-content"> 
					<div className='flex flex-col gap-1'>
						<Button content={ 'btn1' }/>
						<Button content={ 'btn2' }/>
						<Button content={ 'btn3' }/>
					</div>
				</div>
			</div>
		</div>
		
	)
}
