import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faClock,
	faLocationDot,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import bankCard from "../../../assets/BankCard/bankCard.jpg";
import "./Footer.css";

const today = new Date();
const year = today.getFullYear();

const Footer = () => {
	return (
		<footer style={{ marginTop: "120px" }} className="shadow-lg ">
			<div style={{ height: "50px", backgroundColor: "lightgray" }}></div>
			<div style={{ backgroundColor: "#001a33" }}>
				<section className="container mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-3 ">
						<div className="text-left">
							<div
								style={{ height: "300px" }}
								className="text-white text-start border border-[#8c8c8c] border-top-0 p-4 pt-5 leading-8"
							>
								<h3 className="text-2xl font-bold">contact us</h3>
								<p>
									{" "}
									<FontAwesomeIcon
										className="text-[#8c8c8c]"
										icon={faPhone}
									></FontAwesomeIcon>
									<small className="ml-3">+8801919999999</small>
								</p>
								<p>
									<FontAwesomeIcon
										className="text-[#8c8c8c]"
										icon={faEnvelope}
									></FontAwesomeIcon>
									<small className="ml-3"> tools@gmail.com</small>
								</p>
								<p>
									<FontAwesomeIcon
										className="text-[#8c8c8c]"
										icon={faLocationDot}
									/>
									<small className="ml-3">PO BOX 7091, Dhaka</small>
								</p>
								<p>
									<FontAwesomeIcon
										className="text-[#8c8c8c]"
										icon={faClock}
									></FontAwesomeIcon>
									<small className="ml-3">Opening : 8.00AM-22PM</small>
								</p>
							</div>
						</div>
						<div className="col-sm-12 col-md-4">
							<div
								style={{ height: "300px" }}
								className="text-white text-left leading-10 border border-[#8c8c8c] p-4 pt-5"
							>
								<h5 className="text-2xl font-bold">
									<small>CUSTOMER SERVICE</small>{" "}
								</h5>
								<p>
                                <FontAwesomeIcon
										className="text-[#8c8c8c] mr-2"
										icon={faCheck}
									></FontAwesomeIcon>
									<small>Help and advice</small>{" "}
								</p>
								<p>
                                <FontAwesomeIcon
										className="text-[#8c8c8c] mr-2"
										icon={faCheck}
									></FontAwesomeIcon>
									<small> Shipping & Returns</small>{" "}
								</p>
								<p>
                                <FontAwesomeIcon
										className="text-[#8c8c8c] mr-2"
										icon={faCheck}
									></FontAwesomeIcon>
									<small>Refund Policy</small>
								</p>
								<p>
                                <FontAwesomeIcon
										className="text-[#8c8c8c] mr-2"
										icon={faCheck}
									></FontAwesomeIcon>
									<small>Delivery Information</small>
								</p>
								<p>
                                <FontAwesomeIcon
										className="text-[#8c8c8c] mr-2"
										icon={faCheck}
									></FontAwesomeIcon>
									<small>Delivery Information</small>
								</p>
							</div>
						</div>
						<div className="col-sm-12 col-md-4">
							<div
								style={{ height: "300px" }}
								className="text-white text-left border border-[#8c8c8c]  p-4 pt-5"
							>
								<h5 className="text-2xl font-bold">
									<small>NEWSLETTER</small>{" "}
								</h5>
								<p>
									<small>
										Sign up newsletter to receive special offers and exclusive
										news about Metros products
									</small>{" "}
								</p>
								<p className="bg-white text-center mt-10">
									<input
										className="w-100 border-0 text-[#8c8c8c] bg-white py-2"
										type="button"
										value="ENTER YOUR ADDRESS"
									/>
								</p>
								<p className="bg-accent text-center mt-5">
									<input
										className="w-100 border-0 p-2 text-white"
										type="button"
										value="SUBSCRIBE"
									/>{" "}
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="container mx-auto text-center py-5">
					<div className="grid grid-cols-1 lg:grid-cols-3 align-items-md-center">
						<div className="col-sm-12 col-md-4 text-end text-white border-end border-[#8c8c8c] lh-sm">
							<h1 className="lh-1 text-center text-5xl font-bold">
								tools house
							</h1>
							<p className="text-center">
								<small>we are manufacturing all over the World </small>
							</p>
							<p className="text-center">
								<small>
									<em>" Your satisfaction is our main goal. "</em>
								</small>
							</p>
						</div>
						<div className="text-center border-end border-[#8c8c8c]">
							<p className="mt-3">
								<Link
									className="text-decoration-none footer-link border rounded-full px-5 pb-1"
									to="/laptop"
								>
									<small> Reducers</small>
								</Link>
							</p>
							<p className="mt-3">
								<Link
									className="text-decoration-none footer-link border rounded-full px-5 pb-1"
									to="/mobile"
								>
									<small> Spanner</small>
								</Link>
							</p>
							<p className="mt-3">
								<Link
									className="text-decoration-none footer-link border rounded-full px-6 pb-1"
									to="/airPods"
								>
									<small> AirPods</small>
								</Link>
							</p>
						</div>
						<div className="col-sm-12 col-md-4 text-center">
							<p className="mt-3">
								<Link
									className="text-decoration-none footer-link border rounded-full px-6 pb-1"
									to="/iron"
								>
									<small> Hacksaw </small>
								</Link>
							</p>
							<p className="mt-3">
								<Link
									className="text-decoration-none footer-link border rounded-full px-3 pb-1"
									to="/watch"
								>
									<small> Cutting Pliers </small>
								</Link>
							</p>
							<p className="mt-3">
								<Link
									className="text-decoration-none border footer-link rounded-full px-7 pb-1"
									to="/others"
								>
									<small> Others</small>
								</Link>
							</p>
						</div>
					</div>
				</section>
				<div style={{ height: "1px" }} className="bg-[#8c8c8c] w-100"></div>
				<section className="container mx-auto">
					<img className="mb-2 mt-5 mx-auto" src={bankCard} alt="" />
					<p className="text-white text-center py-4 mb-0">
						<small> copyright &copy; {year} tools house. All rights reserved.</small>
					</p>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
