import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ product, index, refetch, setDeletingProduct }) => {
	const { name, availableQuantity, price, img, id } = product;

	return (
		<tr>
			<th>{index + 1}</th>
			<td>
				<div className="avatar">
					<div className="w-16 rounded">
						<img src={img} alt={name} />
					</div>
				</div>
			</td>
			<td>{name}</td>
			<td>{availableQuantity}</td>
			<td>{price}</td>
			<td>
				<label onClick={() => setDeletingProduct(product)} htmlFor="delete-confirm-modal" className="btn btn-error btn-outline btn-xs">
					Delete
				</label>
				
			</td>
		</tr>
	);
};

export default ProductRow;
