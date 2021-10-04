import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
    container: {        
        flexDirection: 'row',        
        height: 100,
    },    
    gameImage: {
        flex: 1,
        alignItems: 'center',        
        paddingBottom: 10,
        paddingTop: 5,
    },
    cartInfo: {
        flex: 3,        
        justifyContent: 'space-between',
        marginLeft: 20,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
    },
    gameName: {
        width: '100%',        
    },
    name: {
        color: 'white',
        fontFamily: theme.fonts.default400,
        fontSize: 18,
    },
    gamePrice: {
        width: '100%',    
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',  
        justifyContent: 'space-between',  
    },
    price: {
        color: 'white',
        fontFamily: theme.fonts.default400,
        fontSize: 14,
    },
    removeItem: {
        position: 'absolute',
        right: 0,
        top: 0,        
    }
})