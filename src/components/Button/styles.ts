import { StyleSheet } from 'react-native';
import { theme } from '../../globals/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '45%',
        backgroundColor: theme.colors.PRIMARY,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontFamily: theme.fonts.default400,
        fontSize: 16,
    }
})