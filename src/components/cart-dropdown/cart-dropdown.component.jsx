import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
	const isOpen = useContext(CartContext);
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				<Button>GO TO CHECKOUT</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
