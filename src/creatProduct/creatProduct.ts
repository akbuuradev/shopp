import {AppDispatch} from "../components/store/store";
import axios from "axios";
import {getProduct} from "../components/store/Reducers/productSlice";

export const fetching = () => async (dispatch: AppDispatch) => {
    try {
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products`)
        dispatch(getProduct(res.data))
    } catch (err: any) {
        dispatch(err.message)
    }
}