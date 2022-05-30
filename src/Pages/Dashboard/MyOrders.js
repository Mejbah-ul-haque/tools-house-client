import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
	const [products, setProducts] = useState([]);
	const [payments, setPayments] = useState([]);
	console.log(payments.transactionId);
	
	const [user] = useAuthState(auth);
	const navigate = useNavigate();
	
	useEffect(()=>{
		fetch('http://localhost:5000/payment')
		.then(res => res.json())
		.then(data => setPayments(data));
	}, [])

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
	
	const handleDelete = (id) => {
		const proceed = window.confirm ('Are you sure you want to delete?');
		if(proceed){
			const url = `http://localhost:5000/purchase/${id}`;
			fetch(url, {
				method: 'DELETE'
			})
			.then(res => res.json())
			.then(data => {
				if(data.deletedCount > 0){
					console.log('deleted success')
					const remaining = products.filter(product => product._id !==id);
					setProducts(remaining);
				}
			})
		}
	}

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
							<th>Action</th>
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
									{(p.price && p.paid) && <span className="text-success">Paid</span>}
								</td>
								
								<td>
									{(!p.paid) && (<button onClick={()=>handleDelete(p._id)}  className="btn btn-xs btn-error">Cencel</button>)}
									{(p.paid) && (<span className="text-success">Successful</span>)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrders;
