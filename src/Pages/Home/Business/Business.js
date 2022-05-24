import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faComment, faPeoplePulling, faDollar } from "@fortawesome/free-solid-svg-icons";

const Business = () => {
	return (
		<div className="container mx-auto">
      <div className="stats stats-vertical lg:stats-horizontal shadow ">
			<div className="stat">
      <div className="stat-title text-3xl mb-5"><FontAwesomeIcon icon={faPeoplePulling}></FontAwesomeIcon></div>
				<div className="stat-value">1000+</div>
				<div className="stat-desc">customers</div>
			</div>
			<div className="stat">
      <div className="stat-title text-3xl mb-5"><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></div>
				<div className="stat-value">31K</div>
				<div className="stat-desc">Reviews</div>
			</div>

			<div className="stat">
      <div className="stat-title text-3xl mb-5"><FontAwesomeIcon icon={faDollar}></FontAwesomeIcon></div>
				<div className="stat-value">120M</div>
				<div className="stat-desc">Anual Revenue</div>
			</div>

			<div className="stat">
				<div className="stat-title text-3xl mb-5"><FontAwesomeIcon icon={faTools}></FontAwesomeIcon></div>
				<div className="stat-value">50+</div>
				<div className="stat-desc">Tools</div>
			</div>
      
		</div>
    </div>
	);
};

export default Business;
