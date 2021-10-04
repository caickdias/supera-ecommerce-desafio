import React, { useState, ReactNode } from 'react';
import CartContext from './contexts';

import { CartGameProduct } from '../components/models/GameProduct';

type Props = {
    children: ReactNode;
}

export const CartProvider = ({ children }: Props) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <CartContext.Provider value={ cartItems }>
            { children }
        </CartContext.Provider>
    )
}