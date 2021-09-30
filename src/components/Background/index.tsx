import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../globals/styles/theme';

type Props = {
    children: ReactNode;
}

export const Background = ({ children }: Props) => {
    return(
        <LinearGradient
        colors={[theme.colors.BACKGROUND_1, theme.colors.BACKGROUND_2]}
        style={styles.container}
        >
            {children}
        </LinearGradient>
    );
}