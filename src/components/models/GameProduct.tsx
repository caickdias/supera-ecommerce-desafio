export type GameProduct = {
    id: number;    
    name: string;
    price: number;
    score: number;
    image: string;
}

export type CartGameProduct = GameProduct & {
    quantity: number;
}