import { createContext, useContext, useState } from "react";

const OrderContext = createContext(undefined);

export const OrderProvider = ({ children }) => {
	const [order, setOrder] = useState({
		date: "01/01/2024",
		time: "",
		guest: "",
		occasion: "",
		orderedmenu: [],
	});

	return (
		<OrderContext.Provider
			value={{
				order,
				setOrder,
				printOrder: () => console.log(order),
			}}
		>
			{children}
		</OrderContext.Provider>
	);
};

export const useOrder = () => useContext(OrderContext);
