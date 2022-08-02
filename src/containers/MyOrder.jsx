import React, { useContext } from 'react';
import {OrderItem} from '../components/OrderItem';
import '../styles/MyOrder.scss';
import flecha from '@icons/flechita.svg';
import { AppContext } from '../context/AppContext';



const MyOrder = () => {

	const {state} = useContext(AppContext);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flecha} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{
					state.cart.map(item =>(
						
						<OrderItem product = {product} key={`orderItem-${product.id}`}/>
					))
				}

				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export  {MyOrder};