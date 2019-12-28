import React from "react";

const SearchBox = ({searchChange}) => {

return (

			
	<input
		onChange = {searchChange}
		className="pa2 ba mb4 bg-lightest-blue b--green"
		type="search"
		placeholder="search robots" />

	);
}

export default SearchBox;