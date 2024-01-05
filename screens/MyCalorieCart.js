
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Chip } from 'react-native-paper';
import Svg, { Circle, G, Text as SvgText, Defs, LinearGradient, Stop, Filter, FeDropShadow } from 'react-native-svg';
import { useSelector } from 'react-redux';
import CircularProgressBar from '../utils/CircularProgressBar';


export default function MyCalorieCart() {


  const totalCalories = useSelector((state) => state.cart.totalCalories);
  const totalActiviteCalories = useSelector(state => state.activiteCalories.totalCalories);
  const myValue = totalCalories;
  const navigation = useNavigation();
  const onPressButton = (mealType) => {
    // Yönlendirme işlemleri ve değer gönderme
    navigation.navigate('FoodSearch', { mealType });
  };

  const allItems = useSelector((state) => state.cart.items);
  
  const breakfastItem = allItems.filter((item) => item.mealType === 'breakfast');
  const dinnerItem = allItems.filter((item) => item.mealType === 'dinner');
  const lunchItem = allItems.filter((item) => item.mealType === 'lunch');
  const snackItem = allItems.filter((item) => item.mealType === 'snack');


  const bratotalCalories = breakfastItem.reduce((totalCalorie,item)=>  totalCalorie + item.productCalorie, 0 )
  const lunchtotalCalories = lunchItem.reduce((totalCalorie,item)=>  totalCalorie + item.productCalorie, 0 )
  const dinnertotalCalories = dinnerItem.reduce((totalCalorie,item)=>  totalCalorie + item.productCalorie, 0 )
  const snacktotalCalories = snackItem.reduce((totalCalorie,item)=>  totalCalorie + item.productCalorie, 0 )
  
  return (

    <ScrollView >

      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={{ justifyContent: 'center',width:220, alignItems: 'center', padding: 10, margin: 4,flexDirection:'row' }}>
         
         
       
          <CircularProgressBar  />
              <View  style={{ justifyContent: 'center', alignItems: 'center', padding: 10, margin: 22,flexDirection:'colum', }}>
             <View style={{ justifyContent: 'center', alignItems: 'center',flexDirection:'colum',marginVertical:22 }}> 
              <Text style={{ fontSize: 16,fontWeight:'bold' ,color:'#455d7a'}}>Alınan </Text> 

             <View style={styles.line} />

             <Text style={{ fontSize: 14, fontWeight:'bold' }}>{totalCalories} /kcal  </Text> 

              </View> 
             <View style={{ justifyContent: 'center', alignItems: 'center',flexDirection:'colum', }}>
             <Text style={{ fontSize: 16,fontWeight:'bold', color:'#f95959'}}>Yakılan  </Text> 

             <View style={styles.line} />
             <Text style={{ fontSize: 14, fontWeight:'bold' }}> {totalActiviteCalories}  /kcal </Text> 
               </View>
              </View>  
        
        </View>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={styles.mealContainer}>
            <View style={styles.mealContainerLchild} >
              <Text style={styles.mealContainerTitle}>Kahvaltı </Text>
<View style={{ flex: 1, flexDirection: 'row', flexWrap:'wrap' }}>
              {breakfastItem.map((item) => (
                
               <Text style={{ fontSize: 12, padding: 1 }}> {item.productName},  </Text>
))}

       </View>
            </View>
            <View style={styles.mealContainerRchild} >
                <Text style={{ fontSize: 16, padding: 2 }}>{bratotalCalories} /kcal</Text>

              <Image source={require('../utils/Images/breakfast.jpg')} style={styles.mealImage} />
              <TouchableOpacity style={styles.mealAddButton} onPress={() => onPressButton('breakfast')} >
                <Text style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>+</Text>
              </TouchableOpacity>
            </View>

          </View>


          <View style={styles.mealContainer}>
            <View style={styles.mealContainerLchild} >
              <Text style={styles.mealContainerTitle}>Öğle Yemeği </Text>

              {lunchItem.map((item) => (
  <Text style={{ fontSize: 12, padding: 1 }}> {item.productName}  </Text>
))}


            </View>
            <View style={styles.mealContainerRchild} >
            <Text style={{ fontSize: 18, padding: 2 }}>{lunchtotalCalories} /kcal</Text>
              <Image source={require('../utils/Images/lunch.jpg')} style={styles.mealImage} />
              <TouchableOpacity style={styles.mealAddButton} onPress={() => onPressButton('lunch')} >
                <Text style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.mealContainer}>
            <View style={styles.mealContainerLchild}>
              <Text style={styles.mealContainerTitle}>Akşam yemeği  </Text>

              {dinnerItem.map((item) => (
  <Text style={{ fontSize: 12, padding: 1 }}> {item.productName}  </Text>
))}


            </View>
            <View style={styles.mealContainerRchild}>
            <Text style={{ fontSize: 18, padding: 2 }}>{dinnertotalCalories} /kcal</Text>

              <Image source={require('../utils/Images/dinner.png')} style={styles.mealImage} />
              <TouchableOpacity style={styles.mealAddButton} onPress={() => onPressButton('dinner')} >
                <Text style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.mealContainer}>
            <View style={styles.mealContainerLchild} >
              <Text style={styles.mealContainerTitle}>Ara öğün </Text>

              {snackItem.map((item) => (
  <Text style={{ fontSize: 12, padding: 1 }}> {item.productName}  </Text>
))}


            </View>
            <View style={styles.mealContainerRchild} >
            <Text style={{ fontSize: 18, padding: 2 }}>{snacktotalCalories} /kcal</Text>

              <Image source={require('../utils/Images/snack.png')} style={styles.mealImage} />
              <TouchableOpacity style={styles.mealAddButton}  onPress={() => onPressButton('snack')}>
                <Text style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: 'bold',
                }}>+</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>

      </View>
    </ScrollView>


  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  foodItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  emptyListMessage: {
    textAlign: 'center',
    marginTop: 20,
  },

  mealContainer: {

    backgroundColor: '#f0f8ff', height: 100, alignItems: 'center', width: '90%', flexDirection: 'row', borderRadius: 13, flex: 1, justifyContent: 'space-between',
    borderBottomRightRadius: 12, 
    marginVertical: 6



  },

  mealContainerRchild: {
    padding: 10, height: '100%', width: '50%', borderRadius: 10, borderBottomRightRadius: 44, position: 'relative'
  },
  mealContainerLchild: {

    height: '100%', flexDirection: 'column', position: 'relative', padding: 10, width: '50%', borderRadius: 10,flexWrap:'wrap',

  },
  mealImage: {
    
    width: 50, height: 50, borderRadius: 50, position: 'absolute',
    top: -10,
    right: 18,

  },
  mealAddButton: {
    position: 'absolute',
    bottom: 10,
    right: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),

  },  
    line: {
    width: '100%', // Çizgi uzunluğu
    height: 1,
    backgroundColor: '#f95959', 
    marginVertical:2,
    
  },
  mealContainerTitle:{
      fontSize:16,
  color:'#4CAF50',

  }

});
