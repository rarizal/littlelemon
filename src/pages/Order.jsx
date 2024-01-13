import React from "react";
import Menus from "../components/Menus";
import Header from "../components/Header";
import OrderSummary from "../components/OrderSummary";

export default function Order() {
	return (
		<div className="mother">
			<Header />
			<OrderSummary />
			<Menus />
		</div>
	);
}
