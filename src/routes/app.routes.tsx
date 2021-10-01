import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';

export type RootStackParamList = {
    Home: undefined;
}

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export const AppRoutes = () => {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Home"
        >
            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>

    )
}