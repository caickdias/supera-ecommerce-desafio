import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,             
        padding: 10,        
        borderRadius: 10,
        shadowColor: theme.colors.PRIMARY,
        shadowOpacity: 0.5,
        shadowOffset: {width: 4, height: 2}                
    },
    addToCart: {                        
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1,
    },
    gameImage: {
        flex: 1,                
    },
    gameCover: {
        flex: 1,        
        resizeMode: 'contain',        
    },
    gameInfo: {
        marginTop: 10,
        flex: 1, 
    },
    gameInfoRow: {
        flex: 1,        
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',               
    },
    gameScoreAndPrice: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',        
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    gameQuantity: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',        
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textInfo: {
        fontFamily: theme.fonts.default400,
        fontSize: 14,
        color: 'white',
    }


})