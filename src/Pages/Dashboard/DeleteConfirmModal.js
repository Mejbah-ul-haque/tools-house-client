import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingProduct, refetch, setDeletingProduct}) => {
	const { name, id } = deletingProduct;

	const handleDelete = () => {
		fetch(`https://evening-dawn-30046.herokuapp.com/product/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					toast.success(`${name} deleted`);
					setDeletingProduct(null);
					refetch();
				}
			});
	};
	return (
		<div>
			<input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
			<div class="modal modal-bottom sm:modal-middle">
				<div class="modal-box">
					<h3 class="font-bold text-lg text-red-500">
						Are you sure you want to delete {name}!
					</h3>
					<p class="py-4">
					Once deleted, you will never find it again.!
					</p>
					<div class="modal-action">
						<button
							onClick={() => handleDelete()}
							className="btn btn-error btn-xs"
						>
							Delete
						</button>
						<label for="delete-confirm-modal" class="btn btn-xs">
							Cancel
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirmModal;
