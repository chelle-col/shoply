let reduxStore = require( "./shoppingData.json" );

const INITIAL_STATE = {
    mart: reduxStore,
    cart: []
}

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "ADD":
        return { ...state, 
            cart: 
                [...state.cart, 
                    { id: action.id, 
                        amount: action.amount} 
                ] 
            };

      case "CHANGE_AMOUNT":
          return{...state,
            cart: state.cart.map( (item) => {
                if( item.id !== action.id ){
                    return item;
                }
                return {
                    ...item,
                    amount: action.amount
                };
            })}
  
      case "REMOVE":
        return { ...state, 
            cart: state.cart.filter( (item)=> item.id !== action.id)
        }
  
      default:
        return state;
    }
  }
  
  export default rootReducer;