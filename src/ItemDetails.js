import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CartButton from './CartButton';

const ItemDetails = () => {
    const { id } = useParams();
    const item = useSelector( st => st.mart.products[id] );
    

    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <img style={{width:'250px'}} src={item.image_url} alt='' />
            <div>
                <CartButton id={id}  />
            </div>
        </div>
    )
}

export default ItemDetails;