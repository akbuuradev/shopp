import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppState} from "../components/store/store";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector