import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
	const { data: users, isLoading, refetch } = useQuery("users", () =>
		fetch("https://evening-dawn-30046.herokuapp.com/user", {
			method: "GET",
			headers: {
				authorization: `Bearer ${localStorage.getItem('accessToken')}`
			}
		}).then((res) => res.json())
	);
	if (isLoading) {
		return <Loading></Loading>;
	}
	return (
		<div>
			<h2 className="text-2xl font-bold">All users : {users.length}</h2>
			<div className="overflow-x-auto">
				<table className="table w-full">
					<thead>
						<tr>
							<th></th>
							<th>Email</th>
							<th>Job</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{
              users.map((user, index) =><UserRow key={user._id} index={index} refetch={refetch} user={user}></UserRow>)
            }
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Users;
