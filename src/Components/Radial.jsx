import React, { useState, useEffect } from 'react';

export default function Radial({ value }) {
const totalDuration = value;
const [counter, setCounter] = useState(0);
const totalSteps = totalDuration * 10;
const incrementPerStep = 100 / totalSteps;

	useEffect(() => {
		let currentStep = 0;

		const counterInterval = setInterval(() => {
		if (currentStep < totalSteps) {
			currentStep += 1;
			setCounter(currentStep * incrementPerStep);
		} else {
			clearInterval(counterInterval);
			setTimeout(() => {
			setCounter(0);
			}, 200);
		}
		}, 10);

		return () => clearInterval(counterInterval);
	}, [incrementPerStep, totalSteps]);

	return (
		<div className={`fixed inset-0 z-20 ${counter === 0 ? 'hidden' : 'block'}`}>
			<div className="h-screen flex items-center justify-center bg-neutral bg-opacity-50 backdrop-blur-sm">
				<div className="glow radial-progress text-white" style={{ "--value": counter.toFixed(2), "--size": "6rem", "--thickness": "5px" }}>
					{counter.toFixed(2)}%
				</div>
			</div>
		</div>
	);
}
