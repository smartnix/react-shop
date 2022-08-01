import React from 'react';
import {OrderItem} from '../components/OrderItem';
import Menu from '../components/Menu';
import '../styles/Checkout.scss';

const Checkout = () => {
  return (
    <div className='Checkout'>
        <div className='Checkout-containter'>
            <h1 className='title' >My Order</h1>
            <div className='Checkout-content'>
                <div className="order">
                    <p>
                        <span>0.21.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>
                        $560.00
                    </p>
                </div>
            </div>
            <OrderItem/>
        </div>
    </div>
  )
}

export {Checkout}