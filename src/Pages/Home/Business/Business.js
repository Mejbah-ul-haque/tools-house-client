import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faComment, faPeoplePulling, faDollar } from "@fortawesome/free-solid-svg-icons";

const Business = () => {
	return (
		<div className="container mx-auto">
      <div class="stats stats-vertical lg:stats-horizontal shadow ">
			<div class="stat">
      <div class="stat-title text-3xl mb-5"><FontAwesomeIcon icon={faPeoplePulling}></FontAwesomeIcon></div>
				<div class="stat-value">1000+</div>
				<div class="stat-desc">customers</div>
			</div>
			<div class="stat">
      <div class="stat-title text-3xl mb-5"><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></div>
				<div class="stat-value">31K</div>
				<div class="stat-desc">Reviews</div>
			</div>

			<div class="stat">
      <div class="stat-title text-3xl mb-5"><FontAwesomeIcon icon={faDollar}></FontAwesomeIcon></div>
				<div class="stat-value">120M</div>
				<div class="stat-desc">Anual Revenue</div>
			</div>

			<div class="stat">
				<div class="stat-title text-3xl mb-5"><FontAwesomeIcon icon={faTools}></FontAwesomeIcon></div>
				<div class="stat-value">50+</div>
				<div class="stat-desc">Tools</div>
			</div>
      
		</div>
    </div>
	);
};

export default Business;
