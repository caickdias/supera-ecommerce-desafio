import React, { ReactNode, useReducer } from 'react';
import CartContext from '../contexts';

import reducer, { initialState } from '../Reducers/CartReducer';
import { ADD_TO_CART, EDIT_QUANTITY, REMOVE_ITEM } from '../Actions/CartActions';

import { GameProduct } from '../../components/models/Game';

type Props = {
    children: ReactNode;
}

type GameProps = {
    game: GameProduct;
    quantity: number;
}

export const CartProvider = ({ children }: Props) => {
    const [cart, dispatch] = useReducer(reducer, initialState);
        
    const addToCart = (game: GameProduct, quantity: number) => {        
        dispatch({ type: ADD_TO_CART, payload: {game, quantity} });
    }

    const removeItem = (id: number) => {        
        dispatch({ type: REMOVE_ITEM, payload: {id} });
    }

    const editQuantity = (id: number, quantity: number) => {
        dispatch({ type: EDIT_QUANTITY, payload: {id, quantity} });
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, editQuantity }}>
            { children }
        </CartContext.Provider>
    )
}