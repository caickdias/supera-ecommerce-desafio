import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';

import { Background } from '../../components/Background';
import { Category } from '../../components/Category';
import { GameCard } from '../../components/GameCard';
import { LineDivider } from '../../components/LineDivider';
import { SearchBar } from '../../components/SearchBar';
import { CartButtonModal } from '../../components/CartButtonModal';

import * as Utils from '../../utils';

import { GameProduct } from '../../components/models/GameProduct';
import data from '../../products.json';

export const Home = () => {

    const [categorySelected, setCategorySelected] = useState('');
    const [gamesList, setGamesList] = useState<GameProduct[]>(data);
    const [filteredGames, setFilteredGames] = useState<GameProduct[]>([...gamesList]);
    const [cartModal, setCartModal] = useState(false);
    
    const sortHandler = (category: string) => {
        if(categorySelected != category){            
            Utils.sort(filteredGames, category);
            setCategorySelected(category);            
            
        } else {
            setFilteredGames([...gamesList]);
            setCategorySelected('');
        }
    }
        
    const searchHandler = (name: string) => {
        if(name == ''){
            setFilteredGames([...gamesList]);
        } else {
            setFilteredGames(
                [...gamesList.filter(game => game.name.toLowerCase().includes(name.toLowerCase()))]
            );
        }
    }

    const openModalHandler = () => {
        setCartModal(true);
    }

    const closeModalHandler = () => {
        setCartModal(false);
    }

    return(
        <Background>    
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>        
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>
                            Olá, 
                            <Text style={styles.bold}> Caick</Text>
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
                                isSelected={categorySelected == 'score' ? true : false} 
                                icon="score"
                                onPress={() => sortHandler('score')} 
                            />                        
                                        
                            <Category 
                                isSelected={categorySelected == 'price' ? true : false} 
                                icon="price"
                                onPress={() => sortHandler('price')} 
                            />                        
                                        
                            <Category 
                                isSelected={categorySelected == 'name' ? true : false} 
                                icon="alph"
                                onPress={() => sortHandler('name')} 
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
                            onCancel={closeModalHandler}
                            onPress={openModalHandler} 
                        />
                    </View>

                </View> 
            </TouchableWithoutFeedback>
        </Background>
    )
}