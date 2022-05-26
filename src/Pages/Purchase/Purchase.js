import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
	const { id } = useParams();
	const [user, loading] = useAuthState(auth);
	const [service, setService] = useState([]);
	const { _id, name, img, description, minQuantity,  availableQuantity, price } =
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
		const phone = event.target.phone.value;
		const address = event.target.address.value;
		// const price = event.target.price.value;
		const totalQuantity = event.target.quantity.value;
		
		if (loading) {
			return <Loading></Loading>;
		}
		
		if(totalQuantity < minQuantity){
			alert('Please increase your Quantity');	
			return;	
		}		
		// else if(totalQuantity > availableQuantity){
		// 	alert('Quantity in not available. Please decrease your quantity.');	
		// 	return;	
		// }
	

		const purchaseData = {
			toolsId: _id,
			toolsName: name,
			price: price,
			totalQuantity: totalQuantity,
			userEmail: email,
			userName: user.displayName,
			phone: phone,
			address: address,	
		}
		console.log(purchaseData);

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
						<div  className="card bg-base-100 w-96 h-[750px] shadow-xl border border-primary">
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

							</div>
						</div>
					</div>
					<div className="card border flex-shrink-0 w-full h-[750px] max-w-sm shadow-2xl bg-base-100">
						<div className="card-body ">
						<h2 className="text-xl mb-5">Please Confirm Your Order</h2>
							<div className="grid grid-cols-2 gap-10">
							<div>
								<p className=" bg-primary text-white rounded-t-lg py-2">Minimum</p>
								<p className="border-2 border-primary rounded-b-lg font-bold text-2xl text-red-500">{minQuantity}</p>
							</div>
							<div>
								<p className=" bg-primary text-white rounded-t-lg py-2">Available</p>
								<p className="border-2 border-primary rounded-b-lg font-bold text-2xl text-red-500">{availableQuantity}</p>
							</div>
							</div>
							<form onSubmit={handleSubmit}>
						
							<label className="label"> <span className="label-text font-bold mt-2">Total Quantity</span></label>
							<input type="number" name="quantity" placeholder="Total Quantity" className="input input-bordered font-bold input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Name</span></label>
							<input type="text" name="name" disabled value={user?.displayName || ""} className="font-bold input input-bordered input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Email</span></label>
							<input type="email" name="email" disabled value={user?.email || ""} className="font-bold input input-bordered input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Phone</span></label>
							<input type="text" name="phone" placeholder="Phone Number" className="input font-bold input-bordered input-primary w-full max-w-xs" />
							<label className="label"> <span className="label-text font-bold mt-2">Address</span></label>
							<input type="text" name="address" placeholder="Type Your Address" className="font-bold input input-bordered input-primary w-full max-w-xs" />
								<input type="submit" value="Purchase" 
								className="btn btn-primary font-bold input input-bordered  text-white  w-full max-w-xs mt-8 mb-3" />
						
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Purchase;
