import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, changeAmount } from './CartActions'

const ItemDetails = ({ itemArray }) => {
    const [ amount, setAmount ] = useState(1)
    const [ id, item ] = itemArray;
    const dispatch = useDispatch();
    const cart = useSelector(st => st.cart)

    // const changeAmount = ( itemId, amount ) => dispatch({ type: "CHANGE_AMOUNT", amount, id: itemId});
    
    const handleClick = (e) => {
        setAmount( amount => amount + 1 );
        const itemId = e.target.id;
        const item = cart.filter( i => i.id === itemId);
        if( item.length === 0 ){
            dispatch( addToCart( itemId ));
        }
    }

    useEffect( ()=> {
        const item = cart.filter( i => i.id === id);
        if( item.length > 0 ){
            dispatch(changeAmount( id, amount ));
        }
        console.log(cart[0])
    }, [ amount ])

    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <img style={{width:'250px'}} src={item.image_url} alt='' />
            <div>
                <button onClick={handleClick} id={id}>${item.price}</button>
            </div>
        </div>
    )
}

export default ItemDetails;