import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from '../screens/HomePage'
import { Ionicons } from '@expo/vector-icons'
import User from '../screens/User'
import MyCalorieCart from '../screens/MyCalorieCart'
import RecipesHome from '../screens/RecipesHome'
import SignIn from '../screens/FoodSearch'
import Activite from '../components/Activities/Activite'
import YourComponent from '../screens/Deneme'
import ActivitiesHome from '../components/Activities/ActivitiesHome'
import FoodSearch from '../screens/FoodSearch'
import CalorieCalculator from '../screens/CalorieCalculator'



const Tabs = createBottomTabNavigator()

export default function TabsNavigator() {

  return (

        <Tabs.Navigator>


            <Tabs.Screen name='home'  component={HomePage} options={{ headerShown:false, tabBarIcon: (props) => <Ionicons name="reorder-four-outline" {...props}/> }} />
            <Tabs.Screen name='profil'  component={User} options={{ headerShown:false, tabBarIcon: (props) => <Ionicons name="reorder-four-outline" {...props}/> }} />
            <Tabs.Screen  name="Kalorim" component={MyCalorieCart}  options={{ headerShown:false,tabBarIcon: (props) => <Ionicons name="timer-outline" {...props}/>}}/>
            <Tabs.Screen name="Tarifler" component={CalorieCalculator}  options={{  headerShown:false,tabBarIcon: (props) => <Ionicons name="pizza-outline" {...props}/>}}/>
        
          

        </Tabs.Navigator>


  )
}

const styles = StyleSheet.create({})