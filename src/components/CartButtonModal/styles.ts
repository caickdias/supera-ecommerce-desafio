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
        right: 0,
        top: 0,
        zIndex: 1,        
    }, 
    container: {
        flex: 1,                
    },
    modalContainer: {       
        position: 'absolute',
        bottom: -50,        
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: 'red',        
        height: '90%',
        width: '100%',
    },    
    linearGradient: {  
        borderRadius: 40,              
        height: '100%'
    }
})