import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import { setUserData } from '../utils/redux/store';

export default function YourComponent({ route, navigation }) {

 
 
  const dispatch = useDispatch();
  const [soruIndex, setSoruIndex] = useState(0);
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('Erkek');
  const [activityLevel, setActivityLevel] = useState('null');
  const [bmiResult, setBmiResult] = useState(null);

  const [calorieResult, setCalorieResult] = useState(null);
  const [idealWeight, setIdealWeight] = useState(null);



  const sorular = [
    { id: 1, tip: 'numeric', state: height, setFunction: setHeight, soruMetni: 'Boyunuz nedir? (cm)' },
    { id: 2, tip: 'numeric', state: weight, setFunction: setWeight, soruMetni: 'Kilonuz nedir? (kg)' },
    { id: 3, tip: 'numeric', state: age, setFunction: setAge, soruMetni: 'Yaşınız nedir?' },
    { id: 4, tip: 'select', state: gender, setFunction: setGender, soruMetni: 'Cinsiyetiniz nedir?', secenekler: ['Erkek','Kadın'] },
    { id: 5, tip: 'select', state: activityLevel, setFunction: setActivityLevel, soruMetni: 'Aktivite seviyeniz nedir?', secenekler: ['Hareketsiz', 'Az Aktif', 'Normal Aktivite', 'Çok Aktif', 'Ekstra Aktif'] },
  ];

  const handleCevapla = (cevap, setFunction) => {
    setFunction(cevap);
  };


  const calculateBMI = () => {
    const bmi = (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(2);
    setBmiResult(bmi);
  };


  const calculateIdealWeight = () => {
    let idealWeightValue = null;

    if (gender === 'Erkek') {
      idealWeightValue = (22.0 * ((parseFloat(height) / 100) ** 2)).toFixed(2);
    } else if (gender === 'Kadın') {
      idealWeightValue = (21.7 * ((parseFloat(height) / 100) ** 2)).toFixed(2);
    }

    setIdealWeight(idealWeightValue);
  };

  const handleDevamEt = () => {
    // Otomatik olarak bir sonraki soruya geç
    if (soruIndex < sorular.length - 1) {
      setSoruIndex(soruIndex + 1);
    }
  };

  const handleBaslayalim = () => {
    const bmrResult = bmrHesapla(age, height, weight, gender, activityLevel);
    setCalorieResult(bmrResult)
    calculateBMI()
    calculateIdealWeight()


    console.log(age)
    console.log(weight)
    console.log(bmrResult)
    console.log(idealWeight)
    console.log(bmiResult)
  };

  const bmrHesapla = (age, height, weight, gender, activityLevel) => {
   
    if (age && weight && height && gender && activityLevel) {
    
      let bmr = 0;

      if (gender === 'Erkek') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else if (gender === 'Kadın') {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }

      // Aktivite seviyesine göre BMR'yi ayarlayın
      switch (activityLevel) {
        case 'Hareketsiz':
          bmr *= 1.2;
          break;
        case 'Az Aktif':
          bmr *= 1.2;
          break;
        case 'Normal Aktivite':
          bmr *= 1.2;
          break;
        case 'Çok Aktif':
          bmr *= 1.55;
          break;
        case 'Ekstra Aktif':
          bmr *= 1.9;
          break; 
        default:
          break;
      }
     
      return bmr; // BMR değerini döndür
   
    } else {
      return null; // Eğer tüm bilgiler doldurulmamışsa null döndür
    }
   
  }

  useEffect(() => {
    dispatch(
      setUserData({
    age,
    height,
    weight,
    gender,
    bmiResults: bmiResult,
    calorieResults: calorieResult,
    idealWeights: idealWeight,
    })
    );
  
    // Reset the form
  }, [calorieResult]);





  return (
    <ImageBackground
      source={require('../components/database/images/foods/kosu.png')}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.soruMetni}>{sorular[soruIndex].soruMetni}</Text>
        {sorular[soruIndex].tip === 'numeric' ? (
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={sorular[soruIndex].state}
            onChangeText={(text) => handleCevapla(text, sorular[soruIndex].setFunction)}
          />
        ) : (
          <Picker   
            style={styles.input}
            selectedValue={sorular[soruIndex].state}
            onValueChange={(itemValue) => handleCevapla(itemValue, sorular[soruIndex].setFunction)}
          >
            {sorular[soruIndex].secenekler.map((secenek, index) => (
              <Picker.Item  key={index} label={secenek} value={secenek} />
            ))}
          </Picker>
        )}
        {soruIndex < sorular.length - 1 && (
          <Button  color="orange" style={styles.nextButton} title="    Devam Et    " onPress={handleDevamEt} />
        )}
        {soruIndex === sorular.length - 1 && (
          <Button  color="#008000" style={styles.finishButton} title="   Başlayalım   " onPress={handleBaslayalim} />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width:'100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
  },
  soruMetni: {
    fontSize: 18,
    marginBottom: 18,
    
  },
  input: {
  
    height: 40,
    width: 160,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign:'center',
    fontSize:18
  },
  nextButton: {
      width:22,
      backgroundColor:'red',
      color:'red'
  },
  finishButton: {
    width:22,
    backgroundColor:'red',
    color:'red'
  },
});
