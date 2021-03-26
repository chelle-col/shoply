import React from 'react';
import { useSelector } from 'react-redux';
import ItemDetails from './ItemDetails';

const ShopMart = () => {
    const mart = useSelector(st => st.mart.products);
    return (
        <>
        <h1> I am a Shop Mart</h1>
        {Object.entries(mart).map( i => <ItemDetails key={i[0]} itemArray={i} />)}
        </>
    )
}

export default ShopMart;