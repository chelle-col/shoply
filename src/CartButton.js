import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeAmount, remove } from './CartActions'

const CartButton = ({ id })=>{
    const cart = useSelector( st => st.cart );
    const [ amount, setAmount ] = useState(useSelector(st => {
                const item = st.cart.filter( i => i.id===id );
                    if( item.length > 0 ){
                        return item[0].amount;
                    }
                    return 0;
                }));   

    const dispatch = useDispatch();

    const handleClick = (change) => {
        setAmount( amount + change );
        const item = cart.filter( i => i.id === id);
        if( item.length === 0 ){
            dispatch(addToCart( id ));
        }
    }

    useEffect( ()=> {
        const item = cart.filter( i => i.id === id);
        if( item.length > 0 ){
            dispatch( changeAmount( id, amount ));
        }else if( amount <= 0 ){
            dispatch( remove( id ));
        }
    }, [ amount ])


    //If its not in cart id === undefined
    
    return (
        <div>
            <button onClick={()=> handleClick(1)}>Up</button>
            <div>{amount}</div>
            <button onClick={()=> handleClick(-1)}>Down</button>
        </div>
    )
}

export default CartButton;