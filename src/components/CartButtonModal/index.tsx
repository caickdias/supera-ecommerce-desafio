import React, { useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, TouchableOpacityProps, View, Text, Modal, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';

import { styles } from './styles';

import CartContext from '../../context/contexts';

import { theme } from '../../globals/styles/theme';
import { LineDivider } from '../LineDivider';
import { Button } from '../Button';

import * as Utils from '../../utils';

import Cart from '../../assets/svg/cart-icon.svg';

import { CartItemList } from '../CartItemList';

type Props = TouchableOpacityProps & {    
    visible: boolean;
    onCancel: () => void;
}

export const CartButtonModal = ({ visible, onCancel, ...props }: Props) => {
    
    const { CARD_BACK1: color1, CARD_BACK2: color2 } = theme.colors;
    const { cart, removeItem } = useContext(CartContext);                
    
    return(
        <>
            {   !visible &&
                <TouchableOpacity 
                    style={styles.iconContainer}
                    {...props}
                >
                    <View style={styles.nOfItems}>
                        <Text>
                            {Utils.getNumberOfItems(cart.items)}
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
                            <CartItemList data={cart.items} />
                        </View>

                        <LineDivider />

                        <View style={styles.totalPriceArea}>
                            <View>
                                <View style={styles.priceRow}>
                                    <Text style={styles.priceText}>Subtotal: </Text>
                                    <Text style={styles.priceText}> { 
                                            Utils.formatPrice(
                                                Utils.getSubtotal(cart.items)
                                            )
                                        }
                                    </Text>
                                </View>
                                <View style={styles.priceRow}>
                                    <Text style={styles.priceText}>Frete: </Text>
                                    <Text style={styles.priceText}> {
                                        Utils.formatPrice(
                                            Utils.getShipping(cart.items)
                                        )
                                    }</Text>
                                </View>

                                <LineDivider style={styles.priceSeparator} />                                

                                <View style={styles.priceRow}>
                                    <Text style={styles.priceText}>Total: </Text>
                                    <Text style={styles.priceText}>{
                                        Utils.formatPrice(
                                            Utils.getSubtotal(cart.items) + Utils.getShipping(cart.items)
                                        )
                                    }</Text>
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