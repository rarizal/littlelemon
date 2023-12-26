import React from "react";
import logo from "../assets/images/Logo.svg";

export default function Header() {
	return (
		<div className="header">
			<div className="head-wrap">
				<img src={logo} alt="Logo Little Lemon" height={"61px"}></img>
				<nav>
					<ul className="navigation">
						<li>
							<a href="/#">Home</a>
						</li>
						<li>
							<a href="/#">Reservation</a>
						</li>
						<li>
							<a href="/#">About</a>
						</li>
						<li>
							<a href="/#">Menu</a>
						</li>
						<li>
							<a href="/#">Online Order</a>
						</li>
						<li>
							<a href="/#">Login</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}
