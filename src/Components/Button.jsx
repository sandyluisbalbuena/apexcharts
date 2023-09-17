import React from 'react'

export default function Button({ content }) {
	return (
		<button className="btn btn-ghost btn-sm w-full" >
			{ content }
		</button>
	)
}
