import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { addItemToCart, removeItemFromCart, subtractItemFromCart } =
		useContext(CartContext);

	const addProductToCart = () => addItemToCart(cartItem);
	const decrementItem = () => subtractItemFromCart(cartItem);
	const deleteFromCart = () => removeItemFromCart(cartItem);

	return (
		<div className="checkout-item-container">
			<img
				src={imageUrl}
				alt={`${name}`}
			/>
			<div className="item-details">
				<span className="name">{name}</span>
				<span>
					<button onClick={quantity === 1 ? deleteFromCart : decrementItem}>
						-
					</button>
				</span>
				<span className="quantity">{quantity}</span>
				<span>
					<button onClick={addProductToCart}>+</button>
				</span>
				<span className="price">${quantity * price}</span>
				<span>
					<button onClick={deleteFromCart}>X</button>
				</span>
			</div>
		</div>
	);
};

export default CheckoutItem;
