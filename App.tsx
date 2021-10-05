import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';

import { Routes } from './src/routes';

import { CartProvider } from './src/context/Providers/CartProvider';

export default function App() {

  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }  
  return (
    <CartProvider>
      <Routes />          
    </CartProvider>
  );
}

