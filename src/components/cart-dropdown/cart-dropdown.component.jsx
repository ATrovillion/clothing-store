import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { selectCartItems } from '../../store/cart/cart.selector';

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './cart-dropdown.styles.jsx';

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem
							key={item.id}
							cartItem={item}
						/>
					))
				) : (
					<EmptyMessage>Add some items to your cart!</EmptyMessage>
				)}
			</CartItems>
			{cartItems.length ? (
				<div className="button-container">
					<Button
						type={BUTTON_TYPE_CLASSES.base}
						onClick={goToCheckoutHandler}
					>
						CHECKOUT
					</Button>
				</div>
			) : (
				<span></span>
			)}
		</CartDropdownContainer>
	);
};

export default CartDropdown;
