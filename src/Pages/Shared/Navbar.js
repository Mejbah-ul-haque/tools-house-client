import React from "react";

const Navbar = () => {
	const menuItems = (
		<>
			<li>
				<a>Home</a>
			</li>
			<li>
				<a>Equipments</a>
			</li>
			<li>
				<a>Blog</a>
			</li>
			<li>
				<a>About</a>
			</li>
		</>
	);
	return (
		<div>
			<div className="text-right container mx-auto mt-5">
				<small>Call us : 0000-12456 | Email : tools@house.com</small>
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
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								{menuItems}
							</ul>
						</div>
						<a className="btn btn-ghost normal-case text-2xl font-bold text-secondary">
							Tools House
						</a>
					</div>
					<div className="navbar-center hidden lg:flex">
						<ul className="menu menu-horizontal p-0">{menuItems}</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
