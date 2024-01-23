import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Keyboard, SafeAreaView, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useDispatch } from 'react-redux';
import { setUserData } from '../utils/redux/store';


export default function CalorieCalculator (){

    const dispatch = useDispatch();
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
    
    const [calorieResult, setCalorieResult] = useState(null);
    const [idealWeight, setIdealWeight] = useState(null);
  
    const validateForm = () => {
      if (!age || !height || !weight || !gender || !activityLevel) {
        alert('Bütün Boşluklar Doldurulmalı');
      } else {
        calculateResults();
      }
    };
  
    const calculateResults = () => {
      calculateBMI()
      calculateCalories()
      calculateBMR()
      calculateIdealWeight()
   
   
   
  
    };



    const calculateBMI = () => {
      const bmi = (parseFloat(weight) / ((parseFloat(height) / 100) ** 2)).toFixed(2);
      setBmiResult(bmi);
    };
  
    const calculateCalories = () => {
      const bmr = calculateBMR();
      if (bmr !== null) {
        const calories = (bmr * activityLevel).toFixed(2);
        setCalorieResult(calories);
      } else {
        alert('Geçersiz Değer');
      }
    };
  
    const calculateBMR = () => {
      if (gender === 'male') {
        return (10 * parseFloat(weight)) + (6.25 * parseFloat(height)) - (5 * parseFloat(age)) + 5;
      } else if (gender === 'female') {
        return (10 * parseFloat(weight)) + (6.25 * parseFloat(height)) - (5 * parseFloat(age)) - 161;
      } else {
        return null;
      }
    };
  
    const calculateIdealWeight = () => {
      let idealWeightValue = null;
  
      if (gender === 'male') {
        idealWeightValue = (22.0 * ((parseFloat(height) / 100) ** 2)).toFixed(2);
      } else if (gender === 'female') {
        idealWeightValue = (21.7 * ((parseFloat(height) / 100) ** 2)).toFixed(2);
      }
  
      setIdealWeight(idealWeightValue);
    };
  
    const activityLevels = [
      { label: 'Hareketsiz', value: 1.2 },
      { label: 'Az Aktif', value: 1.375 },
      { label: 'Normal Aktivite', value: 1.55 },
      { label: 'Çok Aktif', value: 1.725 },
      { label: 'Ekstra Aktif', value: 1.9 },
    ];
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>HESAPLA</Text>
        <View style={styles.form}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Yaş</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Yasınızı Girin"
              onChangeText={setAge}
              value={age}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Boy (cm)</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Boyunuzu Girin"
              onChangeText={setHeight}
              value={height}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Kilo(kg)</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Kilonuzu Girin"
              onChangeText={setWeight}
              value={weight}
              keyboardType="numeric"
              onBlur={Keyboard.dismiss}
            />
          </View>
          <View style={styles.genderRow}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'male' && styles.selectedGender,
              ]}
              onPress={() => setGender('male')}
            >
              <Text style={styles.genderText}>Erkek</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 'female' && styles.selectedGender,
              ]}
              onPress={() => setGender('female')}
            >
              <Text style={styles.genderText}>Kadın</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Aktivite Düzeyi</Text>
            <Picker
              style={styles.textInput}
              selectedValue={activityLevel}
              onValueChange={(itemValue) => setActivityLevel(itemValue)}
            >
              {activityLevels.map((level, index) => (
                <Picker.Item key={index} label={level.label} value={level.value} />
              ))}
            </Picker>
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={validateForm}>
            <Text style={styles.submitButtonText}>Sonuçları Gör</Text>
          </TouchableOpacity>
          <View style={styles.resultContainer}>


            <Text style={styles.resultText}>Ideal Kilo:                                {idealWeight}kg</Text>
            <Text style={styles.resultText}>Vücüt Kitle Endeksi:              {bmiResult}</Text>
            <Text style={styles.resultText}>Günlük Kalori İhtiyacı:           {calorieResult}/kcal</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height:'100%',
      flex:1,
      backgroundColor: '#eef2f3',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#289df6',
      marginBottom: 20,
    
    },
    form: {
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 20,
      width: '90%',
      height: '80%',
      elevation: 5,
    },
    inputRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 40,
    },
    label: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
    },
    textInput: {
      flex: 2,
      height: 50,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      paddingLeft: 10,
      fontSize: 16,
    },
    genderRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    genderButton: {
      flex: 1,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#dbeffe',
      padding: 10,
      margin: 5,
    },
    selectedGender: {
      backgroundColor: '#289df6',
    },
    genderText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
    },
    submitButton: {
      backgroundColor: '#289df6',
      borderRadius: 10,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    submitButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    resultContainer: {
      marginTop: 40,
      justifyContent: 'center'
    },
    resultLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      padding:5
    },
    resultText: {
      fontSize: 16,
      padding:5,
      fontWeight: 'bold',
    },
  });
