import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
export default function ActivitiesHome({ }) {

    const [activitieItems, setActivitieItems] = useState([
        { id: 1, title: 'Koşma(Orta Tempo)', ActiviteMET: 3.5, imagePath: require('./images/runm.png') ,isFavorite:"false", },
        { id: 2, title: 'Yürüyüş', ActiviteMET: 3, imagePath: require('./images/walk.png'), isFavorite:"false", },
        { id: 3, title: 'Koşma(Hızlı Tempo)', ActiviteMET: 3, imagePath: require('./images/fastrun.png'),isFavorite:"false", },
        { id: 5, title: 'Bisiklet Sürmek', ActiviteMET: 3, imagePath: require('./images/byc.png') ,isFavorite:"true",},
        { id: 6, title: 'Ev Temizliği', ActiviteMET: 3, imagePath: require('./images/evisleri.png') ,isFavorite:"false",},
        { id: 7, title: 'Ağırlık Antremanı', ActiviteMET: 3, imagePath: require('./images/gym.png'),isFavorite:"false", },
        { id: 8, title: 'futbol', ActiviteMET: 3, imagePath: require('./images/futbol.png') ,isFavorite:"true",},
        { id: 9, title: 'basketbol', ActiviteMET: 3, imagePath: require('./images/basketbol.png'),isFavorite:"false", },
        { id: 10, title: 'Tırmanma', ActiviteMET: 3, imagePath: require('./images/climbing.png') ,isFavorite:"false",},
        { id: 11, title: 'Merdiven Çıkma', ActiviteMET: 3, imagePath: require('./images/climbingstairs.png') ,isFavorite:"false",},
        { id: 12, title: 'Dövüş Sporları', ActiviteMET: 3, imagePath: require('./images/combatsports.png') ,isFavorite:"false",},
        { id: 13, title: 'Golf', ActiviteMET: 3, imagePath: require('./images/golf.png'),isFavorite:"false", },
        { id: 14, title: 'Egzersiz', ActiviteMET: 3, imagePath: require('./images/squat.png') ,isFavorite:"true",},
        { id: 15, title: 'Voleybol', ActiviteMET: 3, imagePath: require('./images/voleybool.png'),isFavorite:"false", },
        { id: 16, title: 'Ağırlık Antremanı', ActiviteMET: 3, imagePath: require('./images/gymm.png'),isFavorite:"false", },
        { id: 17, title: 'Masa Tenisi', ActiviteMET: 3, imagePath: require('./images/table.png'),isFavorite:"false", },
    ]);
    const navigation = useNavigation();
    const [isFavorite, setIsFavorite] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
     const [searchResults, setSearchResults] = useState([]);
   


     const handleSearch = (term) => {

        const results = activitieItems.filter((item) =>
          item.title && item.title.toLowerCase().includes(term.toLowerCase())
        );
    
        setSearchResults(results);
    
    
    
      };




   
    const favoriteItems = activitieItems.filter(item => item.isFavorite === 'true');
    console.log(favoriteItems);
    const toggleFavorite = (itemId) => {
        setActivitieItems(prevItems => (
          prevItems.map(item => (
            item.id === itemId ? { ...item, isFavorite: !item.isFavorite } : item
          ))
        ));
      };




    const renderImageItem = ({ item }) => (
        <View style={style.imageContainer}>

            <View  style={style.imageText}>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={style.favoriteButton}>
                                <FontAwesome name={item.isFavorite == 'true' ? 'star' : 'star-o'} size={24} color={item.isFavorite == 'true' ? 'gold' : 'gray'} />
                                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Activite', { item })} style={style.imageTap}>
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
        <SafeAreaView style={style.container}>

            <View >
   
    <TextInput
        style={style.input}
        placeholder="Aktivite adını girin..."
        value={searchTerm}
        onChangeText={(text) => {
          setSearchTerm(text);
          if (text.length >= 1) {
            handleSearch(text);
          }
        }}
      />
                <FlatList
                data={searchResults}
                renderItem={renderImageItem}

                 keyExtractor={(item) => item.id.toString()} numColumns={3}
         />    



                <Text style={{ padding: 10, fontSize: 18, marginVertical: 8, fontWeight: '400' }}> Favoriler
                </Text>


                <ScrollView style={{}}>




                    <View style={style.imageContainer}>
                        {favoriteItems.map(item => (



                            <View key={item.id} style={style.imageContain}>

                                <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={style.favoriteButton}>
                                <FontAwesome name={item.isFavorite == 'true' ? 'star' : 'star-0'} size={24} color={item.isFavorite == 'true' ? 'gold' : 'gray'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Activite', { item })} style={style.imageTap}>
                                    <Image
                                        style={style.image}
                                        source={item.imagePath}
                                    />
                                    <Text style={style.text}>{item.title}
                                    </Text>
                                </TouchableOpacity>
                            </View>




                        ))}


                    </View>
                </ScrollView>

            </View>

        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container: {
        height: '100%',
        padding: 10,
        backgroundColor: '#fff',

    },
    imageContainer: {

        flexGrow: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',

    },
    text: {
        fontSize: 12,
        fontWeight: '400',
        padding: 1,
        margin: 1,

    },
    input: {

        margin: 12,
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginBottom: 4,
        paddingLeft: 10,
        borderRadius: 2,
        backgroundColor: '#fff',
    },

    favoriteButton: {
        position: 'absolute',
        top: 7,
        right: 7,
        zIndex: 1,
      },


    imageText: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
        width: 100,
        position: 'relative',

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
    imageContain: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
        width: '30%',
        position: 'relative',

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
        height: 90,
        aspectRatio: 1,
        resizeMode: 'contain'

    },

});
