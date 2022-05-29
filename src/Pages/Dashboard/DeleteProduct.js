/* import React from 'react';
import { toast } from 'react-toastify';

const DeleteProduct = ({deleteOrder, refetch, setDeleteOrder}) => {
  const {toolsName, id} =deleteOrder;
  
  const handleDelete = () => {
		fetch(`http://localhost:5000/purchase/${id}`, {
			method: "DELETE",
			headers: {
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					toast.success(`${toolsName} deleted`);
					setDeleteOrder(null);
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
						Are you sure you want to delete {toolsName}!
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

export default DeleteProduct; */