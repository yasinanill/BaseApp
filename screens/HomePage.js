import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import { COLOURS } from '../components/database/Database';
import { useNavigation } from '@react-navigation/native';
import CircularProgressBar from '../utils/CircularProgressBar';
import { useSelector } from 'react-redux';

export default function HomePage() {

    const data = {
        promations: [
            { id: 1, title: 'Aralıklı Oruç (If Diyeti) ', description: 'Aralıklı oruç diyeti, günümüzde if diyeti veya intermittent fasting olarak da bilinmektedir. Aralıklı oruç diyetinin asıl amacı, diğer diyetlerin aksine alınan kalorileri kontrol etmek değil, yiyeceklerin tüketildiği zaman aralığını kontrol etmektir' },
            { id: 3, title: 'Bazal Metabolizma', description: 'Bazal metabolizma, vücudun yalnızca yaşamsal fonksiyonları (vücudu sıcak tutma, nefes alma vb.) idame ettirmek için enerji kullanan metabolik sisteme verilen addır' },
            { id: 4, title: 'Kalori Sayacı', description: ' Yediğiniz yemek için besin bilgilerini bulmakta ve öğün, egzersiz ve kilonuzu kolaylıkla takip etmeniz için gerekli bir uygulamadır.' },

        ],
        categories: [

           // { id: 1, title: 'Kalori Listesi', icon: require('../assets/images/kalorilistesi.png'), items: 'Home' },
           { id: 3, title: 'Öğünler', icon: require('../assets/images/recipes.png'),  },
            { id: 4, title: 'Aktiviteler', icon: require('../assets/images/activities.png'), items: 'ActivitiesHome' },
            { id: 5, title: 'Testler', icon: require('../assets/images/testler.png'),  },
            { id: 6, title: 'Tarifler', icon: require('../assets/images/foodss.png') },



        ],
        products: [ 
            { id: 4, title: 'Karpuz', Image: require('../components/database/images/foods/karpuz.jpg'), kalori:'150' },
          
            { id: 2, title: 'Dondurma', Image: require('../components/database/images/foods/dond.jpg'), kalori:'1333' },
            { id: 3, title: 'Kandil Simidi ', Image:  require('../components/database/images/foods/kandil.jpg'), kalori:'150' },
           

        ],
    };

    const promations = data.promations;

    const categories = data.categories;

    const totalActiviteCalories = useSelector(state => state.activiteCalories.totalCalories);
    console.log(totalActiviteCalories)
    const products = data.products;

    const navigation = useNavigation();


    renderCategoryItem = ({ item }) => {
        return <View style={style.categoryItem}>


            <View style={style.categoryItemIconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(item.items)} >
                    <Image source={item.icon} style={style.categoryItemIcon} /></TouchableOpacity>
            </View>
            <Text style={style.categoryItemTitle}>{item.title}</Text>

        </View>
    }
    renderProductItem = ({ item }) => {
        return <View style={style.productItem}>
<TouchableOpacity 
 >
       
            <View style={style.productItemIconContainer}>

                <Image source={item.Image} style={style.ProductItemimage} />
            </View>
            <View style={{padding:10}}>
            <Text style={style.productItemTitle}>{item.title}</Text>
       
            </View></TouchableOpacity>
        </View>
    }



    const [imageCount, setImageCount] = useState(1);
    const [WaterCount, setWaterCount] = useState(0.5);

    const addImage = () => {

        if (imageCount < 10) {
            setImageCount((prevCount) => prevCount + 1 );
            setWaterCount((prevCount) => prevCount + 0.5 );
        }
    };
    const totalCalories = useSelector((state) => state.cart.totalCalories);


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={style.header}>

                <View>
                    <Text style={style.AppName}> KaloriNet</Text>
                </View>
                <TouchableOpacity >
                    <View>
                        <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d" }} style={style.Avatar} />
                    </View></TouchableOpacity>
            </View>
            <ScrollView style={{ flex: 1 }}>
                <View style={style.banner}>
                    <Text style={style.bannertext}>Kalori takip uygulamasi</Text>

                </View>


                <View style={style.categoryArea}>

                    <View style={style.categoryAreaTopBar}>
                        <View><Text style={style.categoryone}>Kategoriler</Text></View>
                        <View><Text style={style.categorytwo}>Hepsini gor</Text></View>


                    </View>
                    <View style={{ marginTop: 15 }}>
                        <FlatList style={{ paddingHorizontal: 4 }}
                            showsHorizontalScrollIndicator={false}
                            data={categories} horizontal={true} renderItem={this.renderCategoryItem} />


                    </View>

                </View>


              
                <TouchableOpacity onPress={() => navigation.navigate('MyCalorieCart')}>
                <View style={{ flex: 1, width: '95%', height: 90, backgroundColor: '#F5B7B1', margin: 8, padding: 2, borderRadius: 12,flexDirection:'row', justifyContent:'space-between' }}>
                     
              
                    <View style={{ flex: 1,margin:4, width: '70%'}}>
                               <Text style={{marginBottom:18, fontSize:18, fontWeight:'bold', color:'#FDFEFE'}}> Kalori Günlüğüm</Text>
                               <Text style={{ fontSize:12, color:'#FDFEFE'}}> Alınan kalori</Text>
                               <Text style={{marginLeft:4, fontSize:16, fontWeight:'bold', color:'#FDFEFE'}}>{totalCalories} / Kcal</Text>

                            </View>
                            <View style={{ width: '30%' , opacity: 0.5 , alignItems:'center' ,backgroundColor: '#FFFFFF50', justifyContent:'center',}}>
                            <Image
                                    
                                    style={{
                                        width: 60,
                                        height: 60,
                                        marginBottom: 10,
                                        margin:4
                                    }}
                                    source={require('../utils/Images/dinner.png')}/>
                            </View>


                </View>

</TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('ActivitiesHome')}>

                <View style={{ flex: 1, width: '95%', height: 90, backgroundColor: '#ABEBC6', margin: 8, padding: 2, borderRadius: 12,flexDirection:'row', justifyContent:'space-between' }}>
                     
              
        
              
                            <View style={{ flex: 1, width: '70%',margin:4}}>

               
                                <Text style={{marginBottom:18, fontSize:18, fontWeight:'bold', color:'#FDFEFE'}}> Egzersiz</Text>
                                <Text style={{ fontSize:12, color:'#FDFEFE'}}> Yakılan kalori</Text>
                               <Text style={{ marginLeft:4, fontSize:16, fontWeight:'bold', color:'#FDFEFE'}}>{totalActiviteCalories} / Kcal</Text>
                   
 
                           
                             </View>
                           
                           
                             <View style={{ width: '30%' , opacity: 0.5 , alignItems:'center' ,backgroundColor: '#FFFFFF50', justifyContent:'center',}}>
                         
                         
                         
                         
                             <Image
                                    
                                    style={{
                                        width: 60,
                                        height: 60,
                                        marginBottom: 10,
                                        margin:4
                                    }}
                                    source={require('../utils/Images/futbol.png')}/>
                             </View>
 
 
                 </View>

                 </TouchableOpacity>

                <View style={{ flex: 1, width: '95%', height: 180, backgroundColor: '#5DADE2', margin: 8, padding: 2, borderRadius: 12, }}>
                    <View style={{ alignItems: 'center' ,margin:4}}>
                        <Text> Su Takipcisi </Text>
                 
                        <Text style={{fontSize:16}}> {WaterCount} litre</Text>

                    </View>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            height: '100%',
                            flexWrap: 'wrap',
                        }}>

                            {Array.from({ length: imageCount }).map((_, index) => (
                                <Image
                                    key={index}
                                    style={{
                                        width: 50,
                                        height: 50,
                                        marginBottom: 10,
                                        margin:4
                                    }}
                                    source={require('../utils/Images/water.png')} // Resmin yolu buraya eklenmeli
                                />
                            ))}


                        </View >


                    </View>

                    <View style={{
                        alignItems: 'center'


                    }}>
                        <TouchableOpacity style={style.mealAddButton} onPress={addImage}>
                            <Text style={{
                                color: 'white',
                                fontSize: 24,
                                fontWeight: 'bold',
                            }}>+</Text>
                        </TouchableOpacity>
                    </View>

                </View>














                <View style={style.foodArea}>
                    <View style={style.categoryAreaTopBar}>
                        <View><Text style={style.categoryone}>Öne Çıkanlar</Text></View>



                    </View>
                    <TouchableOpacity>
                        <View style={{ marginTop: 5 }}>
                            <FlatList style={{ paddingHorizontal: 10, paddingVertical: 20 }}
                                showsHorizontalScrollIndicator={false}
                                data={products} horizontal={true} renderItem={this.renderProductItem} />



                        </View>


                    </TouchableOpacity>



                </View>



            </ScrollView>


        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    header: {

        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 2,

    },
    Avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,


    },
    AppName: {
        padding: 6,
        fontSize: 24,
        color: "#8a2be2",
        fontWeight: '700',
    },
    banner: {
        backgroundColor: "#8a2be2",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",

    },
    bannertext: {
        color: "white",
        textAlign: "center",
        fontSize: 15,

    },
    Searcharea: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,

    },
    SearchInput: {
        flex: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 20,
        backgroundColor: "white",
        borderRadius: 8,


    },
    Searchbar: {
        padding: 1,

        borderWidth: 1,
        borderColor: "#8a2be2",
        borderRadius: 8,


    },
    SearchButtoncontainer: {
        padding: 12,

        borderWidth: 1,
        borderColor: "#8a2be2",
        borderRadius: 5,
        marginLeft: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 20,
        backgroundColor: "white",
        borderRadius: 8,

    },
    promationItem: {
        backgroundColor: 'blue',
        padding: 10,
        flex: 1,
        width: 280,
        marginRight: 8,
        height: 152,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 20.

    },
    promation: {
        marginTop: 20,
        marginLeft: 10,

    },
    content: {


    },
    PromationTitle: {

        fontSize: 17,
        color: "white",
        fontWeight: '500',
    },
    Promationdescription: {

        fontSize: 12,
        color: "white",
        fontWeight: '500',
        marginTop: 12,
    },

    categoryAreaTopBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
    },

    categoryArea: {
        marginTop: 2,

    },
    categoryone: {
        fontSize: 16,
        color: COLOURS.Purple

    },

    categorytwo: {
        color: "#8a2be2",
        fontWeight: '500',

    },

    categoryItem: {

        padding: 6,
        marginRight: 4,
        borderRadius: 15,
        alignItems: 'center',

    },

    categoryItemIcon: {
        width: 70,
        height: 70,
        borderRadius: 10,

    },
    categoryItemIconContainer: {
        shadowColor: "#8a2be2",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 20,
        backgroundColor: "white",
        borderRadius: 10,
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: "center",
    },

    categoryItemTitle: {

        textAlign: 'center',
        marginTop: 4,

    },

    productItem: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 20,
        backgroundColor: "white",
        padding: 10,
        marginRight: 5,
        borderRadius: 10,
        width: 140,
        height: 130,

    },


    productItemIconContainer: {

        backgroundColor: "white",
        borderRadius: 10,

        alignItems: 'center',
        justifyContent: "center",
    },

    productItemTitle: {

        fontSize: 16,

        fontWeight: '500',

    },
    productItemKalori: {

        fontSize: 14,

        fontWeight: '500',

    },
    ProductItemimage: {

        width: 120,
        height: 80,

    },
    foodArea: {
        marginTop: 10,

    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },

    mealAddButton: {
        position: 'absolute',
        top: -16,

        backgroundColor: '#4CAF50',
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





}
);





