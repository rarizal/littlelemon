import React from "react";
import Intro from "./Intro";
import Testimonial from "./Testimonial";
import Specials from "./Specials";
import Menus from "./Menus";

export default function Main() {
	return (
		<div className="main">
			<Intro />
			<Testimonial />
			<Specials />
			<Menus />
		</div>
	);
}
