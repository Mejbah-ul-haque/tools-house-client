import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const AddReview = () => {
  const {
		register,
		formState: { errors },
		handleSubmit,
    reset
	} = useForm();
  
  const { data: services, isLoading } = useQuery("services", () =>
		fetch("http://localhost:5000/service").then((res) => res.json())
	);
  
  
  const onSubmit = async (data) => {
    const product = {
      name: data.name,
      price: data.price,
      description: data.description,
      minQuantity: data.minQuantity,
      availableQuantity: data.availableQuantity,
    }
    fetch('http://localhost:5000/product', {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(product)
    })
    .then(res => res.json())
    .then(inserted =>{
      if(inserted.insertedId){
        toast.success('Product added successfully')
        reset();
      }
      else{
        toast.error('Failed to add product');
      }
    })
	
  
	};
  
  if (isLoading) {
		return <Loading></Loading>;
	}
  
  return (
    <div>
      <h2>Add a  Reviews</h2>
      <div className="flex justify-center items-center mt-10">
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="text-center text-2xl">Review Details</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							
							
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">Description</span>
								</label>
								<input
									type="textarea"
									placeholder="Product Description"
									className="input input-bordered w-full max-w-xs"
									{...register("description", {
										required: {
											value: true,
											message: "Product's description is Required",
										},
									})}
								/>
								<label className="label">
									{errors.description?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.description.message}
										</span>
									)}
								</label>
							</div>
							
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">Available Quantity</span>
								</label>
								<input
									type="number"
									placeholder="Available Quantity"
									className="input input-bordered w-full max-w-xs"
									{...register("availableQuantity", {
										required: {
											value: true,
											message: "Available Quantity is Required",
										},
									})}
								/>
								<label className="label">
									{errors.availableQuantity?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.availableQuantity.message}
										</span>
									)}
								</label>
							</div>
						

							<input
								className="btn w-full max-w-xs"
								type="submit"
								value="Add"
							/>
						</form>
					</div>
				</div>
			</div>
    </div>
  );
};

export default AddReview;