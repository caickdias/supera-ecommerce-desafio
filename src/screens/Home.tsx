import React from 'react';
import { View, Text } from 'react-native';
import { Background } from '../components/Background';
import { LineDivider } from '../components/LineDivider';

import { styles } from './styles';

export const Home = () => {
    return(
        <Background>            
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>
                        Olá, <Text>Caick</Text>
                    </Text>
                </View>
                <LineDivider />
            </View> 

        </Background>
    )
}