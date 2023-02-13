import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}
	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const subtractCartItem = (cartItems, productToSubtract) => {
	const item = cartItems.find(
		(cartItem) => cartItem.id === productToSubtract.id
	);

	const decrementedCart = cartItems.map((cartItem) =>
		cartItem.id === item.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);

	return [...decrementedCart];
};

const deleteCartItem = (cartItems, productToDelete) => {
	const reducedCart = cartItems.filter(
		(item) => item.id !== productToDelete.id
	);
	return [...reducedCart];
};

export const CartContext = createContext({
	isCartOpen: false,
	setIsCartOpen: () => {},
	cartItems: [],
	addItemToCart: () => {},
	subtractItemFromCart: () => {},
	removeItemFromCart: () => {},
	cartCount: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartCount, setCartCount] = useState(0);

	useEffect(() => {
		const newCartCount = cartItems.reduce(
			(total, item) => total + item.quantity,
			0
		);
		setCartCount(newCartCount);
	}, [cartItems]);

	const addItemToCart = (productToAdd) => {
		setCartItems(addCartItem(cartItems, productToAdd));
	};

	const subtractItemFromCart = (productToSubtract) => {
		setCartItems(subtractCartItem(cartItems, productToSubtract));
	};

	const removeItemFromCart = (productToRemove) => {
		setCartItems(deleteCartItem(cartItems, productToRemove));
	};
	const value = {
		isCartOpen,
		setIsCartOpen,
		addItemToCart,
		subtractItemFromCart,
		removeItemFromCart,
		cartItems,
		cartCount,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
