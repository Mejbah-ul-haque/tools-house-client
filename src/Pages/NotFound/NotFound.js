import React from "react";

const NotFound = () => {
	return (
		<div className="container mx-auto">
			<div className="text-center">
				<div className="m-5 grid justify-content items-center">
					<img
						className="img-fluid"
						src={require("../../assets/Images/NotFound/notFound.png")}
					/>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
