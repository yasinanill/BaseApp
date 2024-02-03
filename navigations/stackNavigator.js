import { StatusBar, StyleSheet, Text, View } from 'react-native'
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
import RecipePage from '../screens/FoodInfo'
import RecipesHome from '../screens/RecipesHome'
import SignIn from '../screens/auth/SignIn'
import SignUp from '../screens/auth/SignUp'
import Fooddetails from '../screens/FoodDetails'


const Stack = createNativeStackNavigator()

export default function AuthStack() {

 const bmiResult = useSelector((state) => state.user.bmiResults);


  return (
   
     <Stack.Navigator screenOptions={{headerShown: false}}>
    
    
        <>
          <Stack.Screen name='TabsNavigation' component={TabsNavigator} options={{ headerShown: false }} /> 
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="Profil" component={User} options={{ headerShown: false }} />
        <Stack.Screen name="Activite" component={Activite} options={{ headerShown: false }} />
        <Stack.Screen name="ActivitiesHome" component={ActivitiesHome} options={{ headerShown: false }} />
        <Stack.Screen name="MealCalorieCart" component={MealCalorieCart} options={{ headerShown: false }} />
        <Stack.Screen name="FoodInfo" component={RecipePage} options={{ headerShown: false }} />
        <Stack.Screen name="RecipesHome" component={RecipesHome} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="FoodDetails" component={Fooddetails} options={{ headerShown: false }} />
       
        
        <Stack.Screen name="FoodSearch" component={FoodSearch} options={({ route }) => ({ title: route.params.name })} />
        <Stack.Screen name="CalorieCalculator" component={CalorieCalculator} options={{headerShown: false  }} />
        <Stack.Screen name="UserActivities" component={UserActivities} options={{ headerShown: false }} />
          </>
   

          <Stack.Screen name='YourComponent' component={YourComponent} options={{ headerShown: false }} />
    
      </Stack.Navigator>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow', // arka plan rengini istediğiniz renkle değiştirin
  },
});