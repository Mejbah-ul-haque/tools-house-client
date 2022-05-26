import React from "react";

const SpecialSection = ({ special }) => {
	const { name, pic, description } = special;
	return (
		<div className="">
			<div className=" card  bg-base-100">
				<div className="bg-[#d3d1d1]" style={{height:"50px"}}></div>
				<div className="mt-[-30px]">
        <figure>
					<img style={{zIndex: '1'}} className="rounded-full w-48 mt-[-20px] border-8 border-white "
						src={pic}
						alt="Shoes"
					/>
				</figure>
				<div className="card-body">
					<h2 className="text-2xl font-bold">{name}</h2>
					<p>{description}</p>
          <div className=" ">
          <span className="border border-primary rounded-full px-24 bg-[#d3d1d1] py-1"> <button className="btn btn-primary rounded-full my-5 hover:btn-accent">Click here</button></span>
          </div>
				</div>
        </div>
			</div>
		</div>
	);
};

export default SpecialSection;
