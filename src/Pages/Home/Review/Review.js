import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const Review = (props) => {
	const { name, comment } = props.review;
	return (
		<div className="border bg-[#d6d6d6]">
			<div className="text-left py-8 h-full">
				<h3 className="font-bold text-center rounded-full bg-green-200 p-2 pl-6"><FontAwesomeIcon icon={faComment}></FontAwesomeIcon> <span className="ml-3">{name}</span></h3>
				<h4 className="my-4 text-2xl pl-10">{comment}</h4>
				
				<br />
				<div className="rating py-2 pl-5 rounded-full bg-white mx-10 w-full p-1">
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
						checked
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-400"
					/>
					<input
						type="radio"
						name="rating-2"
						className="mask mask-star-2 bg-orange-200"
                        
					/>
				</div>
			</div>
		</div>
	);
};

export default Review;
