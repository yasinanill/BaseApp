import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import CircularProgressBar from '../utils/CircularProgressBar';

export default function MealCalorieCart({route}) {
  
  
const { mealType } = route.params;
const totalCalories = useSelector((state) => state.cart.totalCalories);
const totalCarbo = useSelector((state) => state.cart.totalCarbo);
const totalPro = useSelector((state) => state.cart.totalPro);
const totalFat = useSelector((state) => state.cart.totalFat);

const totalActiviteCalories = useSelector(state => state.activiteCalories.totalCalories);
const myValue = totalCalories;


 const allItems = useSelector((state) => state.cart.items);
 const mealTypeItems = allItems.filter((item) => item.mealType === mealType);


  const mealTypeItemsCalories = mealTypeItems.reduce((totalCalorie, item) => totalCalorie + item.productCalorie, 0)

    console.log(mealTypeItems)
    console.log(mealTypeItemsCalories)
  
  
    const renderItem = ({ item }) => (

     <View style={{ flex: 1, flexDirection: 'column' }}>
    
  

      <View style={styles.mealContainer} >
        <View style={styles.mealContainerLchild}>
      
          <View style={{ flex: 1, alignItems:'center'}}>
         
           
                <Text  style={{ fontSize: 12, padding: 1 }}> {item.productName} </Text>
                <Text  style={{ fontSize: 12, padding: 1 }}> {item.Amount} </Text>
              
          
         
          </View>
        </View>
        <View style={styles.mealContainerRchild}>
        <Text  style={{ fontSize: 12, padding: 1 }}> {item.productCalorie} /Kcal</Text>
          <View style={styles.buttonContainer}></View>
          <TouchableOpacity style={styles.mealAddButton} >
            <Text style={{
              color: 'white',
              fontSize: 24,
              fontWeight: 'bold',
            }}>-</Text>
          </TouchableOpacity>
        </View>
      </View> 
      

    </View>
  );



  
  return (
    <View>

    <CircularProgressBar/>

    <FlatList
          data={mealTypeItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          scrollEnabled={false}
        />
    </View>
  )
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

mealContainer: {

  backgroundColor: 'white', height: 60, alignItems: 'center', width: '95%', flexDirection: 'row', borderRadius: 13, flex: 1, justifyContent: 'space-between', marginVertical: 2,marginLeft:12,
  borderBottomRightRadius: 12, borderWidth: 1, borderColor: '#ccc', borderRightWidth: 1,




},

mealContainerRchild: {
  padding: 4, height: '100%', width: '30%', borderRadius: 10, borderBottomRightRadius: 44, position: 'relative', justifyContent: 'center',
},
mealContainerLchild: {

  height: '100%', padding: 4, width: '50%', borderRadius: 10,alignItems:'flex-start'

},
mealImage: {

  width: 100, height: 100, position: 'absolute',
  top: 1,
  right: 2,

},
mealAddButton: {
  position: 'absolute',
  bottom: 12,
  right: -6,
  backgroundColor: 'red',
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

},

line: {
  width: '80%', // Çizgi uzunluğu
  height: 1,
  backgroundColor: '#f95959',
  marginVertical: 2,

},
mealContainerTitle: {
  fontSize: 16,
  color: '#4CAF50',

}

});