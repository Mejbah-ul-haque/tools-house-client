import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Home/Review/Review";

const AllReviews = () => {
	const [reviews, setReviews] = useReviews();
	return (
		<div className="container mx-auto mb-10">
			<h2 className="text-3xl font-bold my-8">Customer's Reviews:</h2>
			<ul>
				<li className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{reviews.map((review) => (
						<Review key={review._id} review={review}></Review>
					))}
				</li>
			</ul>
		</div>
	);
};

export default AllReviews;
