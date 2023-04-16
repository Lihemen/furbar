import toast from '@/lib/toast';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface CartItem extends Product {
  quantity: number;
}

interface InitialStateProps {
  cart: CartItem[];
}

const initialState: InitialStateProps = {
  cart: [],
};

const cart_reducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add_to_cart: (state, action: PayloadAction<CartItem>) => {
      const in_cart = state.cart.findIndex((el) => el.id === action.payload.id);

      if (in_cart >= 0) {
        toast('error', `${action.payload.name} already in cart`);
        return;
      }

      state.cart = [...state.cart, action.payload];
      toast('success', `${action.payload.name} added to cart`);

      return state;
    },

    remove_from_cart: (state, action: PayloadAction<{ id: string }>) => {
      const in_cart = state.cart.findIndex((el) => el.id === action.payload.id);

      if (in_cart < 0) {
        toast('error', `Product is not in your cart`);
        return;
      }

      state.cart = state.cart.filter((el) => el.id !== action.payload.id);

      return state;
    },

    add_quantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((el) => {
        if (el.id === action.payload) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        }

        return el;
      });

      return state;
    },

    decrease_quantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((el) => {
        if (el.id === action.payload && el.quantity > 1) {
          return {
            ...el,
            quantity: el.quantity - 1,
          };
        }

        return el;
      });
      return state;
    },

    clear_cart: (state) => {
      state.cart = [];

      return state;
    },
  },
});

export const {
  add_to_cart,
  add_quantity,
  clear_cart,
  decrease_quantity,
  remove_from_cart,
} = cart_reducer.actions;

export default cart_reducer.reducer;
