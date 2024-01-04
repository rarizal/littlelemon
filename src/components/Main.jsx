import React from "react";
import Intro from "./Intro";
import Testimonial from "./Testimonial";
import Specials from "./Specials";

export default function Main() {
	return (
		<div className="main">
			<Intro />
			<Testimonial />
			<Specials />
			<div className="menus">Menus</div>
		</div>
	);
}
