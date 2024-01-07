import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from '../screens/HomePage'
import TabsNavigator from './tabsNavigator'
import User from '../screens/User'
import Activite from '../components/Activities/Activite'
import ActivitiesHome from '../components/Activities/ActivitiesHome'
import YourComponent from '../screens/Deneme'
import FoodSearch from '../screens/FoodSearch'
import SplashScreen from '../screens/CalorieCalculator'
import CalorieCalculator from '../screens/CalorieCalculator'
import UserActivities from '../components/Activities/UserActivities'
import { useSelector } from 'react-redux'
import MealCalorieCart from '../screens/MealCalorieCart'


const Stack = createNativeStackNavigator()

export default function AuthStack() {

//  const bmiResult = useSelector((state) => state.user.bmiResults);
  const bmiResult = 2;

  return (
   
     <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: 'red' } }}>
    
     {bmiResult ? (
          <Stack.Screen name='TabsNavigation' component={TabsNavigator} options={{ headerShown: false }} /> 
     
        ) : (


          <Stack.Screen name='YourComponent' component={YourComponent} options={{ headerShown: false }} />
        )}
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Profil" component={User} options={{ headerShown: false }} />
        <Stack.Screen name="Activite" component={Activite} options={{ headerShown: false }} />
        <Stack.Screen name="ActivitiesHome" component={ActivitiesHome} options={{ headerShown: false }} />
        <Stack.Screen name="MealCalorieCart" component={MealCalorieCart} options={{ headerShown: false }} />
       
        
        <Stack.Screen name="FoodSearch" component={FoodSearch} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name="CalorieCalculator" component={CalorieCalculator} options={{ }} />
        <Stack.Screen name="UserActivities" component={UserActivities} options={{ headerShown: false }} />
      </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow', // arka plan rengini istediğiniz renkle değiştirin
  },
});