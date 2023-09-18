import React from 'react'

export default function Avatar({ imgSrc, imgWidth }) {
	return (
		<div className="avatar">
			<div className={`${imgWidth} rounded-xl`}>
				<img src={ imgSrc } />
			</div>
		</div>
	)
}
