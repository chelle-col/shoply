import React from 'react';
import { useSelector } from 'react-redux';
import ItemSmall from './ItemSmall';

const ShopMart = () => {
    const products = useSelector(st => st.mart.products);
    return (
        <>
            {Object.entries(products).map( i => <ItemSmall key={i[0]} itemArray={i} />)}
        </>
    )
}

export default ShopMart;