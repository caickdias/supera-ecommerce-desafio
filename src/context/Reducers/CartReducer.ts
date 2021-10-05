import { CartGameProduct, GameProduct } from "../../components/models/Game";

type Actions = {
    type: string;
    payload: Payload;

}

type Payload = {
    game?: GameProduct | any;  
    id?: number | any;  
    quantity?: number | any;
}

type State = {
    items: CartGameProduct[];
}

export const initialState: State = {
    items: []
};

const reducer = (state: State, actions: Actions) => {
    const { game, quantity, id } = actions.payload;
    switch(actions.type){
        case 'add_to_cart':            
            if(state.items.some(item => item.name == game.name)) {
                return addToExistingItem(state, game, quantity);
            }     
            return createNewItem(state, game, quantity);                                           
        case 'remove_item':            
            return removeItem(state, id);
        case 'edit_quantity':            
            return editQuantity(state, id, quantity);
        
        default:
            return state;
    }
}

const addToExistingItem = (state: State, game: GameProduct, quantity: number) => {
    return { ...state,
        items: [...state.items.map(item => {
            if(item.id != game.id) return item;
            else return {
                ...item,
                quantity: item.quantity + quantity
            }                        
        })]                    
    } 
}

const createNewItem = (state: State, game: GameProduct, quantity: number) => {
    const newItem = {
        ...game,
        quantity
    }           
    return {
        ...state,
        items: [
            ...state.items,
            newItem,
        ]         
    };
}

const removeItem = (state: State, id:number) => {
    return {
        ...state,
        items: [...state.items
            .filter(item => item.id != id)
        ]
    }
}

const editQuantity = (state: State, id: number, quantity: number) => {
    return {
        ...state,
        items: [...state.items
            .map(item => {
                if(item.id != id) return item;
                else return {
                    ...item,
                    quantity,
                }
            })
        ]
    }
}
export default reducer;