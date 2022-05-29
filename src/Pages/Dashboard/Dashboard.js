import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user)
	return (
		<div className="drawer drawer-mobile container mx-auto">
			<input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content">
				<h2 className="text-3xl font-bold text-primary">Dashboard</h2>
				<Outlet></Outlet>
			</div>
			<div className="drawer-side">
				<label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
				<ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
					{/* <!-- Sidebar content here --> */}
					<li className="bg-primary rounded-full text-white text-center hover:bg-accent">
						<Link to="/dashboard">My Orders</Link>
					</li>
					<li className="bg-primary rounded-full text-white text-center hover:bg-accent mt-2">
						<Link to="/dashboard/review">Add Review</Link>
					</li>
					<li className="bg-primary rounded-full text-white text-center hover:bg-accent mt-2">
						<Link to="/dashboard/profile">My Profile</Link>
					</li>
					{admin && <>
							<li className="bg-primary rounded-full text-white text-center mt-2 hover:bg-accent"><Link to="/dashboard/users">Make Admin</Link></li>
							<li className="bg-primary rounded-full text-white text-center mt-2 hover:bg-accent"><Link to="/dashboard/addProduct">Add a Product</Link></li>
							<li className="bg-primary rounded-full text-white text-center mt-2 hover:bg-accent"><Link to="/dashboard/manageProduct">Manage Products</Link></li>
					</>}
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
