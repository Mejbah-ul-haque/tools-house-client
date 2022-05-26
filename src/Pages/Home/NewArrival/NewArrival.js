import React from 'react';

const NewArrival = ({tool}) => {
  const { _id, name, img, minQuantity, availableQuantity, price } =tool;
  return (
    <div>
			<div className="card bg-base-100 shadow-xl border border-secondary hover:border-primary">
				<figure>
					<img src={img} alt="Shoes" />
				</figure>
				<div className="card-body bg-secondary hover:bg-primary hover:text-white">
					<h2 className="font-bold text-xl mt-[-50px]">
						<span className="bg-primary border-2 border-white rounded-full p-3 text-white">
							${price}
						</span>
					</h2>
					<h2 className="text-xl font-bold hover:text-secondary my-5">
						{name}
					</h2>

					<div className="card-actions justify-between grid-rows-1">
						<div className="">
							Minimum:{" "}
							<span className="badge badge-outline bg-red-500 text-white text-xl p-3 hover:bg-red-800">
								{minQuantity}
							</span>
						</div>
						<div className="">
							Available:{" "}
							<span className="badge badge-outline bg-red-500 text-white text-xl p-3 hover:bg-red-800">
								{availableQuantity}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
};

export default NewArrival;