
  import React from 'react';
  import { View, Text } from 'react-native';
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
      <View  style={{backgroundColor: '#fff8e0',borderRadius:32, padding:12}}>
        <Svg   s height="280" width="280">
        <Defs>
          {/* Renk geçişi için lineer gradient tanımlaması */}
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#FF2200" /> 
      <Stop offset="30%" stopColor="#FF6347" />
      <Stop offset="60%" stopColor="#FF2200" />
      <Stop offset="100%" stopColor="#fff8e0" />
          </LinearGradient>
          

          
        </Defs>
          <G transform={`rotate(-90 120 90)`}>
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
      </View>
    );
  };
  
  export default function MyCalorieCart() {
    const myValue =333; // Göstermek istediğiniz değer
    return (
      <View style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' ,padding:10 , margin:20}}>
        <CircularProgressBar value={myValue} />
      </View>
    );
  }