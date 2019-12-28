import React from "react";

const Card = ({name, id , email}) => {

	return(

		<div className="ma2 shadow-hover bw5 b-blue br3 grow ba-1 shadow-2 justify-center tc bg-light-blue bg-center dib">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

		);


}

export default Card;