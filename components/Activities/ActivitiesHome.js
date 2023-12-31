import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function ActivitiesHome({}) {

    const ActivitieItems = [
        { id: 1, title: 'Koşma(Orta Tempo)', ActiviteMET: 3.5, imagePath: require('./images/runm.png') },
        { id: 2, title: 'Yürüyüş', ActiviteMET: 3, imagePath: require('./images/walk.png') },
        { id: 3, title: 'Koşma(Hızlı Tempo)', ActiviteMET: 3, imagePath: require('./images/fastrun.png') },
        { id: 5, title: 'Bisiklet Sürmek', ActiviteMET: 3, imagePath: require('./images/byc.png') },
        { id: 6, title: 'Ev Temizliği', ActiviteMET: 3, imagePath: require('./images/evisleri.png') },
        { id: 7, title: 'Ağırlık Antremanı', ActiviteMET: 3, imagePath: require('./images/gym.png') },
        { id: 8, title: 'futbol', ActiviteMET: 3, imagePath: require('./images/futbol.png') },
        { id: 9, title: 'basketbol', ActiviteMET: 3, imagePath: require('./images/basketbol.png') },
        { id: 10, title: 'Tırmanma', ActiviteMET: 3, imagePath: require('./images/climbing.png') },
        { id: 11, title: 'Merdiven Çıkma', ActiviteMET: 3, imagePath: require('./images/climbingstairs.png') },
        { id: 11, title: 'Dövüş Sporları', ActiviteMET: 3, imagePath: require('./images/combatsports.png') },
        { id: 11, title: 'Golf', ActiviteMET: 3, imagePath: require('./images/golf.png') },
        { id: 11, title: 'Egzersiz', ActiviteMET: 3, imagePath: require('./images/squat.png') },
        { id: 11, title: 'Voleybol', ActiviteMET: 3, imagePath: require('./images/voleybool.png') },
        { id: 11, title: 'Ağırlık Antremanı', ActiviteMET: 3, imagePath: require('./images/gymm.png') },
        { id: 11, title: 'Masa Tenisi', ActiviteMET: 3, imagePath: require('./images/table.png') },
    ];
    const navigation = useNavigation();



    const renderImageItem = ({ item }) => (
        <View style={style.imageContainer}>

            <View style={style.imageText}>

          
            <TouchableOpacity   onPress={()=> navigation.navigate('Activite', { item })} style={style.imageTap}>
                    <Image
                        style={style.image}
                        source={item.imagePath}
                    />
                <Text style={style.text}> {item.title}
                </Text>
        </TouchableOpacity>
            </View>
        </View>
    );

 
     

    return (
        <SafeAreaView>
           
                <Text style={{ padding: 10, fontSize: 18, marginVertical: 8, fontWeight: '400' }}> Favoriler
                </Text>


                <View style={style.container}>
              

               
                    <FlatList
                        data={ActivitieItems}
                        renderItem={renderImageItem}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={3}
                    />
                    
                </View>



        </SafeAreaView>
    )
}
const style = StyleSheet.create({

    imageContainer: {
        flex: 1,
    },
    text: {
      fontSize:14,
      fontWeight:'400',
      padding:1,
      margin:1, 

    },


    imageText: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.6,
                shadowRadius: 3,
            },
            android: {
                elevation: 6,
            },
        }),

        backgroundColor: 'white',
        padding: 5,
        alignItems: 'center',
        borderRadius: 10,
        margin: 6

    },

    image: {
        width: '100%',
        height: 100,
        aspectRatio: 1,


    },
    container: {

       

    }
});
