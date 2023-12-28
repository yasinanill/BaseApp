
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FoodItems } from '../components/database/Database';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/redux/store.js'
import { Button } from 'react-native-paper';


export default function SignIn({route}) {


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
 


  // FlatList için özel öğe bileşeni
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.productName}</Text>
      <Text>{`Kaloriler: ${item.productCalorie}`}</Text>
      <TouchableOpacity style={styles.mealAddButton} onPress={() => handleAddToCart(item)} >
                <Text style={{
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                }}>+</Text>
              </TouchableOpacity>
    </View>
  );

    
  const handleAddToCart = (item) => {

    const newItem = {
      ...item,
      mealType: mealType,
    };
    console.log('Ürün ekleniyor:', mealType);
    dispatch(addToCart(newItem));

  };



  return (
    <View style={styles.container}>
      {/* Arama çubuğu */}
      <TextInput
        style={styles.input}
        placeholder="Besin adını girin..."
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
          handleSearch(text);
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
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  mealAddButton: {
    position: 'absolute',

    right: 1,
    backgroundColor: '#4CAF50',
    borderRadius: 2,
    width:45,
    height: 80,
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