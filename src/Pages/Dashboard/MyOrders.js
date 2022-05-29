import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
	const [products, setProducts] = useState([]);
	const [user] = useAuthState(auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			fetch(`https://evening-dawn-30046.herokuapp.com/purchase?userEmail=${user.email}`, {
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
								<td className="font-bold">{p.price} tk.</td>
								<td><button className="btn btn-xs">payment</button></td>
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
