import { useEffect, useState } from "react";

const useTools = () => {
	const [tools, setTools] = useState([]);
	

	useEffect(() => {
		fetch("https://evening-dawn-30046.herokuapp.com/service")
			.then((res) => res.json())
			.then((data) => setTools(data));
	}, []);
	return [tools, setTools];
};

export default useTools;
