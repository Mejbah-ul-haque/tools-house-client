import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
	"pk_test_51L4vxVJldYkbLizVlFmsdGf9oWNbq3nijnu3TnGNsnanVqNjwBGWwKYqOBqCQyHLiwP6ojXGBSAZQXLgoIyVtJUC00CKKdqcMX"
);

const Payment = () => {
	const { id } = useParams();
	const url = `https://evening-dawn-30046.herokuapp.com/purchase/${id}`;

	const { data: order, isLoading } = useQuery(["purchase", id], () =>
		fetch(url, {
			method: "GET",
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
			<div className="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-12">
				<div className="card-body">
					<p className="text-success font-bold">Hello, Mr. {order.userName}</p>
					<h2 className="card-title">Please Pay for {order.toolsName}</h2>

					<p> Please pay: ${order.price}</p>
				</div>
			</div>
			<div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-12">
				<div className="card-body">
					<Elements stripe={stripePromise}>
						<CheckoutForm order={order} />
					</Elements>
				</div>
			</div>
		</div>
	);
};

export default Payment;
