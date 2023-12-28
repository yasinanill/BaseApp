import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CircularProgressBar() {
  
    const [calorieSum, setCalorieSum] = useState();
 

 
 
    const totalCalories = useSelector((state) => state.cart.totalCalories);
  
    const cartItems = useSelector((state) => state.cart.items);
   
    
   
   
    useEffect(() => {
      setCalorieSum(totalCalories.toString());
    }, [totalCalories]);
   
   console.log(cartItems)
   
   
   
   
    const radius = 100; // Yuvarlak barın yarıçapı
    const circumference = 2 * Math.PI * radius; // Yuvarlak barın çevresi
  
    // Değeri 0 ile 3000 arasında kısıtlıyoruz
    const normalizedValue = Math.min(Math.max(value, 0), 3000);
  
    // Yuvarlak barın doluluk oranını hesaplıyoruz
    const fillPercentage = (normalizedValue / 3000) * 100;
  
    const dotRadius = 7;
    const dotOffset = circumference - (fillPercentage / 100) * circumference;
  
    return (
      <View style={{ borderRadius: 43, justifyContent: 'center', width: '100%', padding: 12, flexDirection: 'row', alignItems: 'center' }}>
        <Svg s height="240" width="280">
          <Defs>
            {/* Renk geçişi için lineer gradient tanımlaması */}
            <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#FF2200" />
              
            </LinearGradient>
          </Defs>       
          <G transform={`rotate(-90 130 100)`}>
            
          <Circle
              cx="100"
              cy="100"
              r={radius} // İkinci çemberin yarıçapını biraz küçültün (isteğe bağlı)
              stroke="#ffd1dc" // İkinci çemberin kenar rengi
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
              strokeDashoffset={circumference - dotOffset}
         
            />
   
            {/* Nokta çizen renkli daire */}
            <Circle
              cx={100 + radius * Math.cos(((360 - fillPercentage / 100 * 360) * Math.PI) / 180)}
              cy={100 + radius * Math.sin(((360 - fillPercentage / 100 * 360) * Math.PI) / 180)}
              r={dotRadius +1}
              fill="red" // Nokta rengi
            />
                    <Circle
              cx={100 + radius * Math.cos(((360 - fillPercentage / 100 * 360) * Math.PI) / 180)}
              cy={100 + radius * Math.sin(((360 - fillPercentage / 100 * 360) * Math.PI) / 180)}
              r={dotRadius}
              fill="#fff" // Nokta rengi
            />
        
            <Circle
               cx={100 + radius * Math.cos((0 * Math.PI) / 180)}
               cy={100 + radius * Math.sin((0 * Math.PI) / 180)}
                r={dotRadius-1}
                fill="red" // Nokta rengi
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
        <View>
        <Text>Sepetteki Ürünler:</Text>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <View key={item.id} style={{ marginBottom: 10 }}>
              <Text>{item.productName}</Text>
              <Text>{`Kaloriler: ${item.productCalorie}`}</Text>
              <Text>{`Kaloriler: ${item.productCarbo}`}</Text>
              {/* İsterseniz buraya ürünü sepetten çıkarma işlemini gerçekleştiren bir düğme ekleyebilirsiniz */}
            </View>
          ))
        ) : (
          <Text>Sepetiniz boş.</Text>
        )}
      </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
  
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>Alınan Kalori</Text>
  
          </View>
          <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>Yakılan Kalori </Text>
  
          </View>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({



    
})