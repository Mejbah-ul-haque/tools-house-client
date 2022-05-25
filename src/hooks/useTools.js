import { useEffect, useState } from "react";

const useTools = () => {
	const [tools, setTools] = useState([]);
	

	useEffect(() => {
		fetch("http://localhost:5000/service")
			.then((res) => res.json())
			.then((data) => setTools(data));
	}, []);
	return [tools, setTools];
};

export default useTools;
