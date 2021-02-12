import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/charcaters/CharacterGrid';
import Search from './components/ui/Search';
import './app.css';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');

	useEffect(() => {
		const fetchItems = async () => {
			const result = await fetch(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);
			const char = await result.json();
			setItems(char);
			setIsLoading(false);
		};
		fetchItems();
	}, [query]);
	return (
		<div className="container">
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
};
export default App;
