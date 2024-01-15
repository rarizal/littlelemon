import React, { useState } from "react";
import DatePicker from "react-datepicker";
import arrow from "../assets/images/right-arrow.png";
import "react-datepicker/dist/react-datepicker.css";
import { useOrder } from "../contexts/OrderContext";

export default function OrderSummary() {
	const { order, setOrder, printOrder } = useOrder();

	const [bookX, setBookX] = useState(["01/01/2024-18:00"]);

	const [isFalse, setIsFalse] = useState(false);

	function isAvailable(time) {
		const check = bookX.some((el) => el === `${order.date}-${time}`);

		if (check) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<div className="sum-and-cont">
			<div className="order-sum">
				<div className="menu-title">
					<div>Order Details</div>
					<div className="separator-top"></div>
				</div>
				<div className="order-details">
					<div>
						<div className="order-sum-title">Date</div>
						<div>
							<DatePicker
								className="options"
								selected={new Date(order.date)}
								onChange={(date) => {
									const formattedDate =
										date.toLocaleDateString("en");
									// console.log("Variable only", formattedDate);
									setOrder({
										...order,
										date: formattedDate.toString(),
									});
								}}
							/>
						</div>
					</div>
					<div>
						<div
							className="order-sum-title"
							onClick={() => isAvailable("18:00")}
						>
							Time{" "}
						</div>
						<select
							className="options"
							onChange={(e) => {
								setOrder({
									...order,
									time: e.target.value.toString(),
								});
								setIsFalse(!isFalse);
							}}
						>
							<option
								value="17:00"
								disabled={isAvailable("17:00")}
							>
								17:00
							</option>
							<option
								value="18:00"
								disabled={isAvailable("18:00")}
							>
								18:00
							</option>
							<option
								value="19:00"
								disabled={isAvailable("19:00")}
							>
								19:00
							</option>
							<option
								value="20:00"
								disabled={isAvailable("20:00")}
							>
								20:00
							</option>
							<option
								value="21:00"
								disabled={isAvailable("21:00")}
							>
								21:00
							</option>
							<option
								value="22:00"
								disabled={isAvailable("22:00")}
							>
								22:00
							</option>
						</select>
					</div>
					<div>
						<div className="order-sum-title">Guests</div>
						<select
							className="options"
							onChange={(e) =>
								setOrder({ ...order, guest: e.target.value })
							}
						>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</div>
					<div>
						<div
							className="order-sum-title"
							onClick={() => {
								console.log(bookX);
							}}
						>
							Occasion
						</div>
						<select
							className="options"
							onChange={(e) =>
								setOrder({ ...order, occasion: e.target.value })
							}
						>
							<option value="Anniversary">Anniversary</option>
							<option value="Birthday">Birthday</option>
						</select>
					</div>
				</div>
			</div>
			<div
				className="cont-button"
				onClick={() => {
					printOrder();
					setBookX([...bookX, `${order.date}-${order.time}`]);
				}}
			>
				<img src={arrow} alt="Arrow Button" width="100"></img>
				<div>Submit Reservation</div>
			</div>
		</div>
	);
}
