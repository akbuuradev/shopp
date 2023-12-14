import {IFavorite} from "../../../IUser/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface FavoriteState {
    favorite: IFavorite[]
}

const initialState: FavoriteState = {
    favorite: []
}

export const FavoriteSlice = createSlice({
    name: "FAVORITE",
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<IFavorite>) {
            let fav = (state.favorite.find((el) => el.id === action.payload.id))
            if (fav) {
                state.favorite = state.favorite.filter((el) => el.id !== action.payload.id)
            } else {
                state.favorite = [...state.favorite, action.payload]
            }
        }
    }
})

export default FavoriteSlice.reducer
export const {addFavorite} = FavoriteSlice.actions