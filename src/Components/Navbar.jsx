import React from 'react'
import Tabs from './Tabs'
import Button from './Button'
import ToggleDark from './ToggleDark'

export default function Navbar() {
	return (
		<div className="navbar bg-slate-700 fixed z-50">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">My Navbar</a>
			</div>
			<div className="flex-none">
				<Tabs />
				<ul className="menu menu-horizontal px-1">
					<li>
						<details>
							<summary>
								User
							</summary>
							<ul className="p-2 bg-base-100 mx-2">
								<li><a>Profile</a></li>
								<li><a>Logout</a></li>
							</ul>
						</details>
					</li>
				</ul>
				{/* <Button /> */}
				<ToggleDark/>
			</div>
		</div>
	)
}
