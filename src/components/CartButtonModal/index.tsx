import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text, Modal, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';

import { styles } from './styles';

import { theme } from '../../globals/styles/theme';
import { LineDivider } from '../LineDivider';
import { Button } from '../Button';

import * as Utils from '../utils';

import Cart from '../../assets/svg/cart-icon.svg';

import { CartGameProduct } from '../models/GameProduct';
import { CartItem } from '../CartItem';
import { CartItemList } from '../CartItemList';

type Props = TouchableOpacityProps & {    
    visible: boolean;
    onCancel: () => void;
}


const games: CartGameProduct[] = [
    {
        id: 1,
        name: 'Mortal Kombat',
        price: 190.10,
        score: 150,
        quantity: 1,
        image: 'horizon-zero-dawn.png',
    },
    {
        id: 2,
        name: 'Super Mario World',
        price: 9.70,
        score: 210,
        quantity: 1,
        image: 'fifa-18.png',
    },
    {
        id: 3,
        name: 'Crash',
        price: 20.10,
        score: 125,
        quantity: 1,
        image: 'horizon-zero-dawn.png',
    },
    {
        id: 4,
        name: 'Crash',
        price: 10.10,
        score: 125,
        quantity: 1,
        image: 'horizon-zero-dawn.png',
    },
]


export const CartButtonModal = ({ visible, onCancel, ...props }: Props) => {
    
    const { CARD_BACK1: color1, CARD_BACK2: color2 } = theme.colors;

    return(
        <>
            {   !visible &&
                <TouchableOpacity 
                    style={styles.iconContainer}
                    {...props}
                >
                    <View style={styles.nOfItems}>
                        <Text>
                            {games.length}
                        </Text>
                    </View>
                    <Cart width={40} height={40} />
                </TouchableOpacity>
            }
            
            <Modal
                visible={visible}                
                transparent
                animationType="slide"
            >                           
                <View style={[styles.modalContainer, {overflow: 'hidden'}]}>
                    <LinearGradient
                        colors={[color1, color2]}
                        style={styles.linearGradient}
                    >
                        <View style={styles.itemsList}>
                            <CartItemList data={games} />
                        </View>

                        <LineDivider />

                        <View style={styles.totalPriceArea}>
                            <View>
                                <View style={styles.priceRow}>
                                    <Text style={styles.priceText}>Subtotal: </Text>
                                    <Text style={styles.priceText}> { 
                                            Utils.formatPrice(
                                                Utils.getSubtotal(games)
                                            )
                                        }
                                    </Text>
                                </View>
                                <View style={styles.priceRow}>
                                    <Text style={styles.priceText}>Frete: </Text>
                                    <Text style={styles.priceText}> {
                                        Utils.formatPrice(
                                            Utils.getShipping(games)
                                        )
                                    }</Text>
                                </View>

                                <LineDivider style={styles.priceSeparator} />                                

                                <View style={styles.priceRow}>
                                    <Text style={styles.priceText}>Total: </Text>
                                    <Text style={styles.priceText}> R$ 189,49</Text>
                                </View>
                                
                                
                            </View>
                        </View>

                        <View style={styles.buttonsArea}>
                            <Button title="Cancelar" onPress={onCancel} />
                            <Button title="Finalizar" />
                        </View>
                    

                    </LinearGradient>
                </View>                                    
            </Modal>
        </>
    )
}