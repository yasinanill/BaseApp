import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

import { apiKey,appId } from '@env';
import { TextInput } from 'react-native-paper';


export default function YourComponent() 
{
  const [postData, setPostData] = useState(null);
  const [query, setQuery] = useState('pizza');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.edamam.com/api/food-database/v2/parser?app_id=82155569&app_key=5f44feff65ff57a08e71f12fadb7f081&ingr=${query}&nutrition-type=cooking`);
   

        const data = response.data.hints.map((hint) => ({
          name: hint.food.label,
          calorie:hint.food.nutrients?.ENERC_KCAL.toFixed(2)  || 0,
          calories:hint.food.nutrients?.PROCNT || 0,

         
      
        }));


        setPostData(data);  
        console.log(data)
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };
    
    fetchData();

  }, [query]);



  const handleSearchInputChange = (event) => {
    setQuery(event.target.value); // Kullanıcının girdiği değeri state'e kaydedin
  };



  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text>{`Kaloriler: ${item.calorie}`}</Text>
    </View>
  );
  
  const randomKeyExtractor = () => {
    // Burada rastgele bir değer üretilebilir
    return Math.random().toString(36).substr(2, 9);
  };




  return (
    <View style={styles.container}>
      {/* Arama çubuğu */}
      <TextInput
        style={styles.input}
        placeholder="Besin adını girin..."
        value={query}
        onChangeText={(text) => {
          setQuery(text);
         
        }}
      />

 
     <FlatList
        data={postData}
        renderItem={renderItem}
        keyExtractor={randomKeyExtractor}
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

