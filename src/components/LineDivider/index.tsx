import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

import { styles } from './styles';

type Props = {
    style ?: StyleProp<ViewStyle>;
}

export const LineDivider = ({style}: Props) => {
    return(
        <View style={[styles.line, style]}>            
        </View>
    )
}