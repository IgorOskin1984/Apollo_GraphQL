import { useState } from 'react';
import './App.css';
import { DisplayLocations } from './components/DisplayLocations/DisplayLocations';
import { Dogs } from './components/Dogs/Dogs';

export default function App() {
	return (
		<div>
			<h2>My first Apollo app 🚀</h2>
			<br />
			{/*<DisplayLocations />*/}
			<Dogs />
		</div>
	);
}