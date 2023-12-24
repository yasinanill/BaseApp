import React, { useState } from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, TextInput, Title, Subheading, Button } from "react-native-paper";

export default function BmiCalculator() {
 


    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmiResult, setBmiResult] = useState(null);
  
    const calculateBMI = () => {
      if (height && weight) {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmiResult(bmi);
      }
    };





    return (
    
        
        
        <SafeAreaView>
        <View>
            <View style={style.content}>
                <View>
                {bmiResult !== 0 ? (
                       <View style={{ marginTop: 20 }}>
                       <Text>Your BMI: {bmiResult}</Text>
                       
                     </View>
) : (

<Image
style={style.Image}
source={item.imagePath}
/>
                    )}
                </View>
            </View>
            
     


            <View style={{ margin: 8, }}>
              <Button  onPress={this.componentHideAndShow} >
           Kalori Hesapla  </Button>

                <TextInput label="Boy(cm)" keyboardType="numeric"  style={{ margin: 10, }} onChangeText={setHeight}
                   
                />
                <TextInput label="Kilo(kg)"  keyboardType="numeric" style={{ margin: 10, }}  onChangeText={setWeight}/>



                <Button compact mode="contained" onPress={calculateBMI}
                    style={{ margin: 10, }}
                > HESAPLA
                </Button>
           

            </View>
       
    

   


        </View>


    </SafeAreaView>

    );
  };
 
const style = StyleSheet.create({

    Image: { width: 100, height: 100, padding: 20, borderRadius: 20, },
    
    
    mealContainer:{



      

    },


    content: {
        margin: 16,
        borderRadius: 20, width: 360, height: 200, color: 'white', alignItems: "center", fontSize: 16, justifyContent: 'center', marginTop: 60, backgroundColor: "#ccc",
    },
    input: { padding: 10, backgroundColor: "white", flex: 1, },
    button: { padding: 10, backgroundColor: 'blue', borderRadius: 5, },
    text: { textAlign: "center", fontSize: 24, color: 'black', fontWeight: '700', },
    
    button: {
      width: 100,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      transform: [{ rotate: '45deg' }],
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    
    });
    
