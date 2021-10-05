import { GameProduct } from '../components/models/Game'
import { CartGameProduct } from "../components/models/Game";

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

export const sort = (games: GameProduct[], sortBy: string, order: string) => {
    const sortedGames = games.sort((a, b) => a[sortBy] - b[sortBy] || a[sortBy] > b[sortBy]);
    
    return order == 'asc'
            ? sortedGames
            : sortedGames.reverse();
}

export const getNumberOfItems = (games: CartGameProduct[]) => {
    return games.reduce((quantity, game) => quantity + game.quantity, 0);
}