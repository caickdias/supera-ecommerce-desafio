import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,        
        padding: 10,
        paddingTop: getStatusBarHeight() + 10,        
    },
    header: {
        width: '100%',        
        height: 75,     
        alignItems: 'center',
        justifyContent: 'center',   
    },
    headerText: {
        color: 'white',
        fontSize: 28,
        fontFamily: theme.fonts.default400,
    },
    bold: {
        fontFamily: theme.fonts.bold,
    },
    searchBar: {
        height: 75,
        paddingVertical: 20,
    },
    orderByArea: {
        width: '100%',
        height: 120,        
        marginVertical: 10,
    },
    orderBy: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    orderByText: {        
        fontFamily: theme.fonts.default400,
        fontSize: 16,
        color: 'white',
    },
    categoriesArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,            
    },
    gamesCatalog: {
        flex: 3,  
        zIndex: 1,              
    },
    cart: {
        flex: 1,           
        alignItems: 'center',
        justifyContent: 'center',
    },    
    
})