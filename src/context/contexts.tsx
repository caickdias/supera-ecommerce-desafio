import React, { useState } from 'react';
import { CartGameProduct } from '../components/models/GameProduct';



const defaultValue = [
    {
        id: 0,
        name: '',
        price: 0,
        score: 0,
        quantity: 1,
        image: '',
    }
];

const CartContext = React.createContext<CartGameProduct[]>(defaultValue);

export default CartContext;