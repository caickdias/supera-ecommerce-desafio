import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

import Score from '../../assets/svg/score.svg';
import Price from '../../assets/svg/price-neutral.svg';
import Alph from '../../assets/svg/alph-neutral.svg';
import { theme } from '../../globals/styles/theme';

type Props = TouchableOpacityProps & {
    icon: string;
    isSelected: boolean;
}

export const Category = ({ icon, isSelected=false, ...props }: Props) => {
    
    const Icon = 
        icon == 'score' ? Score
        : icon == 'price' ? Price
        : Alph;
    
    return(
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: isSelected ? theme.colors.PRIMARY : '#c4c4c4'}]}
            {...props}
        >
            <Icon />
        </TouchableOpacity>
    );
}