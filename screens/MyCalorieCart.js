
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import Svg, { Circle, G, Text as SvgText, Defs, LinearGradient, Stop, Filter, FeDropShadow } from 'react-native-svg';

const CircularProgressBar = ({ value }) => {
  const radius = 100; // Yuvarlak barın yarıçapı
  const circumference = 2 * Math.PI * radius; // Yuvarlak barın çevresi

  // Değeri 0 ile 3000 arasında kısıtlıyoruz
  const normalizedValue = Math.min(Math.max(value, 0), 3000);

  // Yuvarlak barın doluluk oranını hesaplıyoruz
  const fillPercentage = (normalizedValue / 3000) * 100;

  const dotRadius = 7;
  const dotOffset = circumference - (fillPercentage / 100) * circumference;


  return (
    <View style={{  borderRadius: 43,justifyContent:'center',width:'100%', padding: 12, flexDirection:'row' ,alignItems:'center'}}>
      <Svg s height="240" width="280">
        <Defs>
          {/* Renk geçişi için lineer gradient tanımlaması */}
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor="#FF2200" />
            <Stop offset="30%" stopColor="#FF6347" />
            <Stop offset="60%" stopColor="#FF2200" />
            <Stop offset="100%" stopColor="#fff8e0" />
          </LinearGradient>



        </Defs>
        <G transform={`rotate(-90 130 100)`}>
          {/* Yuvarlak barın tamamını çizen gri renkli daire */}
          <Circle
            cx="100"
            cy="100"
            r={radius}
            stroke="url(#gradient)" // Lineer gradienti kullan
            strokeWidth="8"

            fill="#fff9e6"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference - dotOffset}
          />
          {/* Nokta çizen renkli daire */}
          <Circle
            cx={100 + radius * Math.cos(((360 - fillPercentage / 100 * 360) * Math.PI) / 180)}
            cy={100 + radius * Math.sin(((360 - fillPercentage / 100 * 360) * Math.PI) / 180)}
            r={dotRadius}
            fill="#e74c3c" // Nokta rengi
          />

        </G>
        {/* Değeri gösteren metin */}
        <SvgText
          x="50%"
          y="50%"
          dy=".3em"
          fontSize="20"
          textAnchor="middle"
          fill="#002aff"
        >
          {normalizedValue}
        </SvgText>
      </Svg>

    <View style={{flexDirection:'column', justifyContent:'space-around',alignItems:'center'}}> 
          
    <View style={{flexDirection:'column', justifyContent:'space-between',alignItems:'center'}}>
          <Text>Alınan Kalori</Text>
          
    </View>
    <View style={{flexDirection:'column', justifyContent:'space-between',alignItems:'center'}}>
    <Text>Yakılan Kalori </Text>
  
          
    </View>
    
      

    </View>

    </View>
  );
};

export default function MyCalorieCart() {




  const myValue = 333; // Göstermek istediğiniz değer
  return (

<ScrollView >

    <View style={{ flex: 1, alignItems: 'center', }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, margin: 20 }}>
        <CircularProgressBar value={myValue} />
      </View>
    <View style={{flex:1,flexDirection:'column'}}>
      <View style={styles.mealContainer}>
        <View style={styles.mealContainerLchild} >
          <Text style={{ fontSize: 20 }}>Kahvaltı </Text>

          <Text style={{ fontSize: 20, padding: 2 }}>Toplam Kalori  </Text>

        </View>
        <View  style={styles.mealContainerRchild} >
          <Text style={{ fontSize: 20 }}>Kahvaltı </Text>
       
          <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d"  }} style={styles.mealImage} />
                    <TouchableOpacity style={styles.mealAddButton}  >
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
          <Text style={{ fontSize: 20 }}>Kahvaltı </Text>

          <Text style={{ fontSize: 20, padding: 2 }}>Toplam Kalori  </Text>

        </View>
        <View  style={styles.mealContainerRchild} >
          <Text style={{ fontSize: 20 }}>Kahvaltı </Text>
       
          <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d"  }} style={styles.mealImage}/>
                    <TouchableOpacity style={styles.mealAddButton} >
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
          <Text style={{ fontSize: 20 }}>Kahvaltı </Text>

          <Text style={{ fontSize: 20, padding: 2 }}>Toplam Kalori  </Text>

        </View>
        <View  style={styles.mealContainerRchild}>
          <Text style={{ fontSize: 20 }}>Kahvaltı </Text>
       
          <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d"  }} style={styles.mealImage} />
                    <TouchableOpacity style={styles.mealAddButton}  >
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
          <Text style={{ fontSize: 20 }}>Kahvaltı </Text>

          <Text style={{ fontSize: 20, padding: 2 }}>Toplam Kalori  </Text>

        </View>
        <View style={styles.mealContainerRchild} >
          <Text style={{ fontSize: 20 }}>Kahvaltı </Text>
       
          <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d"  }} style={styles.mealImage} />
                    <TouchableOpacity style={styles.mealAddButton} >
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
      
    mealContainer:{

      backgroundColor: '#d4f2f6', height: 140, alignItems: 'center', width: '90%', flexDirection: 'row', borderRadius: 13 ,flex:1 ,justifyContent:'space-between',
      borderBottomRightRadius:12,borderTopRightRadius:100,
       marginVertical:8

      

    },
         
    mealContainerRchild:{
      padding: 10,height:'100%', width: '50%',borderRadius: 13,borderBottomRightRadius:44,position:'relative' 
    },
    mealContainerLchild:{

      height:'100%',  flexDirection: 'column',position:'relative', padding: 10,  width: '50%', borderRadius: 13 

    },
    mealImage: {

      width:80,height:80, borderRadius:50 , position: 'absolute',
             top: -8,
            right: -2,
      
    },
    mealAddButton:{
      position: 'absolute',
      bottom: 6,
      right: 6,
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

    }

});
