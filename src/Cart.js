import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'reactstrap';
const Cart = () => {
    const products = useSelector( st => st.mart.products );//Object.entries(st.mart.products) );
    const cart = useSelector( st => st.cart );

    if( cart === undefined ){
        return <h1>Nothing in Cart</h1>
    }
    return (
        <Table >
            <thead >
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
                <tbody>
                {cart.map( i => (
                    <tr>
                        <td>{products[i.id].name}</td>
                        <td>{i.amount}</td>
                        <td>${products[i.id].price}</td>
                        <td>${i.amount * products[i.id].price}</td>
                    </tr>
                ))}
                </tbody>
        </Table>
    )
}

export default Cart;