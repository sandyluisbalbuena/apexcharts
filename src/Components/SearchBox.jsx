import React from 'react'
import Input from './Input'
import Button from './Button'

export default function SearchBox() {
	return (
		<div className='join'>
			<input type="text" placeholder="Type here" className="input input-sm input-bordered input-neutral w-full max-w-xs join-item rounded-md" />
			<button className="btn btn-sm btn-neutral w-fit join-item rounded-md" >
				Search
			</button>
		</div>
	)
}
