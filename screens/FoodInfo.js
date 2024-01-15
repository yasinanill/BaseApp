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

  const data = {
    promations: [
        { id: 1, title: 'Aralıklı Oruç (If Diyeti) ', description: 'Aralıklı oruç diyeti, günümüzde if diyeti veya intermittent fasting olarak da bilinmektedir. Aralıklı oruç diyetinin asıl amacı, diğer diyetlerin aksine alınan kalorileri kontrol etmek değil, yiyeceklerin tüketildiği zaman aralığını kontrol etmektir' },
        { id: 3, title: 'Bazal Metabolizma', description: 'Bazal metabolizma, vücudun yalnızca yaşamsal fonksiyonları (vücudu sıcak tutma, nefes alma vb.) idame ettirmek için enerji kullanan metabolik sisteme verilen addır' },
        { id: 4, title: 'Kalori Sayacı', description: ' Yediğiniz yemek için besin bilgilerini bulmakta ve öğün, egzersiz ve kilonuzu kolaylıkla takip etmeniz için gerekli bir uygulamadır.' },

    ],
    categories: [

        // { id: 1, title: 'Kalori Listesi', icon: require('../assets/images/kalorilistesi.png'), items: 'Home' },
        { id: 3, title: 'Öğünler', icon: require('../assets/images/recipes.png'), items: 'FoodInfo' },
        { id: 4, title: 'Aktiviteler', icon: require('../assets/images/activities.png'), items: 'ActivitiesHome' },
        { id: 5, title: 'Testler', icon: require('../assets/images/testler.png'), items: 'CalorieCalculator' },
        { id: 6, title: 'Tarifler', icon: require('../assets/images/foodss.png') },



    ],
    products: [
        { id: 4, title: 'Karpuz', Image: require('../components/database/images/foods/karpuz.jpg'), kalori: '150' },

        { id: 2, title: 'Dondurma', Image: require('../components/database/images/foods/dond.jpg'), kalori: '1333' },
        { id: 3, title: 'Kandil Simidi ', Image: require('../components/database/images/foods/kandil.jpg'), kalori: '150' },


    ],
};






  const [showChart, setShowChart] = useState(false);

  const handleChartButtonClick = () => {
    setShowChart(!showChart);
  };

  
  renderProductItem = ({ item }) => {
    return <View style={style.productItem}>
        <TouchableOpacity
        >

            <View style={style.productItemIconContainer}>

                <Image source={item.Image} style={style.ProductItemimage} />
            </View>
            <View style={{ padding: 10 }}>
                <Text style={style.productItemTitle}>{item.title} </Text>
                <Text style={style.productItemTitle}>{item.kalori} /kcal</Text>

            </View></TouchableOpacity>
    </View>
}








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
