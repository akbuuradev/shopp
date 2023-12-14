import {IProduct} from "../../../IUser/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

 export interface ProductState {
    product: IProduct[]
}

const initialState: ProductState = {
    product: []
}

export const ProductSlice = createSlice({
    name: "PRODUCT",
    initialState,
    reducers: {
        getProduct(state, action: PayloadAction<IProduct[]>) {
            state.product = action.payload
    }
    }
})

export default ProductSlice.reducer
export const {getProduct} = ProductSlice.actions