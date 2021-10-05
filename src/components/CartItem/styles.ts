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
    gameNameRow: {        
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',        
    },
    gameName: {
        flex: 6,
    },
    removeItem: {   
        flex: 1,
        right: 0,
        top: 0,        
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
})