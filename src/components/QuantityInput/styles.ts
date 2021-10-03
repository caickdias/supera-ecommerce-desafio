import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
    container: {        
        width: 100,
        height: 30,        
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#595656',
    },
    column: {
        flex: 1,        
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',        
    },
    number: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',        
    },
    text: {
        color: 'white',
        fontFamily: theme.fonts.default400,
        fontSize: 16,
    }
})