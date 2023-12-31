import React, { createContext, useContext, useState } from 'react';

const DataStoreContext = createContext();

export function DataStoreProvider({ children }) {
	const [ theme, setTheme ] = useState('forest');
	const themes = [
		"light",
		"dark",
		"cupcake",
		"bumblebee",
		"emerald",
		"corporate",
		"synthwave",
		"retro",
		"cyberpunk",
		"valentine",
		"halloween",
		"garden",
		"forest",
		"aqua",
		"lofi",
		"pastel",
		"fantasy",
		"wireframe",
		"black",
		"luxury",
		"dracula",
		"cmyk",
		"autumn",
		"business",
		"acid",
		"lemonade",
		"night",
		"coffee",
		"winter",
	];
	

	return (
		<DataStoreContext.Provider value={{ theme, setTheme, themes }}>
		{children}
		</DataStoreContext.Provider>
	);
}

export function useDataStore() {
	return useContext(DataStoreContext);
}
