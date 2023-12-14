import React from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {addBasket, decBasket, delBasket} from "../../store/Reducers/basketSlice";

const BasketTable = ({el}: any) => {

    const dispatch = useAppDispatch()

    return (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img src={el.images} width={150} alt=""/>
                </th>
                <td className="px-6 py-4">
                    {el.title}
                </td>
                <td className="px-6 py-4">
                    <div className="flex">
                        <button onClick={() => dispatch(decBasket(el))}>-</button>
                       <p className="m-2">{el.count}</p>
                        <button onClick={() => dispatch(addBasket(el))}>+</button>
                    </div>
                </td>
                <td className="px-6 py-4">
                    {el.price * el.count}
                </td>
                <td className="px-6 py-4">
                    <button type="button" onClick={() => dispatch(delBasket(el))}
                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                        Delete
                    </button>
                </td>
            </tr>
    );
};

export default BasketTable;