
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Chip } from 'react-native-paper';
import Svg, { Circle, G, Text as SvgText, Defs, LinearGradient, Stop, Filter, FeDropShadow } from 'react-native-svg';
import { useSelector } from 'react-redux';
import CircularProgressBar from '../utils/CircularProgressBar';


export default function MyCalorieCart() {


  const totalCalories = useSelector((state) => state.cart.totalCalories);
  const totalCarbo = useSelector((state) => state.cart.totalCarbo);
  const totalPro = useSelector((state) => state.cart.totalPro);
  const totalFat = useSelector((state) => state.cart.totalFat);

  const totalActiviteCalories = useSelector(state => state.activiteCalories.totalCalories);
  const myValue = totalCalories;
  const navigation = useNavigation();
  const onPressButton = (mealType) => {
    // Yönlendirme işlemleri ve değer gönderme
    navigation.navigate('FoodSearch', { mealType });
  };
  const onPressButtonDetail = (mealType) => {
    // Yönlendirme işlemleri ve değer gönderme
    navigation.navigate('MealCalorieCart', { mealType });
  };

  const allItems = useSelector((state) => state.cart.items);

  const breakfastItem = allItems.filter((item) => item.mealType === 'breakfast');
  const dinnerItem = allItems.filter((item) => item.mealType === 'dinner');
  const lunchItem = allItems.filter((item) => item.mealType === 'lunch');
  const snackItem = allItems.filter((item) => item.mealType === 'snack');


  const bratotalCalories = breakfastItem.reduce((totalCalorie, item) => totalCalorie + item.productCalorie, 0)
  const lunchtotalCalories = lunchItem.reduce((totalCalorie, item) => totalCalorie + item.productCalorie, 0)
  const dinnertotalCalories = dinnerItem.reduce((totalCalorie, item) => totalCalorie + item.productCalorie, 0)
  const snacktotalCalories = snackItem.reduce((totalCalorie, item) => totalCalorie + item.productCalorie, 0)



  const mealData = [
    { title: "Kahvaltı", items: breakfastItem, totalCalories: bratotalCalories, onPress: () => onPressButton('breakfast'), onPressDetail: () => onPressButtonDetail('breakfast'), aimageSource: require('../utils/Images/ff.png') },
    { title: "Öğle Yemeği", items: lunchItem, totalCalories: lunchtotalCalories, onPress: () => onPressButton('lunch'), onPressDetail: () => onPressButtonDetail('lunch'), imageSource: require('../utils/Images/fff.png') },
    { title: "Akşam Yemeği", items: dinnerItem, totalCalories: dinnertotalCalories, onPress: () => onPressButton('dinner'), onPressDetail: () => onPressButtonDetail('dinner'), imageSource: require('../utils/Images/f.png') },
    { title: "Ara Öğün", items: snackItem, totalCalories: snacktotalCalories, onPress: () => onPressButton('snack'), onPressDetail: () => onPressButtonDetail('snack'), imageSource: require('../utils/Images/ffff.png') },
    // İhtiyacınıza göre diğer öğünleri ekleyebilirsiniz.
  ];

  const renderItem = ({ item }) => (

    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TouchableOpacity style={styles.mealContainer}  onPress={item.onPressDetail}>
        <View style={styles.mealContainerLchild}>
          <Text style={styles.mealContainerTitle}>{item.title}</Text>
          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {item.items.map((item, index) => (
              index < 3 && (
                <Text key={index} style={{ fontSize: 12, padding: 1 }}> {item.productName}, </Text>
              )
            ))}
            {item.items.length > 3 && <Text style={{ fontSize: 12, padding: 1 }}> Devamı...</Text>}
          </View>
        </View>
        <View style={styles.mealContainerRchild}>
          <Text style={{ fontSize: 12, padding: 2 }}>Önerilen: 800/kcal </Text>
          <Text style={{ fontSize: 18, padding: 2 }}>Toplam</Text>
          <Text style={{ fontSize: 18, padding: 2 }}>{item.totalCalories} /kcal</Text>
          {/*
        <Image source={item.imageSource} style={styles.mealImage} />*/}

          <View style={styles.buttonContainer}></View>
          <TouchableOpacity style={styles.mealAddButton} onPress={item.onPress}>
            <Text style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
            }}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );









  return (

    <ScrollView >

      <View style={{ flex: 1, alignItems: 'center', }}>
        <View style={{ justifyContent: 'center', width: 220, alignItems: 'center', padding: 10, margin: 4, flexDirection: 'row' }}>



          <CircularProgressBar />
          <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, margin: 1, flexDirection: 'colum', }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'colum', marginVertical: 22 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#455d7a' }}>Alınan </Text>

              <View style={styles.line} />

              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{totalCalories} /kcal  </Text>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'colum', }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#f95959' }}>Yakılan  </Text>

              <View style={styles.line} />
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}> {totalActiviteCalories}  /kcal </Text>
            </View>
          </View>

        </View>
        <View style={{ alignItems: 'center', padding: 4, marginBottom: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'colum', flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#3498db' }}>Karbonhidrat </Text>

            <View style={styles.line} />

            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{totalCarbo} gr  </Text>

          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'colum', flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#e74c3c' }}>Yağ  </Text>

            <View style={styles.line} />
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}> {totalFat}  gr </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'colum', flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2ecc71' }}>Protein  </Text>

            <View style={styles.line} />
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}> {totalPro}  gr </Text>
          </View>
        </View>

        <FlatList
          data={mealData}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          scrollEnabled={false}
        />
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

    backgroundColor: '#f0f8ff', height: 90, alignItems: 'center', width: '95%', flexDirection: 'row', borderRadius: 13, flex: 1, justifyContent: 'space-between', marginVertical: 2,
    borderBottomRightRadius: 12, borderBottomWidth: 1, borderColor: '#4CAF50', borderRightWidth: 1,




  },

  mealContainerRchild: {
    padding: 4, height: '100%', width: '50%', borderRadius: 10, borderBottomRightRadius: 44, position: 'relative', alignItems: 'center'
  },
  mealContainerLchild: {

    height: '100%', flexDirection: 'column', position: 'relative', padding: 4, width: '50%', borderRadius: 10, flexWrap: 'wrap',

  },
  mealImage: {

    width: 100, height: 100, position: 'absolute',
    top: 1,
    right: 2,

  },
  mealAddButton: {
    position: 'absolute',
    bottom: 28,
    right: -6,
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
  buttonContainer: {
    position: 'absolute',
    bottom: 18,
    right: -20,
    backgroundColor: 'white',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: '#4CAF50',


  },
  line: {
    width: '80%', // Çizgi uzunluğu
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 2,

  },
  mealContainerTitle: {
    fontSize: 16,
    color: '#4CAF50',

  }

});
