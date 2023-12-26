import React from "react";
import logofoot from "../assets/images/Logo-foot.svg";

export default function Footer() {
	return (
		<div className="footer">
			<div className="foot-wrap">
				<img
					src={logofoot}
					height={"148px"}
					alt="Little Lemon Logo Footer"
				></img>
				<div className="foot-links">
					<div>
						<span className="foot-title">Sitemap</span>
						<ul className="foot-items">
							<li>
								<a href="/#">Home</a>
							</li>
							<li>
								<a href="/#">Online Order</a>
							</li>
							<li>
								<a href="/#">Table Reservation</a>
							</li>
							<li>
								<a href="/#">Menu</a>
							</li>
							<li>
								<a href="/#">Login</a>
							</li>
						</ul>
					</div>
					<div>
						<span className="foot-title">Locations</span>
						<ul className="foot-items">
							<li>
								<a href="/#">Surabaya</a>
							</li>
							<li>
								<a href="/#">Yogyakarta</a>
							</li>
							<li>
								<a href="/#">Jakarta</a>
							</li>
						</ul>
					</div>
					<div>
						<span className="foot-title">Social Media</span>
						<ul className="foot-items">
							<li>
								<a href="/#">TikTok</a>
							</li>
							<li>
								<a href="/#">Instagram</a>
							</li>
							<li>
								<a href="/#">Twitter</a>
							</li>
							<li>
								<a href="/#">Facebook</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
