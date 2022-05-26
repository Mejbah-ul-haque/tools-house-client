import React from "react";
import useTools from "../../../hooks/useTools";
import Tool from "../Tool/Tool";

const Tools = () => {
	const [tools] = useTools([]);

	return (
		<div className="container my-24 mx-auto ">
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{tools.map((tool) => (
					<Tool key={tool._id} tool={tool}></Tool>
				))}
			</div>
		</div>
	);
};

export default Tools;
