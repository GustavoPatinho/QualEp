import React from 'react';
import { Home } from './src/screens/Home'
import { StatusBar } from 'react-native'
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar barStyle='light-content' translucent />
        <Home />
      </>
    );
  }
}
