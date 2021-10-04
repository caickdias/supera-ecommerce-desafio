import React from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';

import { CartItem } from '../CartItem';
import { LineDivider } from '../LineDivider';

import { GameProduct } from '../models/GameProduct';

type Props = {
    data: GameProduct[];
}

export const CartItemList = ({ data }: Props) => {
    return(
        <FlatList 
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <CartItem game={item} />}
            ItemSeparatorComponent={() => <LineDivider style={{marginBottom: 20}}  />}  
            showsVerticalScrollIndicator={false}                                  
        />
    );
}