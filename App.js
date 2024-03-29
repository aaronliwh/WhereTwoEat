import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './screens/HomeStack';
import LoginScreen from './screens/Login'
import Verification from "./screens/Verification";
import Register from "./screens/Register"
import { LogBox } from "react-native"
import ResetPasswordLogin from "./screens/ResetPasswordLogin"



LogBox.ignoreAllLogs(true)
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer   independent={true}>
      <Stack.Navigator screenOptions={screenOptions}  options={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="HomeStack" component={HomeStack}/>
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name = "ResetPasswordLogin" component={ResetPasswordLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

