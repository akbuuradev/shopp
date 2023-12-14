import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import ProductCard from "../Product/ProductCard/productCard";

const Favorite = () => {
    const {favorite} = useAppSelector(state => state.FavoriteSlice)
    return (
        <div className="container flex flex-wrap gap-10 pt-16">
            {
                favorite.map((el) => (
                    <ProductCard el={el}/>
                ))
            }
        </div>
    );
};

export default Favorite;