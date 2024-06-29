import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducer/cartreducer"; // import cartSlice

export default configureStore({
    reducer: {
        cart: cartSlice.reducer // use cartSlice.reducer
    }
});
