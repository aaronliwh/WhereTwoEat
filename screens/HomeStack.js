import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home'
import FilterScreen from './FilterStart'
import Restaurtants from './Restaurants'
import RestaurtantsRoom from './RestaurantsRoom'
import Reviews from './Reviews'
import Profile from "./Profile/ProfilePage"
import EditProfile from "./Profile/EditProfilePage"
import Favourites from "./Profile/Favourites"
import FilterPrice from "./Filters/FilterPrice"
import FilterCat from "./Filters/FilterCat"
import FilterLoc from "./Filters/FilterLocation"
import EnterRoom from "./Room/EnterRoom"
import CreateRoom from "./Room/CreateRoom"
import Room from "./Room/Room"
import Password from "./Profile/ChangePassword"


import { LogBox } from "react-native"
import BottomBar from './BottomBar'


LogBox.ignoreAllLogs(true)
const Stack = createNativeStackNavigator();
const screenOptions = {
  headerShown: false,
};

export default function App({route,navigation}) {

  return (
    <NavigationContainer   independent={true}>
      
      <Stack.Navigator screenOptions={screenOptions}  options={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Restaurant" component={Restaurtants} />
        <Stack.Screen name="RestaurantRoom" component={RestaurtantsRoom} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="Price" component={FilterPrice} />
        <Stack.Screen name="Cat" component={FilterCat} />
        <Stack.Screen name="Loc" component={FilterLoc} />
        <Stack.Screen name="EnterRoom" component={EnterRoom} />
        <Stack.Screen name="CreateRoom" component={CreateRoom} />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name="Password" component={Password} />
        
      </Stack.Navigator>
      <BottomBar navigation={HomeScreen.navigation} email = {route.params.email} username = {route.params.username} user = {route.params.user} masternav = {navigation}/>
    </NavigationContainer>
  );
}
