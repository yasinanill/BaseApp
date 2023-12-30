import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Chip } from 'react-native-paper';
import Svg, { Circle, G, Text as SvgText, Defs, LinearGradient, Stop, Filter, FeDropShadow } from 'react-native-svg';
import { useSelector } from 'react-redux';

export default function CircularProgressBar(){
 
 
    const [calorieSum, setCalorieSum] = useState();
    const totalCalories = useSelector((state) => state.cart.totalCalories);
  
    useEffect(() => {
      setCalorieSum(totalCalories.toString());
    }, [totalCalories]);
   

   
   
   
    const radius = 75; // Yuvarlak barın yarıçapı
    const circumference = 2 * Math.PI * radius; // Yuvarlak barın çevresi
  
    // Değeri 0 ile 3000 arasında kısıtlıyoruz
    const normalizedValue = Math.min(Math.max(totalCalories, 0), 3000);
  
    // Yuvarlak barın doluluk oranını hesaplıyoruz
    const fillPercentage = (normalizedValue / 3000) * 100;
  
    const dotRadius = 7;
    const dotOffset = circumference - (fillPercentage / 100) * circumference;
  
    return (
      <View style={{ justifyContent: 'center', width: '100%', padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <Svg s height="220" width="280">
          <Defs>
            {/* Renk geçişi için lineer gradient tanımlaması */}
            <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#4CAF50" />
              
            </LinearGradient>
          </Defs>       
          <G transform={`rotate(-90 130 100)`}>
            
          <Circle
              cx="100"
              cy="100"
              r={radius} // İkinci çemberin yarıçapını biraz küçültün (isteğe bağlı)
              stroke="#4CAF50" // İkinci çemberin kenar rengi
              strokeWidth="4" // İkinci çemberin kenar kalınlığı
              fill="transparent" // İkinci çemberin içini boş bırakmak için
             
            />
            {/* Yuvarlak barın tamamını çizen gri renkli daire */}
            <Circle
              cx="100"
              cy="100"
              r={radius}
              stroke="url(#gradient)" // Lineer gradienti kullan
              strokeWidth="12"
              borderRadius='13'
              fill="#ffffff"
              strokeDasharray={`${circumference} ${circumference}`}
              strokeDashoffset={dotOffset}
         
            />
   
            {/* Nokta çizen renkli daire */}
            <Circle
              cx={100 + radius * Math.cos(((fillPercentage / 100 * 360) * Math.PI) / 180)}
              cy={100 + radius * Math.sin(((fillPercentage / 100 * 360) * Math.PI) / 180)}
              r={dotRadius +1}
              fill="#4CAF50" // Nokta rengi
            />
                    <Circle
              cx={100 + radius * Math.cos(((fillPercentage / 100 * 360) * Math.PI) / 180)}
              cy={100 + radius * Math.sin(((fillPercentage / 100 * 360) * Math.PI) / 180)}
              r={dotRadius}
              fill="#fff" // Nokta rengi
            />
        
            <Circle
               cx={100 + radius * Math.cos((0 * Math.PI) / 180)}
               cy={100 + radius * Math.sin((0 * Math.PI) / 180)}
                r={dotRadius-1}
                fill="#4CAF50" // Nokta rengi
      />
  
          </G>
        
       
          {/* Değeri gösteren metin */}
    
          <SvgText
            x="40%"
            y="60%"
            dy=".1em"
            fontSize="16"
            textAnchor="middle"
            fill="#4CAF50"
          > Kalan:
            {3000 - normalizedValue}
          </SvgText>
   
      
        </Svg>
      

      </View>
    );
  };
  