import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export const SearchBar = ({ ...props }: TextInputProps) => {
    return(
        <TextInput 
            style={styles.container}            
            placeholderTextColor='#9E9E9E'
            placeholder="Pesquise um jogo"
            autoCorrect={false}            
            {...props}
        />
    )
}