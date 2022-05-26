import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
	const { id } = useParams();
	const [user, loading] = useAuthState(auth);
	const [service, setService] = useState([]);
	const { _id, name, img, description, minQuality, availableQuality, price } =
		service;

	useEffect(() => {
		fetch(`http://localhost:5000/service/${id}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, [id]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const name = event.target.name.value;
		const address = event.target.address.value;
		const others = event.target.others.value;
		const price = event.target.price.value;
		console.log(email, name, address, others, price);

	};
	
	return (
		<div>
			<h1 className="text-5xl font-bold mb-5 mt-10">
				<span className="border rounded-full px-20 shadow">{name}</span>{" "}
			</h1>
			<h1 className="text-xl font-bold">Buy Your Product</h1>
			<div className="hero">
				<div className="hero-content  flex-col lg:flex-row-reverse">
					<div className="text-center lg:text-left">
						<div  className="card bg-base-100 w-96 h-[800px] shadow-xl border border-primary">
							<figure>
								<img src={img} alt="Shoes" />
							</figure>
							<div className="card-body bg-primary text-white">
								<h2 className="font-bold text-3xl mb-5 mt-[-50px]">
									<span className="bg-primary border-2 border-white rounded-full p-3 text-white">
										${price}
									</span>
								</h2>
								<p className="my-5">{description}</p>
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
							</div>
						</div>
					</div>
					<div className="card border flex-shrink-0 w-full h-[800px] max-w-sm shadow-2xl bg-base-100">
						<div className="card-body ">
							<form onSubmit={handleSubmit}>
							<label className="label"> <span className="label-text font-bold ">Price : </span></label>
							<input disabled type="text" name="price" value={price || ""} className="input text-xl font-bold input-bordered input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Quantity</span></label>
							<input type="number" placeholder={minQuality} className="input input-bordered font-bold input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Name</span></label>
							<input type="text" name="name" disabled value={user?.displayName || ""} className="font-bold input input-bordered input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Email</span></label>
							<input type="email" name="email" disabled value={user?.email || ""} className="font-bold input input-bordered input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Phone</span></label>
							<input type="text" name="phone" placeholder="Phone Number" className="input font-bold input-bordered input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Address</span></label>
							<input type="text" name="address" placeholder="Type Your Address" className="font-bold input input-bordered input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Others Information</span></label>
							<input type="text" name="others" placeholder="Others Information" className="font-bold input input-bordered input-primary w-full max-w-xs" />

							<input type="submit" value="Purchase" className="btn btn-primary font-bold input input-bordered  text-white  w-full max-w-xs mt-8 mb-3" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
