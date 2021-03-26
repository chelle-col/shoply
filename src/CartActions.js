import * as types from './actionTypes';

export const addToCart = ( id ) => (
    { 'type': types.ADD_TO_CART, id, amount: 1 }
    );

export const changeAmount = ( id, amount ) => (
    { type: types.CHANGE_AMOUNT, id, amount }
    );

export const remove = ( id ) => (
    { type: types.REMOVE_FROM_CART, id}
    );