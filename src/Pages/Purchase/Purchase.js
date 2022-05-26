import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";


const Purchase = () => {
	const { id } = useParams();
	const [service, setService] = useState([]);
  const { _id, name, img, description, minQuality, availableQuality, price } =
		service;
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	useEffect(() => {
		fetch(`http://localhost:5000/service/${id}`)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, [id]);

	const onSubmit = () => {};

	return (
		<div>
			<h1 className="text-5xl font-bold mb-5 mt-10"><span className="border rounded-full px-20 shadow">{name}</span> </h1>
			<h1 className="text-xl font-bold">Buy Your Product</h1>
			<div className="hero">
				<div className="hero-content  flex-col lg:flex-row-reverse">
				
					<div className="text-center lg:text-left">
						
						<div className="card bg-base-100 w-96 shadow-xl border border-primary">
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
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control w-full max-w-xs">
									<label className="label">
										<span className="label-text">Price : {price}</span>
									</label>
									<input
										type="text"
										placeholder="Address"
										className="input input-bordered w-full max-w-xs"
										{...register("text")}
									/>
								</div>
								<div className="form-control w-full max-w-xs">
									<label className="label">
										<span className="label-text">Quantity</span>
									</label>
									<input
										type="number"
										placeholder="Address"
										className="input input-bordered w-full max-w-xs"
										{...register("text")}
									/>
								</div>
								<div className="form-control w-full max-w-xs">
									<label className="label">
										<span className="label-text">Available Quantity</span>
									</label>
									<input
										type="number"
										placeholder="Address"
										className="input input-bordered w-full max-w-xs"
										{...register("text")}
									/>
								</div>
								<div className="form-control w-full max-w-xs">
									<label className="label">
										<span className="label-text">Name</span>
									</label>
									<input
										type="text"
										placeholder="Your Name"
										className="input input-bordered w-full max-w-xs"
										{...register("text", {
											required: {
												value: true,
												message: "Name is Required",
											},
										})}
									/>
									<label className="label">
										{errors.name?.type === "required" && (
											<span className="label-text-alt text-red-500">
												{errors.name.message}
											</span>
										)}
									</label>
								</div>
								<div className="form-control w-full max-w-xs">
									<label className="label">
										<span className="label-text">Email</span>
									</label>
									<input
										type="email"
										placeholder="Your email address"
										className="input input-bordered w-full max-w-xs"
										{...register("email", {
											required: {
												value: true,
												message: "Email is Required",
											},
										})}
									/>
									<label className="label">
										{errors.email?.type === "required" && (
											<span className="label-text-alt text-red-500">
												{errors.email.message}
											</span>
										)}
									</label>
								</div>
								<div className="form-control w-full max-w-xs">
									<label className="label">
										<span className="label-text">Address</span>
									</label>
									<input
										type="text"
										placeholder="Address"
										className="input input-bordered w-full max-w-xs"
										{...register("text")}
									/>
								</div>
								<div className="form-control w-full max-w-xs">
									<label className="label">
										<span className="label-text">Others Information</span>
									</label>
									<input
										type="text"
										placeholder="Address"
										className="input input-bordered w-full max-w-xs"
										{...register("text")}
									/>
								</div>
								<input
									className="btn w-full max-w-xs mt-5"
									type="submit"
									value="Purchase"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
