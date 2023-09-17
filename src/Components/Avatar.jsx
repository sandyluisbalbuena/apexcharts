import React from 'react'

export default function Avatar({ imgSrc }) {
	return (
		<div className="avatar">
			<div className="w-5 rounded-xl">
				<img src={ imgSrc } />
			</div>
		</div>
	)
}
