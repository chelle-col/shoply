import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardBody } from 'reactstrap';
import CartButton from './CartButton';
const Cart = () => {
    const products = useSelector( st => st.mart.products );//Object.entries(st.mart.products) );
    const cart = useSelector( st => st.cart );
    const STYLE = {
        width: '20px',
        display: 'inline',
    }
    const CLASSNAME = 'col-sm';

    if( cart === undefined ){
        return <h1>Nothing in Cart</h1>
    }

    return (
        <Card className='container'>
            <CardBody >
                    <div style={STYLE} className={CLASSNAME}>Name</div>
                    <div style={STYLE} className={CLASSNAME}>Amount</div>
                    <div style={STYLE} className={CLASSNAME}>Price</div> 
                    <div style={STYLE} className={CLASSNAME}>Subtotal</div>
            </CardBody>
            {cart.map( i => (
                <CardBody key={i.id}>
                    <div style={STYLE} className={CLASSNAME}>{products[i.id].name}</div>
                    <div style={STYLE} className={CLASSNAME}>{i.amount}</div>
                    <div style={STYLE} className={CLASSNAME}>${products[i.id].price}</div>
                    <div style={STYLE} className={CLASSNAME}>${i.amount * products[i.id].price}</div>
                    <CartButton id={i.id} />
                </CardBody>
            ))}  
            <CardBody>
                <div style={STYLE}>Total: {cart.reduce( (a, i) => products[i.id].price * i.amount + a, 0)}</div>
            </CardBody> 
        </Card>
    )
}

export default Cart;