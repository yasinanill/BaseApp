import React from 'react';
import { View, Image, Text } from 'react-native';

const CircularProgressBar = ({ value }) => {
  const radius = 100; // Yuvarlak barın yarıçapı
  const normalizedValue = Math.min(Math.max(value, 0), 3000);
  const fillPercentage = (normalizedValue / 3000) * 100;

  const dotOffsetX = radius * Math.cos(((360 - fillPercentage / 100 * 360) * Math.PI) / 180);
  const dotOffsetY = radius * Math.sin(((360 - fillPercentage / 100 * 360) * Math.PI) / 180);

  return (
    <View style={{ alignItems: 'center' }}>
      {/* Dolu kısmı gösteren resim (bar) */}
      <Image
        source={require('../components/Activities/images/yuruyus.png')} // Kendi görüntünüzü ekleyin
        style={{
          width: 2 * radius,
          height: 2 * radius,
          resizeMode: 'contain',
          
        }}
      />
      {/* Noktayı gösteren resim (dot) */}
      <Image
        source={require('../components/Activities/images/walk.jpg')} // Kendi görüntünüzü ekleyin
        style={{
          position: 'absolute',
          left: 100 - dotOffsetX,
          top: 100 - dotOffsetY,
          width: 10, // Nokta boyutunu ayarlayın
          height: 10,
          resizeMode: 'contain',
        }}
      />
      {/* Değeri gösteren metin */}
      <Text style={{ position: 'absolute', fontSize: 20, color: '#3498db' }}>
        {normalizedValue}
      </Text>
    </View>
  );
};

export default function SignIn() {
  const myValue = 15; // Göstermek istediğiniz değer
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgressBar value={myValue} />
    </View>
  );
}