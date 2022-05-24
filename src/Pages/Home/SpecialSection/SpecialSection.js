import React from "react";

const SpecialSection = ({ special }) => {
	const { name, pic, description } = special;
	return (
		<div className="">
			<div className=" card w-96 bg-base-100 bg-primary">
				<div className="mt-[100px">
        <figure>
					<img className="rounded-full w-48 mt-[-20px] border-8 border-primary "
						src={pic}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="text-2xl font-bold">{name}</h2>
					<p>{description}</p>
          <div className=" ">
          <span className="border border-primary rounded-full px-20 py-1"> <button className="btn btn-primary rounded-full my-5 hover:btn-accent">Click here</button></span>
          </div>
				</div>
        </div>
			</div>
		</div>
	);
};

export default SpecialSection;
