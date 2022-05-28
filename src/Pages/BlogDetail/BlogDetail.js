import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
	const [blogDetail, setBlogDetail] = useState([]);  
  const { heading, description, img } = blogDetail;
  console.log(heading);
  
  useEffect(() => {
		fetch(`https://evening-dawn-30046.herokuapp.com/blog/${id}`)
			.then((res) => res.json())
			.then((data) => setBlogDetail(data));
	}, [id]);
  
	return (
		<div className="container mx-auto">
      <img style={{backgroundSize: 'cover'}} className="mt-7" src={img} alt="" />
			<div style={{border: "10px solid white"}} className=" w-96 glass container mx-auto mt-[-100px] border-2 border-white shadow-lg">
				<figure>
					<img src={img} alt="car!" />
				</figure>
				<div className="card-body">
					<h2 className="card-title text-4xl font-bold text-red-500">{heading}</h2>
					<p className="my-5">{description}</p>
					<div className="card-actions justify-center">
            <Link to="/blog">
						<button className="btn btn-primary">Back to Blog</button>
            </Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogDetail;
