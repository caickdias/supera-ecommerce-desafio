import React from 'react';
import { CartGameProduct } from '../components/models/Game';

const CartContext = React.createContext<CartGameProduct[] | any>([]);

export default CartContext;