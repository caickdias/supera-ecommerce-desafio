import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { Background } from '../../components/Background';
import { Category } from '../../components/Category';
import { GameCard } from '../../components/GameCard';
import { LineDivider } from '../../components/LineDivider';
import { SearchBar } from '../../components/SearchBar';

import { GameProduct } from '../../components/models/GameProduct';

import { styles } from './styles';
import { CartButtonModal } from '../../components/CartButtonModal';

const games: GameProduct[] = [
    {
        id: 1,
        name: 'Mortal Kombat',
        price: 190.10,
        score: 150,
        image: 'horizon-zero-dawn.png',
    },
    {
        id: 2,
        name: 'Super Mario World',
        price: 110.20,
        score: 210,
        image: 'fifa-18.png',
    },
    {
        id: 3,
        name: 'Crash',
        price: 290.10,
        score: 125,
        image: 'horizon-zero-dawn.png',
    },
]

export const Home = () => {

    const [orderSelected, setOrderSelected] = useState('');
    const [filteredGames, setFilteredGames] = useState(games);
    const [cartModal, setCartModal] = useState(false);

    const orderHandler = (order: string) => {
        if(orderSelected != order){
            setOrderSelected(order);
        } else {
            setOrderSelected('');
        }
    }
        
    const searchHandler = (name: string) => {
        if(name == ''){
            setFilteredGames(games);
        } else {
            setFilteredGames(
                games.filter(game => game.name.toLowerCase().includes(name.toLowerCase()))
            );
        }
    }

    const openModalHandler = () => {
        setCartModal(!cartModal);
    }

    return(
        <Background>    
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>        
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            Olá, 
                            <Text style={styles.bold}>Caick</Text>
                        </Text>
                    </View>
                    <LineDivider />

                    <View style={styles.searchBar}>
                        <SearchBar onChangeText={searchHandler} />
                    </View>

                    <View style={styles.orderByArea}>
                        <View style={styles.orderBy}>
                            <Text style={styles.orderByText}>
                                Ordenar por
                            </Text>
                        </View>

                        <View style={styles.categoriesArea}>
                            <Category 
                                isSelected={orderSelected == 'score' ? true : false} 
                                icon="score"
                                onPress={() => orderHandler('score')} 
                            />                        
                                        
                            <Category 
                                isSelected={orderSelected == 'price' ? true : false} 
                                icon="price"
                                onPress={() => orderHandler('price')} 
                            />                        
                                        
                            <Category 
                                isSelected={orderSelected == 'alph' ? true : false} 
                                icon="alph"
                                onPress={() => orderHandler('alph')} 
                            />                                                              
                        </View>
                    </View>

                    <View style={styles.gamesCatalog}>
                        <ScrollView horizontal>
                            {
                                filteredGames.map(game => <GameCard key={game.id} game={game} />)
                            }
                        </ScrollView>                                        
                    </View>

                    <View style={styles.cart}>
                        <CartButtonModal 
                            visible={cartModal}
                            onPress={openModalHandler} 
                        />
                    </View>

                </View> 
            </TouchableWithoutFeedback>
        </Background>
    )
}