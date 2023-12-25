

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import axios from 'axios'

export default function RecipesHome() {

  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    // API'den verileri çekmek için bir fonksiyon
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:5028/api/Abouts');
        setAbouts(response.data);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        if (error.response) {
          // İstek başarıyla yapıldı, ancak sunucu bir hata yanıtı verdi (örneğin, 404 Not Found)
          console.error('Sunucu Hata:', error.response.data);
        } else if (error.request) {
          // İstek yapıldı, ancak hiçbir yanıt alınamadı
          console.error('Sunucuya İstek Gönderilemedi');
        } else {
          // Bir şey olurken hata oluştu
          console.error('Bilinmeyen Hata:', error.message);
        }
      }

    }
    // Verileri çekme fonksiyonunu çağır
    fetchData();
    console.log(abouts)
  }, []);


  const renderAboutItem = ({ item }) => (
    <View style={styles.aboutItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.aboutImage} />
      <Text style={styles.aboutTitle}>{item.title}</Text>
      <Text style={styles.aboutDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={abouts}
        renderItem={renderAboutItem}
        keyExtractor={(item) => item.aboutID.toString()}
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
  aboutItem: {
    marginBottom: 16,
  },
  aboutImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  aboutDescription: {
    fontSize: 16,
    marginTop: 8,
  },
});