import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);
  
	const { data: products, isLoading, refetch } = useQuery("products", () =>
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
		<div>
			<h2 className="text-2xl">Manage Products : {products.length}</h2>
			<div class="overflow-x-auto">
				<table class="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Avatar</th>
							<th>Name</th>
							<th>Quantity</th>
							<th>Price/ps</th>
							<th>Action</th>
							
						</tr>
					</thead>
					<tbody>
						{
              products.map((product, index) =><ProductRow key={product._id} index={index} product={product} refetch={refetch} setDeletingProduct={setDeletingProduct}></ProductRow>)
            }
					</tbody>
				</table>
			</div>
      {
        deletingProduct && <DeleteConfirmModal deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeleteConfirmModal>
      }
		</div>
	);
};

export default ManageProducts;
