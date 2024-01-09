import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import DonutChart from '../utils/Charts';
// Bu bileşeni oluşturmanız gerekecek

const RecipePage = () => {
  const recipe = {
    image: require('../assets/images/recipes.png'), // Resminizin yolunu belirtin
    name: 'Leziz Yemek',
    calories: 300,
    ingredients: ['Malzeme 1', 'Malzeme 2', 'Malzeme 3'],
    protein: 20,
    carbohydrate: 30,
    fat: 15,
  };

  const [showChart, setShowChart] = useState(false);

  const handleChartButtonClick = () => {
    setShowChart(!showChart);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 16 }}>
      {/* Resim */}
      <Image source={recipe.image} style={{ width: 200, height: 200, borderRadius: 10 }} />

      {/* Bilgiler */}
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{recipe.name}</Text>
        <Text style={{ fontSize: 18, color: '#888', marginTop: 8 }}>{recipe.calories} kcal</Text>
      </View>

      {/* Malzemeler */}
      <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
        {recipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={{ fontSize: 16 }}>{ingredient}</Text>
        ))}
      </View>

      {/* Protein, Karbonhidrat, Yağ Değerleri */}
      <View style={{ marginTop: 16, alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Besin Değerleri</Text>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Text style={{ fontSize: 16, marginRight: 16 }}>Protein: {recipe.protein}g</Text>
          <Text style={{ fontSize: 16, marginRight: 16 }}>Karbonhidrat: {recipe.carbohydrate}g</Text>
          <Text style={{ fontSize: 16 }}>Yağ: {recipe.fat}g</Text>
        </View>

        {/* Donut Chart Göster/Gizle Tuşu */}
        <TouchableOpacity onPress={handleChartButtonClick} style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 16, color: 'blue' }}>
            {showChart ? 'Donut Chart Gizle' : 'Donut Chart Göster'}
          </Text>
        </TouchableOpacity>

        {/* Donut Chart */}
        {showChart && <DonutChart protein={recipe.protein} carbohydrate={recipe.carbohydrate} fat={recipe.fat} />}
      </View>
    </View>
  );
};

export default RecipePage;
