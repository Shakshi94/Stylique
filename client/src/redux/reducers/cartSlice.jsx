import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  tempItems:[],
  totalPrice:0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addToCart: (state, action) => {
        const { _id, selectedSize } = action.payload;
      
        const existingitem = state.items.find(
          item => item._id === _id && item.selectedSize === selectedSize
        );
      
        if (existingitem) {
          existingitem.quantity += 1;
        } else {
          state.items.push({ ...action.payload, quantity: 1 });
        }
      
        state.tempItems = [...state.items];
        state.totalPrice = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },
      
      updateTempQuantity: (state,action) =>{
        const { id, quantity, selectedSize } = action.payload;

        const tempItem = state.tempItems.find(
          item => item._id === id && item.selectedSize === selectedSize
        );
        const cartItem = state.items.find(
          item => item._id === id && item.selectedSize === selectedSize
        );
      
        if (tempItem) {
          tempItem.quantity = quantity;
        }
      
        if (cartItem) {
          cartItem.quantity = quantity;
        }
      
        state.totalPrice = state.tempItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },

      removeCart: (state,action)=>{
        const {id,selectedSize } = action.payload;
        state.items=state.items.filter(item => !(item._id === id && item.selectedSize === selectedSize));
        state.tempItems=[...state.items];

        state.totalPrice = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      }

  },
});

export const {addToCart,removeCart,updateTempQuantity} = cartSlice.actions;
export default cartSlice.reducer;
