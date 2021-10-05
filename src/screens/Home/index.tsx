import React, { useContext, useState } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles';
import data from '../../products.json';

import { Background } from '../../components/Background';
import { Category } from '../../components/Category';
import { GameCard } from '../../components/GameCard';
import { LineDivider } from '../../components/LineDivider';
import { SearchBar } from '../../components/SearchBar';
import { CartButtonModal } from '../../components/CartButtonModal';

import * as Utils from '../../utils';

import { GameProduct } from '../../components/models/Game';
import CartContext from '../../context/contexts';

export const Home = () => {

    const [categorySelected, setCategorySelected] = useState('');
    const [gamesList, setGamesList] = useState<GameProduct[]>(data);
    const [filteredGames, setFilteredGames] = useState<GameProduct[]>([...gamesList]);
    const [cartModal, setCartModal] = useState(false);
    const [order, setOrder] = useState('desc');
    
    const { addToCart } = useContext(CartContext);

    const sortHandler = (category: string) => {
        if(categorySelected != category){   
            setOrder('asc');         
            Utils.sort(filteredGames, category, 'asc');
            setCategorySelected(category);            
            
        } else {            
            if(order == 'asc'){
                setOrder('desc');         
            Utils.sort(filteredGames, category, 'desc');
            } else  {
                setOrder('none');
                setFilteredGames([...gamesList]);
                setCategorySelected('');
            }
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

    const addToCartHandler = (game: GameProduct, quantity: number) => {        
        addToCart(game, quantity);
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
                                order={order} 
                            />                        
                                        
                            <Category 
                                isSelected={categorySelected == 'price' ? true : false} 
                                icon="price"
                                onPress={() => sortHandler('price')} 
                                order={order} 
                            />                        
                                        
                            <Category 
                                isSelected={categorySelected == 'name' ? true : false} 
                                icon="alph"
                                onPress={() => sortHandler('name')} 
                                order={order} 
                            />                                                              
                        </View>
                    </View>

                    <View style={styles.gamesCatalog}>
                        <ScrollView horizontal>
                            {
                                filteredGames.map(game => 
                                <GameCard 
                                    key={game.id} 
                                    game={game} 
                                    onAddToCart={addToCartHandler} 
                                />)
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