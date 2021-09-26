import { Divider, Input } from 'antd';
import React from 'react';





function Search({ searchInput, searchFoodFilter }) {
	
	
	
	
	
	
	
	return (
		<div className="parentDivSearch">
			<Divider>
				<h1>Search food</h1>
			</Divider>
			<Input type="text" placeholder="Search food..." value={searchInput} onInput={(e) => searchFoodFilter(e.target.value)} />
		</div>
		
	);
}

export default Search;