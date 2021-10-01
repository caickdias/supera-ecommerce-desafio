import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

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
    },
    bold: {
        fontWeight: "bold",
    }
})