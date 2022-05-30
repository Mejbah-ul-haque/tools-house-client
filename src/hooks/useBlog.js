import { useEffect, useState } from "react";

const useBlogs = () => {
	const [blogs, setBlogs] = useState([]);
	

	useEffect(() => {
		fetch("https://evening-dawn-30046.herokuapp.com/blog")
			.then((res) => res.json())
			.then((data) => setBlogs(data));
	}, []);
	return [blogs, setBlogs];
};

export default useBlogs;