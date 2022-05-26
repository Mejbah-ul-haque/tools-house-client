import React, { useEffect, useState } from "react";
import SpecialSection from "../SpecialSection/SpecialSection";

const SpecialSections = () => {
	const [specials, setSpecials] = useState([]);

	useEffect(() => {
		fetch("special.json")
			.then((res) => res.json())
			.then((data) => setSpecials(data));
	}, []);
	return (
		<div className="">
      <div className="bg-primary" style={{height:"100px"}}>
        <p className="text-white text-3xl font-bold pt-7">Why are we unique!</p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-20">
			{specials.map((special) => (
				<SpecialSection key={special._id} special={special}></SpecialSection>
			))}
		</div>
    </div>
	);
};

export default SpecialSections;
