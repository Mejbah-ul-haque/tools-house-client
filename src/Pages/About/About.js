import React from "react";
import { Link } from "react-router-dom";
import mejbah from "../../assets/Images/About/mejbah.jpg";

const About = () => {
	return (
		<div className="container mx-auto">
			<div className="hero min-h-screen">
				<div className="hero-content flex-col lg:flex-row-reverse gap-10">
					<img src={mejbah} className="max-w-sm rounded-lg shadow-2xl" />
					<div className="text-right">
						<h1 className="text-5xl font-bold text-primary my-5">
							Mejbah-ul-Haque
						</h1>
						<hr className="p-0 m-1"></hr>
						<h5 className="text-xl ">Full Stack Web Developer</h5>

						<p className="my-2">mejba.s@gmail.com</p>
						<p>MSS(1st Class), Mass Communication and Journalism</p>
						<hr></hr>
						<p>Rajshahi University, Bangladesh</p>
						<p>Phone: +8801917544593</p>
						<p>Dhaka, Bangladesh</p>
						<h3 className="text-xl font-bold text-primary">
							SKILLS: JavaScript, React, Node, Express, HTML5, CSS3, Tailwind
							CSS, Bootstrap, Mongodb
						</h3>
						<h3>
							Project No.1 :{" "}
							<a
								target="_blank"
								href="https://mejbah-n-mind.web.app/"
								className="text-blue-500 hover:text-red-500"
							>
								{" "}
								https://mejbah-n-mind.web.app/
							</a>
						</h3>
						<h3>
							Project No.2 :{" "}
							<a
								target="_blank"
								href="https://spectacular-torte-bff5c8.netlify.app/"
								className="text-blue-500 hover:text-red-500"
							>
								{" "}
								https://spectacular-torte-bff5c8.netlify.app/
							</a>
						</h3>
						<h3>
							Project No.3 :{" "}
							<a
								target="_blank"
								href="https://atafal-warehouse.web.app/"
								className="text-blue-500 hover:text-red-500"
							>
								https://atafal-warehouse.web.app/
							</a>
						</h3>
						<a target="_blank" href="https://www.linkedin.com/in/mejbah-ul-haque-67b67b71/">
							<button className="btn btn-primary mt-5">My linkedin Profile</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
