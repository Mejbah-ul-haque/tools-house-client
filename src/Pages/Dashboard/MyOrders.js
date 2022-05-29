/* import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteProduct from './DeleteProduct';
import OrderRow from './OrderRow';

const MyOrders = () => {
	const [deleteOrder, setDeleteOrder] = useState(null);
	
	const { data: products, isLoading, refetch } = useQuery("products", () =>fetch("http://localhost:5000/purchase", {
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}
	return (
		<div>
			<h2 className="text-2xl">MyOrders : {products?.length}</h2>
			<div class="overflow-x-auto">
				<table class="table w-full">
					<thead>
					<tr>
							<th></th>
							<th>Name</th>
							<th>Tools</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Pay</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{
              products?.map((product, index) =><OrderRow key={product._id} index={index} product={product} refetch={refetch} setDeleteOrder={setDeleteOrder}></OrderRow>)
            }
					</tbody>
				</table>
			</div>
			{
        deleteOrder && <DeleteProduct deleteOrder={deleteOrder} refetch={refetch} setDeleteOrder={setDeleteOrder}></DeleteProduct>
      }
		</div>
	);
};

export default MyOrders; */
 







import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
	const [products, setProducts] = useState([]);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			fetch(`http://localhost:5000/purchase?userEmail=${user.email}`, {
				method: "GET",
				headers: {
					authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
				.then((res) => {
					console.log("res", res);
					if (res.status === 401 || res.status === 403) {
						signOut(auth);
						localStorage.removeItem("accessToken");
						navigate("/");
					}
					return res.json();
				})
				.then((data) => {
					setProducts(data);
				});
		}
	}, [user]);

	return (
		<div className="container mx-auto">
			<h2>My Orders: {products.length}</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Tools</th>
							<th>Quantity</th>
							<th>Price</th>
							<th>Pay</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{products.map((p, index) => (
							<tr key={index}>
								<th>{index + 1}</th>
								<td>{p.userName}</td>
								<td>{p.toolsName}</td>
								<td>{p.totalQuantity}</td>
								<td className="font-bold">{p.price}</td>
								<td>
									{(p.price && !p.paid) && <Link to={`/dashboard/payment/${p._id}`}><button className="btn btn-xs btn-success">pay</button></Link>}
									{(p.price && p.paid) && <span className="text-success">paid</span>}
								</td>
								
								<td><button className="btn btn-xs">Delete</button></td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrders;
