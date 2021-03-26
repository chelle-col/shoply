import * as actions from './CartActions';
import * as types from './actionTypes';

describe('actions', () => {
    it('should create an action to add to cart', () => {
        const id = 1;
        const amount = 1;
        const expectedAction = {
           type: types.ADD_TO_CART,
           id,
           amount
        }
    
      expect(actions.addToCart(id)).toEqual(expectedAction)
    });

    it('should create an action to change amount', () => {
        const id = 1;
        const amount = 20;
        const expectedAction = {
            type: types.CHANGE_AMOUNT,
            id,
            amount
        }
        expect(actions.changeAmount(id, amount)).toEqual(expectedAction)
    });

    it('should create an action to change amount', () => {
        const id = 1;
        const expectedAction = {
        type: types.REMOVE_FROM_CART,
        id
        }

        expect(actions.remove(id)).toEqual(expectedAction)
    })
});