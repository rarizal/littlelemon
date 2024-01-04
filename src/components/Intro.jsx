import React from "react";
import nasgor from "../assets/images/nasgor.webp";
import rendang from "../assets/images/rendang.png";
import sup from "../assets/images/sup-buntut.jpg";
import rujak from "../assets/images/rujak.jpg";

export default function Intro() {
	return (
		<div className="about">
			<div className="abt-title">
				Satisfy your tummy <br /> Fill your heart{" "}
			</div>
			<div className="abt-image-top">
				<img src={nasgor} alt="Ayam Goreng" />
				<img src={rendang} alt="Ayam Goreng" />
			</div>
			<div className="abt-image-bottom">
				<img src={sup} alt="Ayam Goreng" />
				<div className="intro-text">
					At our authentic Indonesian restaurant, every visit is an
					opportunity to celebrate the rich cultural heritage and
					culinary traditions of Indonesia. Experience the warmth of
					our hospitality and the joy of discovering the true essence
					of Indonesian cuisine. <br />
					Selamat makan! (Enjoy your meal!)
				</div>
				<img src={rujak} alt="Ayam Goreng" />
			</div>
		</div>
	);
}
