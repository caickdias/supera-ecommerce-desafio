import { CartGameProduct } from "../models/GameProduct";

export const formatGameNameToImage = (name: string) => {
    return name.replace(/-|.png/g, '');
}

export const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.',',')}`
}

export const getSubtotal = (games: CartGameProduct[]) => {
    return games.reduce((total, game) => total + (game.price * game.quantity), 0);
}

export const getShipping = (games: CartGameProduct[]) => {
    return getSubtotal(games) > 250
    ? 0
    : games.reduce((total, game) => total + (10 * game.quantity), 0);
}