import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import * as URIS from '../../assets/png';
import * as Utils from '../../utils';

import CartContext from '../../context/contexts';
import RemoveFromCart from '../../assets/svg/remove-cart-icon.svg';

import { CartGameProduct } from '../models/GameProduct';
import { QuantityInput } from '../QuantityInput';

type Props = {
    game: CartGameProduct;
}

export const CartItem = ({ game }: Props) => {
    
    const imageUrl = Utils.formatGameNameToImage(game.image);
    const { removeItem, editQuantity } = useContext(CartContext);
    
    const removeItemHandler = () => {           
        removeItem(game.id);
    }

    const editQuantityHandler = (quantity: number) => {
        editQuantity(game.id, quantity);
    }


    return(
        <View style={styles.container}>
            
            <View style={styles.gameImage}>
                <Image 
                    style={styles.image}                    
                    source={URIS[imageUrl]}
                />
            </View>

            <View style={styles.cartInfo}>
                <View style={styles.gameName}>
                    <Text style={styles.name}>
                        { game.name }
                    </Text>
                </View>

                <View style={styles.gamePrice}>
                    <Text style={styles.price}>
                        { Utils.formatPrice(game.price) }
                    </Text>

                    <Text style={styles.price}>
                        Qtd:
                    </Text>
                    <QuantityInput value={game.quantity} onChangeQuantity={editQuantityHandler} />
                </View>
            </View>                        

            <TouchableOpacity style={styles.removeItem} onPress={removeItemHandler}>
                <RemoveFromCart width={30} height={30} />
            </TouchableOpacity>

        </View>
    )
}