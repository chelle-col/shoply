import React from 'react';
import { useHistory } from 'react-router';
import CartButton from './CartButton';

const ItemSmall = ({ itemArray }) => {
    const history = useHistory();
    const [ id, item ] = itemArray;

    const handleClick = () => {
        history.push(`/item/${id}`)
    }

    return (
        <>
            <div onClick={handleClick} >
                <h3>{item.name}</h3>
            </div>
             <CartButton id={id} />
        </>
    )
}

export default ItemSmall;