import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Review = (props) => {
	const { name, comment, ratings } = props.review;
	return (
		<div className="">
			<div className="text-left py-8 h-full">
				<h3 className="font-bold text-center rounded-full bg-green-200 p-2 pl-6"><FontAwesomeIcon icon={faComment}></FontAwesomeIcon> <span className="ml-3">{name}</span></h3>
				<h4 className="my-4 text-2xl pl-10">{comment}</h4>
				
				<br />
				<div class="rating border rounded-full w-full p-1">
					<input
						type="radio"
						name="rating-2"
						class="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						class="mask mask-star-2 bg-orange-400"
						checked
					/>
					<input
						type="radio"
						name="rating-2"
						class="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						class="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						class="mask mask-star-2 bg-orange-400"
                        
					/>
				</div>
			</div>
		</div>
	);
};

export default Review;
