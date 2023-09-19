import React from 'react'

export default function Card2({ title, content }) {
	return (
		<div className="card w-full bg-base-100 shadow-sm">
			<div className="card-body py-0">
				<h2 className="card-title">{ title }</h2>
				<p>{ content }</p>
			</div>
		</div>
	)
}
