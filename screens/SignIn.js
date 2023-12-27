
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';
import { FoodItems } from '../components/database/Database';
import { useDispatch } from 'react-redux';
import { addToCart } from '../utils/redux/store.js'
import { Button } from 'react-native-paper';


export default function SignIn() {

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
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );

    
  const handleAddToCart = (item) => {
    console.log('Ürün ekleniyor:', item);
    dispatch(addToCart(item));
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
});