import React from 'react';
import { CartGameProduct } from '../components/models/GameProduct';

const CartContext = React.createContext<CartGameProduct[] | any>([]);

export default CartContext;