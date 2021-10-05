import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

import Score from '../../assets/svg/score.svg';
import ScoreAsc from '../../assets/svg/score-asc.svg';
import ScoreDesc from '../../assets/svg/score-desc.svg';

import Price from '../../assets/svg/price.svg';
import PriceAsc from '../../assets/svg/price-asc.svg';
import PriceDesc from '../../assets/svg/price-desc.svg';

import Alph from '../../assets/svg/alph.svg';
import AlphAsc from '../../assets/svg/alph-asc.svg';
import AlphDesc from '../../assets/svg/alph-desc.svg';

import { theme } from '../../globals/styles/theme';

type Props = TouchableOpacityProps & {
    icon: 'score' | 'price' | 'alph';
    isSelected: boolean;
    order: 'none' | 'asc' | 'desc' | string;
}

export const Category = ({ icon, isSelected=false, order='none', ...props }: Props) => {
    
    let Icon = Score;

    if(!isSelected){
        Icon = 
            icon == 'score' ? Score
            : icon == 'price' ? Price
            : Alph;
    }
    else {
        switch(icon){
            case 'score':
                Icon = order == 'asc' ? ScoreAsc : ScoreDesc;
                break;
            case 'price':
                Icon = order == 'asc' ? PriceAsc : PriceDesc;
                break;
            case 'alph':
                Icon = order == 'asc' ? AlphAsc : AlphDesc;
                break;
            default:
        }
    }
    
    return(
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: isSelected ? theme.colors.PRIMARY : '#c4c4c4'}]}
            {...props}
        >
            <Icon />
        </TouchableOpacity>
    );
}