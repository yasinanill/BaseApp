
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Picker, Image, Button } from "react-native";
import { useSelector } from 'react-redux';


const UserProfile = () => {

    const navigation = useNavigation();
    const user = useSelector((state) => state.user);
    const [imageCount, setImageCount] = useState(1);
    console.log(user)


    return (
        <SafeAreaView>
            <View style={{ flex: 1, height: '100%', }}>

                <View style={style.header}>


                    <View>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d" }} style={style.Avatar} />
                    </View>
                    <View style={style.UserName} >
                        <Text style={{ fontSize: 16, fontWeight: '400', fontFamily: '' }}> Yasin Kaya</Text>

                    </View>
                </View>



                <View style={{ width: '95%', height: 120, backgroundColor: '#2AA3A9', margin: 8, padding: 2, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flex: 1, margin: 4, width: '70%', alignItems: 'center' }}>
                        <Text style={{ marginBottom: 12, fontSize: 18, fontWeight: 'bold', color: '#FDFEFE' }}> Vucut Kitle Endeksin</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#FDFEFE' }}> BMI</Text>


                    </View>
                </View>




                <View style={{ width: '95%', height: 80, backgroundColor: '#522AA9', margin: 8, padding: 2, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flex: 1, margin: 4, width: '70%', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#FDFEFE' }}> {user.idealWeight}</Text>
                        <Text style={{ marginTop: 8, fontSize: 12, fontWeight: 'bold', color: '#FDFEFE' }}>İdeal  Kilon</Text>



                    </View>

                </View>
                <View style={{ width: '95%', height: 80, backgroundColor: '#522AA9', margin: 8, padding: 2, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flex: 1, margin: 4, width: '70%', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#FDFEFE' }}>  {user.calorieResult}</Text>
                        <Text style={{ marginTop: 8, fontSize: 12, fontWeight: 'bold', color: '#FDFEFE' }}> İdeal Kalori İhtiyacın</Text>



                    </View>

                </View>
                <View style={{ width: '95%', height: 80, backgroundColor: '#522AA9', margin: 8, padding: 2, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' }}>

                    <View style={{ flex: 1, margin: 4, width: '70%', alignItems: 'center', justifyContent: 'center' }}>

                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#FDFEFE' }}>  {user.bmiResult} </Text>
                        <Text style={{ marginTop: 8, fontSize: 12, fontWeight: 'bold', color: '#FDFEFE' }}> Vücut Kitle Endeksin (BMI)</Text>



                    </View>

                </View>





            </View>







        </SafeAreaView>


    );


}
export default UserProfile;
const style = StyleSheet.create({



    header: {


        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#89168D",

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

        marginLeft: 10,
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
        flexWrap: 'wrap'
    },
    image: {
        width: 40,
        height: 40,
        marginBottom: 10,
    },
    imageb: {
        width: 2440,
        height: 2440,
        marginBottom: 10,
    },






});