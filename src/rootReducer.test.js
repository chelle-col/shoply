import reducer from './rootReducer';
import * as types from './actionTypes';

let mart = require('./shoppingData.json');

describe('root reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(
        {
            "cart": [],
            "mart" : mart
        }
      )
    });

    it('should handle ADD', () => {
        expect(
          reducer({cart: []}, {
            type: types.ADD_TO_CART,
            id: 1,
            amount: 1
          })
        ).toEqual(
            {
                "cart": [{ id: 1, amount: 1 }]
            }
        );
    });

    it('should handle CHANGE_AMOUNT', () => {
        expect(
          reducer({cart: [{ id: 1, amount: 1 }]}, {
            type: types.CHANGE_AMOUNT,
            id: 1,
            amount: 20
          })
        ).toEqual(
            {
                "cart": [{ id: 1, amount: 20 }]
            }
        );
    });

    it('should handle REMOVE', () => {
        expect(
          reducer({cart: [{ id: 1, amount: 1 }]}, {
            type: types.REMOVE_FROM_CART,
            id: 1
          })
        ).toEqual(
            {
                "cart": []
            }
        );
    });
});

