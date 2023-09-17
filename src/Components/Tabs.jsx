import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Tabs() {

	const [activeTab, setActiveTab] = useState('home');

	const tabs = [
		["home","/"],
		["show", "show"],
		["about", "about"],
	]

	const handleClick = (tabName) => {
		setActiveTab(tabName);
	}

	return (
		<div className="tabs">
			{tabs.map((tab)=>(
				<Link to={tab[1]} onClick={()=>handleClick(tab[0])} key={ tab[0] } className={`tab tab-bordered${tab[0] === activeTab ? 'tab-active text-white' : ''} uppercase`}>{ tab[0] }</Link>
			))}
		</div>
	)
}
