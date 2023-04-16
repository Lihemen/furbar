import toast from '@/lib/toast';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface WishList {
  wish_list: Product[];
}

const initialState: WishList = {
  wish_list: [],
};

const wishlist_reducer = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    add_to_wishlist(state, action: PayloadAction<Product>) {
      const in_list = state.wish_list.findIndex(
        (el) => el.id === action.payload.id
      );

      if (in_list >= 0) {
        toast('error', `${action.payload.name} already liked`);
        return;
      }

      state.wish_list = [...state.wish_list, action.payload];

      toast('success', `${action.payload.name} added to favorites`);
      return state;
    },

    remove_from_wishlist(state, action: PayloadAction<string>) {
      const in_list = state.wish_list.find((el) => el.id === action.payload);

      if (!in_list) {
        toast('error', 'Product not in wish list');
        return;
      }
      state.wish_list = state.wish_list.filter(
        (el) => el.id !== action.payload
      );

      toast('success', `${in_list.name} added to favorites`);
      return state;
    },

    clear_wishlist(state) {
      state.wish_list = [];

      return state;
    },
  },
});

export const { add_to_wishlist, clear_wishlist, remove_from_wishlist } =
  wishlist_reducer.actions;

export default wishlist_reducer.reducer;
