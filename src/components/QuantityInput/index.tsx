import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
    value?: number;
    onChangeQuantity: (quantity: number) => void;
}

export const QuantityInput = ({ value=1, onChangeQuantity }: Props) => {
    
    const [quantity, setQuantity] = useState(value);
    
    const changeValueHandler = (operation: string) => {
        if(operation == 'add'){
            setQuantity(quantity+1);
            onChangeQuantity(quantity+1);
        } else {
            setQuantity(Math.max(1, quantity-1));
            onChangeQuantity(Math.max(1, quantity-1));
        }
        
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.column} onPress={() => changeValueHandler('sub')}>
                <Text style={styles.text}>
                    -
                </Text>
            </TouchableOpacity>

            <View style={styles.number}>
                <Text style={styles.text}>
                    {quantity}
                </Text>
            </View>

            <TouchableOpacity style={styles.column} onPress={() => changeValueHandler('add')}>
                <Text style={styles.text}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}