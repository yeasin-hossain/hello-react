import React, { useState } from 'react';

const Search = ({ getQuery }) => {
	const [text, setText] = useState('');
	const oneChange = (q) => {
		setText(q);
		// console.log(q);
		getQuery(q);
	};
	return (
		<section className="search">
			<form>
				<input
					type="text"
					className="form-control"
					placeholder="Type Something"
					value={text}
					onChange={(e) => oneChange(e.target.value)}
				/>
			</form>
		</section>
	);
};

export default Search;
