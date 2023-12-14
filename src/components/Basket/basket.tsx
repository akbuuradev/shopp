import React from 'react';
import {useAppSelector} from "../../hooks/useAppSelector";
import BasketTable from "./BasketTable/basketTable";

const Basket = () => {
    const {basket} = useAppSelector(state => state.BasketSlice)
    return (
        <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        IMG
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Count
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                {
                    basket.map((el: any) => (
                        <BasketTable el={el}/>
                    ))
                }
            </table>
        </div>
    );
};

export default Basket;