import {IBasket} from "../../../IUser/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface BasketState {
    basket: IBasket[]
}

const initialState: BasketState = {
    basket: []
}

export const BasketSlice = createSlice({
    name: "BASKET",
    initialState,
    reducers: {
        addBasket(state, action: PayloadAction<IBasket>) {
            let bas = state.basket.find((el) => el.id === action.payload.id)
            if (bas) {
                 state.basket = state.basket.map((el) => el.id === action.payload.id ? {...el, count: el.count + 1} : el)
            } else {
                state.basket = [...state.basket, {...action.payload, count: 1}]
            }
        },
        delBasket(state, action: PayloadAction<IBasket>) {
            state.basket = state.basket.filter((el) => el.id !== action.payload.id)
        },
        decBasket(state, action: PayloadAction<IBasket>) {
          state.basket = state.basket.map((el) => el.id === action.payload.id && el.count > 1 ? {...el, count: el.count - 1} : el)
        }
    }
})

export default BasketSlice.reducer
export const {addBasket, delBasket, decBasket} = BasketSlice.actions