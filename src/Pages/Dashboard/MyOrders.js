import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
	const [products, setProducts] = useState([]);
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			fetch(`http://localhost:5000/purchase?userEmail=${user.email}`)
				.then((res) => res.json())
				.then((data) => setProducts(data));
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
						</tr>
					</thead>
					<tbody>
            {
              products.map((p, index ) =><tr key={index}>
                <th>{index+1}</th>
                <td>{p.userName}</td>
                <td>{p.toolsName}</td>
                <td>{p.totalQuantity}</td>
                <td className="font-bold">{p.price} tk.</td>
              </tr>)
            }
						
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MyOrders;
