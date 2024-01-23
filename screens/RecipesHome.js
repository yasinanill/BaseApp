

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import axios from 'axios'

import { LinearGradient } from 'expo-linear-gradient';
import { Circle, Path, Svg } from 'react-native-svg';

export default function RecipesHome() {

    const data = {


        promations: [
            { id: 1, title: 'Aralıklı Oruç (If Diyeti) ', description: 'Aralıklı oruç diyeti, günümüzde if diyeti veya intermittent fasting olarak da bilinmektedir. Aralıklı oruç diyetinin asıl amacı, diğer diyetlerin aksine alınan kalorileri kontrol etmek değil, yiyeceklerin tüketildiği zaman aralığını kontrol etmektir' },
            { id: 3, title: 'Bazal Metabolizma', description: 'Bazal metabolizma, vücudun yalnızca yaşamsal fonksiyonları (vücudu sıcak tutma, nefes alma vb.) idame ettirmek için enerji kullanan metabolik sisteme verilen addır' },
            { id: 4, title: 'Kalori Sayacı', description: ' Yediğiniz yemek için besin bilgilerini bulmakta ve öğün, egzersiz ve kilonuzu kolaylıkla takip etmeniz için gerekli bir uygulamadır.' },

        ],
        categories: [

            // { id: 1, title: 'Kalori Listesi', icon: require('../assets/images/kalorilistesi.png'), items: 'Home' },
            { id: 3, title: 'Kahvaltı', icon: require('../assets/images/recipes.png'), items: 'FoodInfo' },
            { id: 4, title: 'Ara Öğün', icon: require('../assets/images/activities.png'), items: 'ActivitiesHome' },
            { id: 5, title: 'Akşam Yemeği', icon: require('../assets/images/testler.png'), items: 'CalorieCalculator' },
            { id: 6, title: 'Tatlılar', icon: require('../assets/images/foodss.png') },



        ],
        products: [
            { id: 4, title: 'Karpuz', Image: require('../components/database/images/foods/karpuz.jpg'), kalori: '150' },

            { id: 2, title: 'Dondurma', Image: require('../components/database/images/foods/dond.jpg'), kalori: '1333' },
            { id: 3, title: 'Kandil Simidi ', Image: require('../components/database/images/foods/kandil.jpg'), kalori: '150' },


        ],
    };

    const products = data.products;
    const categories = data.categories;



    renderCategoryItem = ({ item }) => {
        return <View style={styles.categoryItem}>


            <View style={styles.categoryItemIconContainer}>
                <TouchableOpacity onPress={() => navigation.navigate(item.items)} >
                    <Image source={item.icon} style={styles.categoryItemIcon} /></TouchableOpacity>
            </View>
            <Text style={styles.categoryItemTitle}>{item.title}</Text>

        </View>
    }

    renderProductItem = ({ item }) => {
        return (

            <View
                style={styles.productItem} // Diğer stilleri buradan alabilir veya düzenleyebilirsiniz
            >
                <TouchableOpacity>
               
                    <View style={styles.productItemIconContainer}>
                        <Image source={item.Image} style={styles.ProductItemimage} />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.productItemTitle}>{item.title} </Text>
                        <Text style={styles.productItemTitle}>{item.kalori} /kcal</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
    const data2 = [
        { range: '100-200', calorie: 'KALORİ' },
        { range: '200-300', calorie: 'KALORİ' },
        { range: '300-400', calorie: 'KALORİ' },
        { range: '400-500', calorie: 'KALORİ' },
      ];

    const SquareWithSvg = ({ range, calorie }) => (
        <View style={styles.square}>
        <View style={styles.svgContainerTop}>

        </View>
      
        <View style={styles.svgContainerBottom}>
          <Svg
            height="80%"
            width="100%"
            viewBox="0 0 1420 200"
            style={{ position: 'absolute', bottom: -8, borderRadius: 30,
            overflow: 'hidden' }}
          >
            <Path fill="#0099ff"  d="M0,96L34.3,101.3C68.6,107,137,117,206,106.7C274.3,96,343,64,411,69.3C480,75,549,117,617,144C685.7,171,754,181,823,176C891.4,171,960,149,1029,144C1097.1,139,1166,149,1234,165.3C1302.9,181,1371,203,1406,213.3L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></Path>
          </Svg>
        </View>
      
        <Text style={styles.UserInfoText}>{range}</Text>
        <Text style={styles.infoText}>{calorie}</Text>
      </View>
      );








    return (


        <SafeAreaView style={{  padding: 2, marginVertical: 21 }}>
            <View style={styles.categoryAreaContainer}>
            <View style={styles.categoryAreaTopBar}>
                        <Text style={styles.categoryone}>ÖGÜNLER</Text>
                    </View>
                <View style={styles.categoryArea}>
                    <FlatList
                        style={{ paddingHorizontal: 16 }}
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        horizontal={true}
                        renderItem={this.renderCategoryItem}
                    />
                </View>
            </View>
            <View style={styles.foodAreaContainer}>
                <View style={styles.foodArea}>
                    <View style={styles.categoryAreaTopBar}>
                        <Text style={styles.categoryone}>FAVAVORİLER</Text>
                    </View>
                    <View>
                        <View style={{ marginTop: 2 }}>
                        
                        
                           <FlatList
                                style={{ paddingHorizontal: 12, marginBottom: 12, paddingVertical: 12 }}
                                showsHorizontalScrollIndicator={false}
                                data={products}
                                horizontal={true}
                                renderItem={this.renderProductItem}
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.categoryAreaTopBar}>
                <Text style={styles.categoryone}>KALORİ SAYAÇLARI</Text>
            </View>
            <View style={styles.squareContainer}>
      {data2.map((item, index) => (
        <SquareWithSvg key={index} {...item} />
      ))}
    </View>






        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    categoryAreaTopBar: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 2,
        paddingHorizontal: 10,
    },

    categoryArea: {
        margin: 2,


    },
    categoryone: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        color: '#556b2f',

    },

    categorytwo: {

        color: "#8a2be2",
        fontWeight: '500',

    },

    categoryItem: {

        padding: 2,
        marginRight: 2,
        marginTop: 12,
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
        elevation: 5,
        backgroundColor: "white",
        borderRadius: 10,
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: "center",
    },

    categoryItemTitle: {

        textAlign: 'center',
        marginTop: 4,

    },

    productItem: {
        shadowColor: "#000",
        elevation: 5,
        backgroundColor: "#ffffff",
        padding: 8,
        borderWidth:1,
        borderColor:'#2f4f4f',
        margin: 2,
        marginBottom: 8,
        borderRadius: 8,
        width: 200,
        height: 220,

    },
    svgContainerTop: {
        width: '100%',
        height: '62%',
        position: 'absolute',
        top: 0,
      },
      svgContainerBottom: {
        width: '100%',
        height: '80%',
        position: 'absolute',
        bottom: 0,
      },

    productItemIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    productItemTitle: {

        fontSize: 12,

        fontWeight: '500',

    },
    productItemKalori: {

        fontSize: 14,

        fontWeight: '500',

    },
    ProductItemimage: {

        width: 160,
        height: 140,
        borderRadius:10

    },
    foodArea: {
        marginTop: 10,

    }, container: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    squareContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        

      
    },
    square: {
        position: 'relative',
  
        width: 160,
        height: 100,
        marginHorizontal: 16,
        marginVertical:8,
       
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
      
        backgroundColor: 'white',


    },
    UserInfoText: {
        fontSize: 16,

        fontWeight: '700',
       
    },
    infoText: {
        fontSize: 12,
       
    },

    infoIcon: {
        position: 'absolute',
        top: 4,
        right: 4,

    },
});