import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
    iconContainer: {        
        width: 63,
        height: 63,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 63/2,
        backgroundColor: theme.colors.PRIMARY,
    },
    nOfItems: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 20/2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        right: -10,
        top: -10,
        zIndex: 1,        
    },     
    modalContainer: {       
        position: 'absolute',        
        bottom: -50,                
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,        
        height: '90%',
        width: '100%',
    },    
    linearGradient: {  
        borderRadius: 40,        
        padding: 10,      
        height: '100%'
    },
    itemsList: {
        flex: 3,
        padding: 20,        
    },
    totalPriceArea: {
        flex: 1,                
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',        
    },        
    priceText: {
        color: 'white',
        fontFamily: theme.fonts.default400,
        fontSize: 16,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    priceSeparator: {
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 5,
    }
})