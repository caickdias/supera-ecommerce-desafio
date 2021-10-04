import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, StyleProp, ViewProps, Text } from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    style?: StyleProp<ViewProps>;
}

export const Button = ({ title, style, ...props }: Props) => {
    return(
        <TouchableOpacity 
            style={[styles.container, style]}
            {...props}
        >
            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}