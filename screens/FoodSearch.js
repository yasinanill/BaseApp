
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { FoodItems } from '../components/database/Database.js';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../utils/redux/store.js'
import { Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function FoodSearch({ route }) {


  const { mealType } = route.params;
  console.log('Meal Type:', mealType);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);



  const dispatch = useDispatch();
  // Arama fonksiyonu
  const handleSearch = (term) => {

    const results = FoodItems.filter((item) =>
      item.productName && item.productName.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);



  };
  const handleAddToCart = async (item) => {
    const newItem = {
      ...item,
      mealType: mealType,
    };

    const allItemsFromStorage = await loadFromStorage('allItems') || [];
    const updatedItems = [...allItemsFromStorage, newItem];
    await saveToStorage('allItems', updatedItems);

    dispatch(addToCart(newItem));

  };


  const saveToStorage = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Veri kaydedilemedi:', error);
    }
  };

  const loadFromStorage = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    } catch (error) {
      console.error('Veri çekilemedi:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedItems = await loadFromStorage('allItems');
      if (storedItems) {
        dispatch(addToCartList(storedItems));
      }
    };

    fetchData();
  }, [dispatch]);



  // FlatList için özel öğe bileşeni
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View>
        <Text style={styles.cardTitle}>{item.productName}</Text>
        <Text>{`Kaloriler: ${item.productCalorie}`}</Text>
        <Text>{item.Amount}</Text>

      </View>
      <View>
        <TouchableOpacity style={styles.mealAddButton} onPress={() => handleAddToCart(item)} >
          <Text style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
          }}>+</Text>
        </TouchableOpacity></View>
    </View>
  );




  return (


    <View style={styles.container}>
      {/* Arama çubuğu */}


      <TextInput
        style={styles.input}
        placeholder="Besin adını girin..."
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
          if (text.length >= 1) {
            handleSearch(text);
          }
        }}
      />

      {/* Sonuçları göster */}
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 2,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 4,
    paddingHorizontal: 8,
    marginBottom: 4,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  mealAddButton: {


    backgroundColor: '#4CAF50',
    borderRadius: 2,
    width: 40,
    height: '100%',
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

  }
});