import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
	const { _id, name, img, description, minQuality, availableQuality, price } =
		tool;
	return (
		<div>
			<div className="card bg-base-100 shadow-xl border border-accent hover:border-primary">
				<figure>
					<img src={img} alt="Shoes" />
				</figure>
				<div className="card-body bg-accent hover:bg-primary hover:text-white">
					<h2 className="font-bold text-3xl mb-5 mt-[-50px]">
						<span className="bg-primary border-2 border-white rounded-full p-3 text-white">
							${price}
						</span>
					</h2>
					<h2 className="text-3xl font-bold hover:text-secondary my-5">
						{name}
					</h2>
					<h2 className="card-title text-center">
						Great!
						<div className="badge badge-secondary text-center">OFFER</div>
					</h2>
					<p className="my-5">{description.slice(0, 120)}</p>
					<div className="card-actions justify-between grid-rows-1">
						<div className="">
							Minimum:{" "}
							<span className="badge badge-outline bg-red-500 text-white text-xl p-3 hover:bg-red-800">
								{minQuality}
							</span>
						</div>
						<div className="">
							Available:{" "}
							<span className="badge badge-outline bg-red-500 text-white text-xl p-3 hover:bg-red-800">
								{availableQuality}
							</span>
						</div>
					</div>
					<div>
						<Link to={`/service/${tool._id}`}>
							<button className="btn btn-primary font-bold rounded-full hover:btn-accent px-10 mt-10">
								Buy Now
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tool;
