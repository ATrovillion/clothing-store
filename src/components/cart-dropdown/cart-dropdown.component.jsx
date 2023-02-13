import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const isOpen = useContext(CartContext);

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						cartItem={item}
					/>
				))}
			</div>
			<div className="button-container">
				<Link to="checkout">
					<Button>CHECKOUT</Button>
				</Link>
			</div>
		</div>
	);
};

export default CartDropdown;
