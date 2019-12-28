import React from "react";

const Scroll = (props) => {

return (<div style={{overflowY: "scroll", border:"4px solid lightblue", height: "66vh"}}>
		
	{props.children}

	</div>

);

};

export default Scroll;