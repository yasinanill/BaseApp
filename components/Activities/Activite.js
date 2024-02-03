import {  Image, StyleSheet, Text,  View } from 'react-native'

import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, TextInput, Title, Subheading, Button } from "react-native-paper";
import { useDispatch, useSelector } from 'react-redux';
import { addCalorie } from '../../utils/redux/store';




export default function Activite({route}) {

    const {item } = route.params;
    const user = useSelector((state) => state.user);
    const  [content,setContent] = useState(true)
    const  [weight,setWeight] = useState(user.weight ? user.weight.toString() : 0 )
    const  [minute,setMinute] = useState(0)
    const  [calorie,setCalorie] = useState(0)
    const  [result,setResult] = useState(0)

    const dispatch = useDispatch();
   
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
            
            const resultCalorie =  (minuteInM * weightInM * item.ActiviteMET * 3.5) / (200);

            setResult(resultCalorie.toFixed(2));
            dispatch(addCalorie(resultCalorie));
    }
}

    componentHideAndShow = () => {
       setContent(!content),
       setResult(0)
      }
    
    
      return (
 
        <SafeAreaView>
            <View style={style.contents} >
                <View style={style.content}>
                    <View >
                    {result !== 0 ? (
                           <View style={{ marginTop: 10, alignItems:'center',justifyContent:'center',}}>
                           
                           <Text style={{fontSize:44 }}> {result}</Text>
                          
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
                    <TextInput label="Kilo"  keyboardType="numeric" style={{ margin: 10, }}   value={weight} onChangeText={(text) => setWeight(text)}/>



                    <Button compact mode="contained" onPress={resultByMinute}
                        style={{ margin: 10,  borderRadius:4}}
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
                        style={{ margin: 10, borderRadius:4}}
                    > HESAPLA
                    </Button>
                
           

                </View> )}


       
  

            </View>


        </SafeAreaView>







    )






}

const style = StyleSheet.create({

Image: { width: 100, height: 100, padding: 10, borderRadius: 20,  resizeMode:'contain'},
contents: {
    
},
content: {
    margin: 16,
    borderRadius: 20, width: 360, height: 200, color: 'white', alignItems: "center", fontSize: 16, justifyContent: 'center', marginTop: 12, backgroundColor: "#ccc",flexDirection:'column'
},
input: { padding: 10, backgroundColor: "white", flex: 1, },
button: { padding: 10, backgroundColor: 'blue', borderRadius: 2, },
text: { textAlign: "center", fontSize: 24, color: 'black', fontWeight: '700', },

button: {
  width: 10,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
 
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
},

});


