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
	const url = `http://localhost:5000/purchase/${id}`;

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
			<div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-12">
				<div class="card-body">
					<p className="text-success font-bold">Hello, Mr. {order.userName}</p>
					<h2 class="card-title">Please Pay for {order.toolsName}</h2>

					<p> Please pay: ${order.price}</p>
				</div>
			</div>
			<div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mx-12">
				<div class="card-body">
					<Elements stripe={stripePromise}>
						<CheckoutForm />
					</Elements>
				</div>
			</div>
		</div>
	);
};

export default Payment;
