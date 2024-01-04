import React from "react";

export default function Testimonial() {
	let data = [
		{
			pict: "user1",
			star: "★★★★★",
			review: "The cozy ambiance, combined with the delicious smells coming from the kitchen, make it a perfect place to unwind and enjoy authentic Indonesian cuisine",
		},
		{
			pict: "user2",
			star: "★★★★",
			review: "I love dining at the Indonesian restaurant because it feels like a culinary hug. The cozy interiors, soothing music, and the delectable flavors of Indonesian dishes create a sense of comfort and contentment that keeps me coming back.",
		},
		{
			pict: "user3",
			star: "★★★★★",
			review: "Its warm and welcoming ambiance instantly made me feel at ease, and the sumptuous Indonesian dishes served there brought a sense of comfort that surpassed my expectations        ",
		},
		{
			pict: "user4",
			star: "★★★★★",
			review: "The staff's friendly hospitality and the aroma of traditional Indonesian spices create a truly inviting experience.",
		},
	];

	return (
		<div className="testimonials">
			{data.map((item) => (
				<div className="testi-card">
					<img
						src={require(`../assets/images/${item.pict}.jpg`)}
						alt="User Profile"
					/>
					<div className="testi-star">{item.star}</div>
					<div className="testi-text">{item.review}</div>
				</div>
			))}
		</div>
	);
}
