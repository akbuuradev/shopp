import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ProductSlice from "./Reducers/productSlice";
import BasketSlice from "./Reducers/basketSlice";
import FavoriteSlice from "./Reducers/favoriteSlice";

const rootReducer = combineReducers({
    ProductSlice, BasketSlice, FavoriteSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type AppState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]