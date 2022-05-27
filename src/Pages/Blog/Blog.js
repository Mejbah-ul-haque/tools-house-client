import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
	const {_id, heading, description, img } = blog;
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<figure>
				<img
					src={img}
					alt="React"
				/>
			</figure>
			<div className="card-body ">
				<h2 className="card-title text-left">{heading}</h2>
				<p className="text-left my-3">{description.slice(0, 160)}</p>
				<div className="card-actions justify-end">
          <Link to={`/blog/${blog._id}`}>
					<button className="btn btn-primary">Read More...</button>
          </Link>
				</div>
			</div>
		</div>
	);
};

export default Blog;
