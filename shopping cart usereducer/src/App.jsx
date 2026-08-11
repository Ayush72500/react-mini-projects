import { useReducer } from "react";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 60000
  },
  {
    id: 2,
    name: "Samsung S24",
    price: 70000
  }
];


const initialState = {
  cart: []
};


function reducer(state, action) {

  switch (action.type) {

    case "ADD_TO_CART": {

      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {

        return {
          ...state,

          cart: state.cart.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  quantity: product.quantity + 1
                }
              : product
          )
        };
      }

    
      return {
        ...state,

        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1
          }
        ]
      };
    }


    case "INCREASE_QTY":

      return {
        ...state,

        cart: state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity + 1
              }
            : product
        )
      };



    case "DECREASE_QTY": {

      const product = state.cart.find(
        (product) => product.id === action.payload
      );

    
      if (product.quantity === 1) {

        return {
          ...state,

          cart: state.cart.filter(
            (product) => product.id !== action.payload
          )
        };
      }

     
      return {
        ...state,

        cart: state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity - 1
              }
            : product
        )
      };
    }


   
    case "REMOVE_FROM_CART":

      return {
        ...state,

        cart: state.cart.filter(
          (product) => product.id !== action.payload
        )
      };



    case "CLEAR_CART":

      return {
        ...state,

        cart: []
      };



    default:
      return state;
  }
}




function App() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );


  const total = state.cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );


  return (
    <div>

      <h1>Shopping Cart</h1>

      <h2>Products</h2>

      {products.map((product) => (

        <div key={product.id}>

          <h3>{product.name}</h3>

          <p>₹{product.price}</p>

          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product
              })
            }
          >
            Add to Cart
          </button>

        </div>
      ))}


      <hr />


      <h2>Cart</h2>

      {state.cart.length === 0 ? (

        <p>Cart is empty</p>

      ) : (

        state.cart.map((product) => (

          <div key={product.id}>

            <h3>{product.name}</h3>

            <p>
              Price: ₹{product.price}
            </p>

            <p>
              Quantity: {product.quantity}
            </p>


            <button
              onClick={() =>
                dispatch({
                  type: "DECREASE_QTY",
                  payload: product.id
                })
              }
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE_QTY",
                  payload: product.id
                })
              }
            >
              +
            </button>


            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product.id
                })
              }
            >
              Remove
            </button>

          </div>

        ))

      )}



      <h2>
        Total: ₹{total}
      </h2>


      <button
        onClick={() =>
          dispatch({
            type: "CLEAR_CART"
          })
        }
      >
        Clear Cart
      </button>

    </div>
  );
}


export default App;