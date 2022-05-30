import React from 'react';
import Loading from '../../Shared/Loading';
import { useQuery } from "react-query";
import Other from '../Other/Other';

const Others = () => {
  
  const { data: products, isLoading } = useQuery("products", () =>
		fetch("http://localhost:5000/product", {
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then((res) => res.json())
	);

	if (isLoading) {
		return <Loading></Loading>;
	}
  
  return (
    <div className='container mx-auto my-48'>
      <h2 className="text-3xl font-bold">Others Tools: {products?.length}</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{products?.reverse().map((product) => (
					<Other key={product?._id} product={product}></Other>
				))}
			</div>
    </div>
  );
};

export default Others;