import React from 'react'
import Tabs from './Tabs'
import Button from './Button'
import ToggleDark from './ToggleDark'
import { useDataStore } from '../Context/DataStoreContext';

export default function Navbar() {

	const { setTheme, themes } = useDataStore();
	const handleClick = (theme) => {
		setTheme(theme);
	}

	return (
		<div className="navbar bg-base-300 fixed z-50 px-5">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Crypto Tracker</a>
			</div>
			<div className="flex-none">
				{/* <div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost">Theme</label>
					<ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow shadow-base-300 bg-base-100 rounded-box w-30 h-40 overflow-x-hidden overflow-y-auto">
						{themes.map((theme)=>(
							<li className='w-full' key={ theme } onClick={() => handleClick(theme)} ><a>{ theme }</a></li>
						))}
					</ul>
				</div> */}
				<Tabs />
				<ul className="menu menu-horizontal px-7">
					<li>
						<details>
							<summary>
								Theme
							</summary>
							<ul className="p-2 bg-base-100 mx-1 h-40 overflow-auto rounded-md">
								{themes.map((theme)=>(
									<li className='w-full uppercase' key={ theme } onClick={() => handleClick(theme)} ><a>{ theme }</a></li>
								))}
							</ul>
						</details>
					</li>
				</ul>
				{/* <ul className="menu menu-horizontal px-1 me-1">
					<li>
						<details>
							<summary>
								User
							</summary>
							<ul className="p-2 bg-base-100 mx-1 rounded-md">
								<li><a>Profile</a></li>
								<li><a>Logout</a></li>
							</ul>
						</details>
					</li>
				</ul> */}
				{/* <Button /> */}
				{/* <ToggleDark/> */}
			</div>
		</div>
	)
}
