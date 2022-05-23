import React from "react";
import useTools from "../../../hooks/useTools";
import NewArrival from "../NewArrival/NewArrival";

const NewArrivals = () => {
	const [tools] = useTools([]);
	return (
		<div>
			<h2 className="text-left text-4xl my-10">New Arrivals</h2>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
				<div className="grid grid-cols-2 gap-5">
					{tools.slice(2, 6).map((tool) => (
						<NewArrival key={tool._id} tool={tool}></NewArrival>
					))}
				</div>
				<div className="rounded-3xl" style={{background: `url(${'https://i.ibb.co/bPBsrgG/new-Arrival.webp'})`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}></div>
			</div>
		</div>
	);
};

export default NewArrivals;
