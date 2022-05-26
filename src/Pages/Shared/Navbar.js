import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
	const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
	const menuItems = (
		<>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/equipment">Equipments</Link>
			</li>
			<li>
				<Link to="/allreviews">Reviews</Link>
			</li>
			<li>
				<Link to="/blog">Blog</Link>
			</li>
			<li>
				<Link to="about">Portfolio</Link>
			</li>
			{
				user && <li><Link to="dashboard">Dashboard</Link></li>
			}			
			<li>
			{user ? (
          <button onClick={logout} className="font-bold text-white btn btn-primary ">Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
			</li>
		</>
	);
	return (
		<div>
			<div className="text-right container mx-auto mt-5">
				<div>
					
				</div>
				<div>
				<small>Call us : 0000-12456 | Email : tools@house.com</small>
				</div>
				
			</div>
			<div className="bg-primary ">
				<div className="navbar bg-primary container mx-auto text-white mt-5">
					<div className="navbar-start">
						<div className="dropdown">
							<label tabIndex="0" className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
							<ul
								tabIndex="0"
								className="menu menu-compact dropdown-content text-primary font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								{menuItems}
							</ul>
						</div>
						<Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-secondary">
							TOOLS HOUSE
						</Link>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0">{menuItems}</ul>
					</div>
					<div className="navbar-end">
					<label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;


