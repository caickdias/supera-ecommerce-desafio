import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';
import { theme } from '../../globals/styles/theme';

import { GameProduct } from '../models/GameProduct';
import { LinearGradient } from 'expo-linear-gradient';

import * as URIS  from '../../assets/png/index';

import AddToCart from '../../assets/svg/add-cart.svg';
import { QuantityInput } from '../QuantityInput';

import * as Utils from '../utils';

type Props = TouchableOpacityProps & {
    game: GameProduct;
}

export const GameCard = ({ game, ...props}: Props) => {
    
    const { CARD_BACK1: color1, CARD_BACK2: color2 } = theme.colors;
    
    const imageURI = Utils.formatGameNameToImage(game.image);
    
    const [quantity, setQuantity] = useState(1);
    
    const changeQuantityHandler = (quantity: number) => {
        setQuantity(quantity);
    }

    return(
        <TouchableOpacity  
            style={styles.container}     
            onPress={() => alert("detalhes")}            
            {...props}
        >
            <TouchableOpacity style={styles.addToCart}>                
                <AddToCart width={50} height={50} />
            </TouchableOpacity>

            <LinearGradient
                colors={[color1, color2]}
                style={styles.container}
            >
                <View style={styles.gameImage}>
                    <Image
                        style={styles.gameCover}
                        source={URIS[imageURI]}
                    />
                </View>
                
                <View style={styles.gameInfo}>
                    <View style={styles.gameInfoRow}>
                        <Text style={styles.textInfo}>
                            {game.name}
                        </Text>
                    </View>
                    
                    <View style={styles.gameScoreAndPrice}>
                        <Text style={styles.textInfo}>
                            Nota: {game.score}
                        </Text>
                        <Text style={styles.textInfo}>
                            { Utils.formatPrice(game.price) }
                        </Text>
                    </View>
                    
                    <View style={styles.gameQuantity}>
                        <Text style={styles.textInfo}>
                            Qtd:
                        </Text>
                        <QuantityInput onChangeQuantity={changeQuantityHandler} />
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>


 
    )
}