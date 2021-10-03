import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, View, Text, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Cart from '../../assets/svg/cart-icon.svg';
import { theme } from '../../globals/styles/theme';

import { styles } from './styles';

type Props = TouchableOpacityProps & {    
    visible: boolean;
}

export const CartButtonModal = ({ visible, ...props }: Props) => {
    
    const { CARD_BACK1: color1, CARD_BACK2: color2 } = theme.colors;

    return(
        <>
            {   !visible &&
                <TouchableOpacity 
                    style={styles.iconContainer}
                    {...props}
                >
                    <View style={styles.nOfItems}>
                        <Text>2</Text>
                    </View>
                    <Cart width={40} height={40} />
                </TouchableOpacity>
            }
            
            <Modal
                visible={visible}                
                transparent
                animationType="slide"
            >
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>                    
                        <View style={[styles.modalContainer, {overflow: 'hidden'}]}>
                            <LinearGradient
                                colors={[color1, color2]}
                                style={styles.linearGradient}
                            >

                            </LinearGradient>
                        </View>                    
                </TouchableWithoutFeedback>
            </Modal>
        </>
    )
}