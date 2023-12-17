import {  Image, StyleSheet, Text,  View } from 'react-native'

import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, TextInput, Title, Subheading, Button } from "react-native-paper";



export default function Activite({route}) {

    const {item } = route.params;

    const  [content,setContent] = useState(true)
    const  [weight,setWeight] = useState(0)
    const  [minute,setMinute] = useState(0)
    const  [calorie,setCalorie] = useState(0)
    const  [result,setResult] = useState(0)

   
    resultByCalorie =()=>{

        if (calorie && weight) {
            const calories = parseFloat(calorie);
            const weightInM = parseFloat(weight);
            
            const resultMinute =  (calories * 200) / (weightInM * 3.5 * item.ActiviteMET);

            setResult(resultMinute.toFixed(1));
            
    }
}
   
resultByMinute =()=>{

        if (minute && weight) {
            const minuteInM = parseFloat(minute);
            const weightInM = parseFloat(weight);
            
            const resultMinute =  (minuteInM * weightInM * item.ActiviteMET * 3.5) / (200);

            setResult(resultMinute.toFixed(2));
 
    }
}

    componentHideAndShow = () => {
       setContent(!content)
      }
    
    
      return (
 
        <SafeAreaView>
            <View>
                <View style={style.content}>
                    <View>
                    {result !== 0 ? (
                           <View style={{ marginTop: 20 }}>
                           <Text>Your BMI: {result}</Text>
                           
                         </View>
) : (

   <Image
   style={style.Image}
   source={item.imagePath}
/>
                        )}
                    </View>
                </View>
                
           {   content ?     (


                <View style={{ margin: 8, }}>
                  <Button  onPress={this.componentHideAndShow} >
               Kalori Hesapla  </Button>

                    <TextInput label="Dakika" keyboardType="numeric"  style={{ margin: 10, }} onChangeText={setMinute}
                       
                    />
                    <TextInput label="Kilo"  keyboardType="numeric" style={{ margin: 10, }}  onChangeText={setWeight}/>



                    <Button compact mode="contained" onPress={resultByMinute}
                        style={{ margin: 10, }}
                    > HESAPLA
                    </Button>
               

                </View>
           
             ) : (
          
                <View style={{ margin: 8, }}>

<Button  onPress={this.componentHideAndShow} >
                Dakika Hesapla   </Button>
                    <TextInput label="Kalori"  keyboardType="numeric" style={{ margin: 10, }} onChangeText={setCalorie} 
                       
                    />
                    <TextInput label="Kilo"  keyboardType="numeric" style={{ margin: 10, }}  onChangeText={setWeight}/>



                    <Button compact mode="contained" onPress={resultByCalorie}
                        style={{ margin: 10, }}
                    > HESAPLA
                    </Button>
                
           

                </View> )}


       
  

            </View>


        </SafeAreaView>







    )






}

const style = StyleSheet.create({

Image: { width: 100, height: 100, padding: 20, borderRadius: 20, },

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


