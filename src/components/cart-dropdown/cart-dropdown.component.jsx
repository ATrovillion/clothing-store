import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();
	const isOpen = useContext(CartContext);

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

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
				<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
