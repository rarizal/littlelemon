import React from "react";
import motorbike from "../assets/images/motorbike.png";
import table from "../assets/images/table.png";

export default function Menus() {
	const data = [
		{
			title: "Oseng-Oseng Kacang",
			price: 10.5,
			image: "bean.jpeg",
			desc: "This stir fry is packed with protein and fiber from the beans, and it can be customized with your favorite seasonings and spices. It can be enjoyed as a side dish or a main course, and it is perfect for vegetarians or anyone looking for a healthy and satisfying meal.",
		},
		{
			title: "Sop Buntut",
			price: 21.99,
			image: "sup-buntut.jpg",
			desc: "Oxtail soup is a flavorful and hearty soup made from the tail of the ox or cow. The oxtails are simmered slowly with aromatic vegetables, herbs, and spices to create a rich and savory broth.",
		},
		{
			title: "Mie Ayam Jamur",
			price: 12.99,
			image: "mie-ayam.jpeg",
			desc: "Chicken noodles is a delicious and comforting dish consisting of tender chicken pieces combined with cooked noodles.",
		},
		{
			title: "Soto Lamongan",
			price: 15.0,
			image: "soto.jpeg",
			desc: "Turmeric chicken soup is a vibrant and flavorful soup infused with the golden spice turmeric. Tender chicken pieces are simmered in a broth enriched with turmeric, garlic, ginger, and other aromatic spices.",
		},
		{
			title: "Gado Peanut Salad",
			price: 15.99,
			image: "gado.jpeg",
			desc: "Peanut salad is a delightful and satisfying dish that features a combination of crisp vegetables, tossed with a flavorful peanut dressing.",
		},
		{
			title: "Bakso Besar",
			price: 8.99,
			image: "bakso.webp",
			desc: "Meatball soup is a comforting and satisfying dish consisting of tender meatballs cooked in a flavorful broth. The meatballs, typically made from ground beef, pork, or a combination of meats, are seasoned with herbs, spices, and other flavorings.",
		},
		{
			title: "Taichan Satay",
			price: 11.0,
			image: "sate.webp",
			desc: "Chicken satay is a popular and flavorful dish consisting of skewered and grilled chicken marinated in a delicious blend of spices and seasonings.",
		},
		{
			title: "Charcoal Chicken",
			price: 5.99,
			image: "ayam-bakar.jpeg",
			desc: "The chicken is marinated in a flavorful blend of herbs, spices, and seasonings to enhance its taste. The charcoal cooking method gives the chicken a distinctive smoky flavor and crispy outer layer, while keeping the meat juicy and tender on the inside.",
		},
	];
	return (
		<div className="menus">
			<div className="menu-title">
				<div>Our Menus</div>
				<div className="separator-top"></div>
			</div>
			<div className="menu-main">
				{data.map((item) => (
					<div className="menu-card" key={item.title}>
						<img
							src={require(`../assets/images/${item.image}`)}
							alt="Oseng Buncis"
						/>
						<div className="menu-item-right">
							<div className="menu-addbutton">
								<div>
									<div className="menu-item-title">
										{item.title}
									</div>
									<div className="menu-item-price">
										${item.price.toFixed(2)}
									</div>
								</div>
								<button className="menu-button-add">Add</button>
							</div>
							<div className="menu-item-desc">{item.desc}</div>
						</div>
					</div>
				))}
			</div>
			<div className="menu-icons">
				<img src={motorbike} alt="Motorbike Icon" />
				<img src={table} alt="Table Icon" />
			</div>
			<div className="menu-note">
				Online Delivery and Reservation Available.
			</div>
			<div className="separator-bot"></div>
		</div>
	);
}
