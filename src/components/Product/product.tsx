import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {fetching} from "../../creatProduct/creatProduct";
import {useAppSelector} from "../../hooks/useAppSelector";
import ProductCard from "./ProductCard/productCard";

const Product = () => {

    const {product} = useAppSelector(state => state.ProductSlice)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetching())
    }, [])


    return (
        <div className="">
       <div className="flex gap-16 flex-wrap container pt-10">
           {
               product?.map((el: any) => (
                   <ProductCard el={el}/>
               ))
           }
       </div>
        </div>
    );
};

export default Product;