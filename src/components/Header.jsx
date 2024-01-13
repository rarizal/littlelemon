import React from "react";
import logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div className="header">
			<div className="head-wrap">
				<img src={logo} alt="Logo Little Lemon" height={"61px"}></img>
				<nav>
					<ul className="navigation">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/online-order">Reservation</Link>
						</li>
						<li>
							<Link to="/#">About</Link>
						</li>
						<li>
							<Link to="/#">Menus</Link>
						</li>
						<li>
							<Link to="/online-order">Online Order</Link>
						</li>
						<li>
							<Link to="/#">Login</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
