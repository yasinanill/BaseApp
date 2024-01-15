

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import axios from 'axios'

import { LinearGradient } from 'expo-linear-gradient';

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

            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                colors={['#FFECB3', '#FFCCBC', '#FFAB91']} // İki renk arasında geçiş yapacak şekilde renkleri ayarlayabilirsiniz
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
            </LinearGradient>
        );
    };



    return (


        <SafeAreaView style={{ flex: 1, padding: 16, marginVertical: 21 }}>
            <View style={styles.categoryAreaContainer}>
            <View style={styles.categoryAreaTopBar}>
                        <Text style={styles.categoryone}>ÖGÜNLER</Text>
                    </View>
                <View style={styles.categoryArea}>
                    <FlatList
                        style={{ paddingHorizontal: 4 }}
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
                                style={{ paddingHorizontal: 2, marginBottom: 12, paddingVertical: 12 }}
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

                <View style={styles.square}>
                    <Text style={styles.UserInfoText}>100-200</Text>

                    <Text style={styles.infoText}>KALORİ</Text>
                </View>
                <View style={styles.square}>

                    <Text style={styles.UserInfoText}>200-300</Text>

                    <Text style={styles.infoText}>KALORİ</Text>
                </View>

                <View style={styles.square}>
                    <Text style={styles.UserInfoText}>300-400</Text>

                    <Text style={styles.infoText}>KALORİ</Text>
                </View>
                <View style={styles.square}>
                    <Text style={styles.UserInfoText}>400-500</Text>

                    <Text style={styles.infoText}>KALORİ</Text>
                </View>

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
        width: 90,
        height: 90,
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
        width: 90,
        height: 90,
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

        margin: 2,
        marginBottom: 8,
        borderRadius: 15,
        width: 200,
        height: 240,

    },


    productItemIconContainer: {


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

        width: 180,
        height: 120,

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
        
        width: 160,
        height: 100,
        margin: 10,
       
        borderRadius: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
      
        backgroundColor: 'rgba(21, 135, 229, 0.9)',


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