import React, { useState } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

const Cart = props => {

    const cartItems = <ul className={classes['cart-item']} >
        {
            [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)
        }
    </ul>

    const cartCloseHandler = () => {
        props.onCloseCart(true);
    }
    console.log(props);

    return (

        <Modal onClose={props.onCloseCart} >
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <Button className={classes['button-alt']} onClick={props.onCloseCart}>Close</Button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;