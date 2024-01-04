import React from "react";
import Intro from "./Intro";
import Testimonial from "./Testimonial";

export default function Main() {
	return (
		<div className="main">
			<Intro />
			<Testimonial />
			<div className="specials">Specials</div>
			<div className="menus">Menus</div>
		</div>
	);
}
