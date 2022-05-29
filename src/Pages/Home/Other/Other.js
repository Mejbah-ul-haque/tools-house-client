import React from 'react';
import { Link } from 'react-router-dom';

const Other = ({product}) => {
  const { name, img, description, minQuantity,  availableQuantity, price } = product;
  return (
    <div className="mt-10">
			<div className="card bg-base-100 shadow-xl border border-primary hover:border-primary">
				<figure>
					<img src={img} alt="Shoes" />
				</figure>
				<div className="card-body bg-primary hover:bg-accent hover:text-white">
					<h2 className="font-bold text-3xl mb-5 mt-[-50px]">
						<span className="bg-primary border-2 border-white rounded-full p-3 text-white">
							${price}
						</span>
					</h2>
					<h2 className="text-3xl font-bold text-white hover:text-secondary my-5">
						{name}
					</h2>
					<h2 className="card-title text-center text-white">
						Great!
						<div className="badge badge-secondary text-center">OFFER</div>
					</h2>
					<p className="my-5 text-white">{description.slice(0, 120)}</p>
					<div className="card-actions justify-between grid-rows-1">
						<div className="text-white">
							Minimum:{" "}
							<span className="badge badge-outline bg-red-500 text-white text-xl p-3 hover:bg-red-800">
								{minQuantity}
							</span>
						</div>
						<div className="text-white">
							Available:{" "}
							<span className="badge badge-outline bg-red-500 text-white text-xl p-3 hover:bg-red-800">
								{ availableQuantity}
							</span>
						</div>
					</div>
					<div>
						<Link to={`/service/${product._id}`}>
							<button className="btn btn-white btn-outline border text-white font-bold rounded-full hover:btn-accent px-10 mt-10">
								Buy Now
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
  );
};

export default Other;