import React from 'react';
import {AiFillHeart} from "react-icons/ai";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {addBasket} from "../../store/Reducers/basketSlice";
import {BsFillBasket3Fill} from "react-icons/bs";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {addFavorite} from "../../store/Reducers/favoriteSlice";

const ProductCard = ({el}: any) => {

    const dispatch = useAppDispatch()
    const {basket} = useAppSelector(state => state.BasketSlice)
    const {favorite} = useAppSelector(state => state.FavoriteSlice)
    const bas = basket.some(some => some.id === el.id)
    const heart = favorite.some(some => some.id === el.id)

    return (
        <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 border-black">
            <a href="#">
                <img className="rounded-t-lg" src={el.images} alt=""/>
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}</p>
                <a href="#"
                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {el.price} $
                </a>
                {
                    bas ?
                        <button type="button"
                                  className="ml-8 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <BsFillBasket3Fill/>
                    </button>
                        :
                        <button type="button" onClick={() => dispatch(addBasket(el))}
                                  className="ml-8 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Basket
                    </button>
                }
                <button type="button" onClick={() => dispatch(addFavorite(el))}
                        className="ml-6 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    <AiFillHeart className={heart ? "text-red-700" : "text-white"}/>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;