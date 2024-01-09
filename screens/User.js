
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Picker, Image, Button, FlatList } from "react-native";
import { useSelector } from 'react-redux';
import ProgressBar from '../utils/ProgressBar';
import WeightLossTracker from '../utils/ProgressBar';
import WeightLossProgressBar from '../utils/ProgressBar';


const UserProfile = () => {

  const navigation = useNavigation();
  const user = useSelector((state) => state.user);

  console.log(user)



  const SquareView = ({ data, user }) => {
    return (
      <View style={style.squareContainer}>
        {data.map((item, index) => (
          <View key={index} style={[style.square, { borderColor: getBackgroundColor(index) }]}>
            <Text style={style.infoText}></Text>

            <Text style={style.infoText}>{item.isim}</Text>
          </View>
        ))}
      </View>
    );
  };

  const getBackgroundColor = (index) => {
    switch (index) {
      case 0:
        return 'red';
      case 1:
        return 'blue';
      case 2:
        return 'green';
      case 3:
        return 'yellow';
      default:
        return 'white';
    }
  };

  const data = [
    { kilo: 70, isim: 'Vücut Kitle Endeksin (BMI)' },
    { kilo: 65, isim: 'İdeal  Kilon' },
    { kilo: 80, isim: 'Ayşe' },
    { kilo: 60, isim: 'Fatma' },
  ];






  return (

    <View style={{ alignItems: 'center' }}>

      <View style={style.header}>


        <View>
          <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d" }} style={style.Avatar} />
        </View>
        <View style={style.UserName} >
          <Text style={{ fontSize: 16, fontWeight: '400', fontFamily: '' }}> Yasin Kaya</Text>

        </View>
      </View>




      <View style={{ width: '85%', height: 100, backgroundColor: '#ffffff', margin: 8, padding: 2, elevation: 5, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' }}>

        <View style={{ flex: 1, margin: 4, width: '70%', alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#444241' }}>Kilo : </Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#444241' }}>Boy :  {user.weight}</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#444241' }}>Yaş:  {user.weight}</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#444241' }}>Hedef: Kilo Vermek</Text>


        </View>

        <View style={{ flex: 1, margin: 4, width: '70%', alignItems: 'center' }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#444241' }}>Hedef Kilo</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#444241' }}>{user.weight - 10}</Text>


        </View>
      </View>





      <View style={style.container}>
        <SquareView data={data} />
      </View>


      <View style={{ width: '85%', height: 120, backgroundColor: '#ffffff', margin: 8, padding: 2, elevation: 5, borderRadius: 12, flexDirection: 'column', }}>

        <View style={{  margin: 4, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#444241' }}>Gelişimin</Text>

          <WeightLossProgressBar initialWeight={100} currentWeight={90} targetWeight={85} />

        </View>

        <View style={{ justifyContent:'space-between',padding:10, flexDirection:'row'}}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#444241' }}>{user.weight}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#444241' }}>{user.weight - 10}</Text>


        </View>
      </View>


    </View>









  );


}
export default UserProfile;
const style = StyleSheet.create({



  header: {


    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#89168D",
    width: '100%',
    height: 120,
    marginBottom: 30,

  },
  Avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginTop: 50,




  },
  UserName: {

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EC93EF",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 20,


  },
  ItemList: {


    flexDirection: "row",
    alignItems: "center",

    marginLeft: 4,
    padding: 10,



  }, detailsbutton: {



    alignItems: "center",
    justifyContent: "center",


  },
  ItemListText: {

    flexDirection: "row",
    flex: 1,
    alignItems: "center",

  },
  container: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  squareContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  square: {
    width: 160,
    height: 120,
    backgroundColor: '#ffffff',
    margin: 8,
    padding: 12,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },




});