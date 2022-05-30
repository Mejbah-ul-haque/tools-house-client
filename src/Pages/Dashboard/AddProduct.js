import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddProduct = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
    reset
	} = useForm();

	const { data: services, isLoading } = useQuery("services", () =>
		fetch("https://evening-dawn-30046.herokuapp.com/service").then((res) => res.json())
	);
  
  const imgStorageKey = "d2ed86d276998da67966121ea46a21d3";

	const onSubmit = async (data) => {
		const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData
    })
    .then(res => res.json())
    .then(result => {
      if(result.success) {
        const img = result.data.url;
        const product = {
          name: data.name,
          price: data.price,
          description: data.description,
          minQuantity: data.minQuantity,
          availableQuantity: data.availableQuantity,
          img: img
        }
        fetch('https://evening-dawn-30046.herokuapp.com/service', {
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
      }
    })
	};

	if (isLoading) {
		return <Loading></Loading>;
	}

	return (
		<div>
			<h3 className="text-2xl my-3">Add a new Product</h3>
			<div className="flex justify-center items-center mt-10">
				<div className="card w-96 bg-base-100 shadow-xl">
					<div className="card-body">
						<h2 className="text-center text-2xl">Product Information</h2>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">Product's Name</span>
								</label>
								<select {...register("name")} className="select select-primary w-full max-w-xs">
                  {
                    services.map(service =><option
                    key={service._id}
                    value={service.name}
                    >{service.name}</option>)
                  }
								</select>
							</div>
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">Price</span>
								</label>
								<input
									type="number"
									placeholder="Product Price"
									className="input input-bordered w-full max-w-xs"
									{...register("price", {
										required: {
											value: true,
											message: "Product's price is Required",
										},
									})}
								/>
								<label className="label">
									{errors.price?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.price.message}
										</span>
									)}
								</label>
							</div>
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
									<span className="label-text">Minimum Quantity</span>
								</label>
								<input
									type="number"
									placeholder="Minimum Quantity"
									className="input input-bordered w-full max-w-xs"
									{...register("minQuantity", {
										required: {
											value: true,
											message: "Minimum Quantity is Required",
										},
									})}
								/>
								<label className="label">
									{errors.minQuantity?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.minQuantity.message}
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
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">Product's Image</span>
								</label>
								<input
									type="file"
									className="input input-bordered w-full max-w-xs"
									{...register("image", {
										required: {
											value: true,
											message: "Image is Required",
										},
									})}
								/>
                <label className="label">
									{errors.image?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.image.message}
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

export default AddProduct;
