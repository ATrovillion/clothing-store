import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

const Checkout = () => {
	const { cartItems } = useContext(CartContext);
	console.log(cartItems);
	return (
		<div className="checkout-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CheckoutItem
						key={item.id}
						cartItem={item}
					/>
				))}
			</div>
		</div>
	);
};

export default Checkout;
