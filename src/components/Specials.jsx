import React from "react";
import special from "../assets/images/sopklaten.jpeg";

export default function Specials() {
	return (
		<div className="specials">
			<img src={special} alt="Special Menu" />
			<div className="special-texts">
				<div className="spec-title">Today's Special:</div>
				<div className="spec-menutitle">Sop Ayam Klaten</div>
				<div className="spec-intro">
					<div>Origin: Indonesia, Central Java.</div>
					<div>
						Characteristics: Sweet, tangy, and umami chicken soup
						made with mushroom broth.{" "}
					</div>
				</div>
				<div className="spec-desc">
					Authentic Indonesian chicken soup. Bursting with
					irresistible flavors and fragrant spices, this culinary
					delight is a testament to the rich diversity of Indonesian
					gastronomy. Whether you're seeking solace on a chilly
					evening, yearning for a taste of Indonesia's culinary
					heritage, or simply craving a nourishing meal, authentic
					Indonesian chicken soup is the answer. It's a soul-soothing
					elixir that reflects the warmth and sincerity of Indonesian
					cuisine.
				</div>
				<button className="spec-button">Order Now</button>
			</div>
		</div>
	);
}
