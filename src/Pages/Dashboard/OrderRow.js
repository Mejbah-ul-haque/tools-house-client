/* import React from "react";

const OrderRow = ({ index, product, setDeleteOrder, refetch }) => {
	const { userName, toolsName, totalQuantity, price, img } = product;
	return (
		<tr>
			<th>{index + 1}</th>
			<td>
				<div className="avatar">
					<div className="w-16 rounded">
						<img src={img} alt={userName} />
					</div>
				</div>
			</td>
			<th>{index + 1}</th>
			<td>{userName}</td>
			<td>{toolsName}</td>
			<td>{totalQuantity}</td>
			<td className="font-bold">{price} tk.</td>
			<td>
				<button className="btn btn-xs">payment</button>
			</td>
			<td>
				<button className="btn btn-xs">Delete</button>
			</td>
			<td>
				<label
					onClick={() => setDeleteOrder(product)}
					htmlFor="delete-confirm-modal"
					className="btn btn-error btn-outline btn-xs"
				>
					Delete
				</label>
			</td>
		</tr>
	);
};

export default OrderRow;
 */