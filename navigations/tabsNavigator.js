import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
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
import { useSelector } from 'react-redux'
import SignUp from '../screens/auth/SignUp'


export default function TabsNavigator() {





  const bmiResult = useSelector((state) => state.user.bmiResults);
  const Tabs = createBottomTabNavigator()
  const CustomTabBarButton = ({children, onPress }) => (



    <TouchableOpacity  activeOpacity={0.8} style ={{
        top:-16,
        justifyContent:'center',
        alignContent:'center',
        margin:4,
        padding:4,
        
    }}  onPress = {onPress}
    >
      <View style={{width:90,
        top:4,
         height: 64,
         marginTop:7,
         backgroundColor: '#f0f0f0',
         borderBottomRightRadius: 50,
         borderBottomStartRadius: 50,
        
         
         alignItems: 'center',
         justifyContent: 'center',
         borderLeftWidth: 1,
         borderRightWidth: 1,
         borderBottomWidth: 1,

         borderColor: '#778899',
         
        
      }}>
        {children}

      </View>

        </TouchableOpacity >

  )






  return (

    <Tabs.Navigator screenOptions={{
      tabBarStyle:
        { postion: "absolute", bottom: 12, left: 0, right: 0, marginHorizontal: 10, elevation: 2, height: 80, borderRadius: 15 }

    
    }}>


      <Tabs.Screen name='home'       component={HomePage} options={{
        headerShown: false, tabBarLabel: '', tabBarIcon: ({ focused }) => (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 10,
       

          }}>
            <Image source={require('../utils/Images/home.png')}
              resizeMode='contain'
              style={{
                width: 35,
                height: 35,
                tintColor: focused ? '#2f4f4f' : '#778899',

              }}
            />
            <Text style={{
              fontSize: 12,
              color: focused ? '#2f4f4f' : '#778899',

            }}>Home</Text>
          </View>
        )
      }} />

      <Tabs.Screen name="MyCalorieCart" component={MyCalorieCart} options={{
      tabBarLabel: '', headerShown: false,  tabBarIcon: ({ focused }) => (
  
            <Image source={require('../utils/Images/burn4.jpeg')}
              resizeMode='contain'
              style={{
                width: 70,
                height: 70,
            
                borderRadius:50,
                top:-8,
              }}
            />  ),
              tabBarButton: (props) => (
                <CustomTabBarButton {...props}/>

              )

      }} />

    
{bmiResult ?   (
  

      <Tabs.Screen name="UserData" component={User} options={{
      tabBarLabel: '',  headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 10,


          }}>
            <Image source={require('../utils/Images/user.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#2f4f4f' : '#778899'

              }}
            />
            <Text style={{
              fontSize: 12,
              color: focused ? '#2f4f4f' : '#778899'

            }}>Profil</Text>
          </View>
        )
      }} />
  ) : (




    <Tabs.Screen name="UserData" component={SignUp} options={{
      tabBarLabel: '',  headerShown: false, tabBarIcon: ({ focused }) => (
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 10,


          }}>
            <Image source={require('../utils/Images/user.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#2f4f4f' : '#778899'

              }}
            />
            <Text style={{
              fontSize: 12,
              color: focused ? '#2f4f4f' : '#778899'

            }}>Profil</Text>
          </View>
        )
      }} />




  )}



    </Tabs.Navigator>


  )
}

const styles = StyleSheet.create({



})