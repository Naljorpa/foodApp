import React, { useState, useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length >0;
    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item, amount: 1});
       
    }

    const cartItems = <ul className={classes['cart-item']} >
        {
            cartCtx.items.map((item) => (
                <CartItem
                key= {item.id}
                name= {item.name}
                amount ={item.amount}
                price={item.price}
                onRemove = {cartItemRemoveHandler.bind(null,item.id)}
                onAdd = {cartItemAddHandler.bind(null,item)}
                />
            ))
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
            <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <Button className={classes['button-alt']} onClick={props.onCloseCart}>Close</Button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;