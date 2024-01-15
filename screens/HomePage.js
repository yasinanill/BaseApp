import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import { COLOURS } from '../components/database/Database';
import { useNavigation } from '@react-navigation/native';
import CircularProgressBar from '../utils/CircularProgressBar';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'react-native-svg';
export default function HomePage() {
    const data = {
        promations: [
            { id: 1, title: 'Aralıklı Oruç (If Diyeti) ', description: 'Aralıklı oruç diyeti, günümüzde if diyeti veya intermittent fasting olarak da bilinmektedir. Aralıklı oruç diyetinin asıl amacı, diğer diyetlerin aksine alınan kalorileri kontrol etmek değil, yiyeceklerin tüketildiği zaman aralığını kontrol etmektir' },
            { id: 3, title: 'Bazal Metabolizma', description: 'Bazal metabolizma, vücudun yalnızca yaşamsal fonksiyonları (vücudu sıcak tutma, nefes alma vb.) idame ettirmek için enerji kullanan metabolik sisteme verilen addır' },
            { id: 4, title: 'Kalori Sayacı', description: ' Yediğiniz yemek için besin bilgilerini bulmakta ve öğün, egzersiz ve kilonuzu kolaylıkla takip etmeniz için gerekli bir uygulamadır.' },
        ],
        categories: [
            // { id: 1, title: 'Kalori Listesi', icon: require('../assets/images/kalorilistesi.png'), items: 'Home' },
            { id: 3, title: 'Öğünler', icon: require('../assets/images/recipes.png'), items: 'RecipesHome' },
            { id: 4, title: 'Aktiviteler', icon: require('../assets/images/activities.png'), items: 'ActivitiesHome' },
            { id: 5, title: 'Testler', icon: require('../assets/images/testler.png'), items: 'CalorieCalculator' },
            { id: 6, title: 'Tarifler', icon: require('../assets/images/foodss.png') },
        ],
        products: [
            { id: 4, title: 'Karpuz', Image: require('../components/database/images/foods/karpuz.jpg'), kalori: '150' },
            { id: 2, title: 'Dondurma', Image: require('../components/database/images/foods/dond.jpg'), kalori: '1333' },
            { id: 3, title: 'Kandil Simidi ', Image: require('../components/database/images/foods/kandil.jpg'), kalori: '150' },
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
                <View style={{ padding: 10 }}>
                    <Text style={style.productItemTitle}>{item.title} </Text>
                    <Text style={style.productItemTitle}>{item.kalori} /kcal</Text>
                </View></TouchableOpacity>
        </View>
    }
    const [imageCount, setImageCount] = useState(0);
    const [WaterCount, setWaterCount] = useState(0);
    const addImage = () => {
        if (imageCount < 15) {
            setImageCount((prevCount) => prevCount + 1);
            setWaterCount((prevCount) => prevCount + 0.2);
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
                    <Text style={style.bannertext}>Zorlanıyorsanız, başarı yaklaşıyor demektir.</Text>
                </View>
                <View style={style.categoryArea}>
                    { /*    <View style={style.categoryAreaTopBar}>
                        <View><Text style={style.categoryone}>Kategoriler</Text></View>
                        <View><Text style={style.categorytwo}>Hepsini gor</Text></View>
    </View>*/}
                    <View style={{ marginTop: 15 }}>
                        <FlatList style={{ paddingHorizontal: 4 }}
                            showsHorizontalScrollIndicator={false}
                            data={categories} horizontal={true} renderItem={this.renderCategoryItem} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('MyCalorieCart')}>
                    <View style={{ borderWidth: 1, borderColor: '#F5B7B1', flex: 1, width: '95%', backgroundColor: '#F5B7B1', margin: 8, padding: 2, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, margin: 4, width: '70%' }}>
                            <Text style={{ marginBottom: 12, fontSize: 18, fontWeight: 'bold', color: '#556b2f' }}> Kalori Günlüğüm</Text>
                            <Text style={{ fontSize: 12, color: '#556b2f' }}> Alınan kalori</Text>
                            <Text style={{ marginLeft: 4, fontSize: 16, fontWeight: 'bold', color: '#556b2f' }}>{totalCalories} / Kcal</Text>
                        </View>
                        <View style={{ width: '40%',  height: '100%',opacity: 0.8, alignItems: 'center', backgroundColor: '#F5B7B1', justifyContent: 'center', }}>
                            <Image
                                style={{
                                    width: 100,
                                    height: '100%',
                                    
                                }}
                                source={require('../utils/Images/foodburn.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ActivitiesHome')}>
                    <View style={{ flex: 1, width: '95%', height: 90, backgroundColor: '#ABEBC6', margin: 8, padding: 2, borderRadius: 12, flexDirection: 'row', borderWidth: 1, borderColor: '#ABEBC6', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, width: '70%', margin: 4 }}>
                            <Text style={{ marginBottom: 12, fontSize: 18, fontWeight: 'bold', color: '#556b2f' }}> Egzersiz</Text>
                            <Text style={{ fontSize: 12, color: '#556b2f' }}> Yakılan kalori</Text>
                            <Text style={{ marginLeft: 4, fontSize: 16, fontWeight: 'bold', color: '#556b2f' }}>{totalActiviteCalories} / Kcal</Text>
                        </View>
                        <View style={{ width: '40%', opacity: 0.8, height: '100%', alignItems: 'center', backgroundColor: '#ABEBC6', justifyContent: 'center', }}>
                      
                            <Image
                                style={{
                                    width: 100,
                                    height: '100%', }}
                                source={require('../utils/Images/activiteburn.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, width: '95%', height: '100%',   backgroundColor: 'rgba(21, 135, 229, 0.3)',  borderWidth: 1, borderColor: '#ffffff', margin: 8, padding: 4, borderRadius: 12, }}>
                    <View style={{ alignItems: 'center', margin: 2 }}>
                        <Text> Su Takipcisi </Text>
                        <Text style={{ fontSize: 16 }}> {WaterCount.toFixed(1)} litre</Text>
                    </View>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                        }}>
                            {Array.from({ length: imageCount }).map((_, index) => (
                                <Image
                                    key={index}
                                    style={{
                                       
                                        width: 50,
                                        height: 50,
                                        marginBottom: 10,
                                        margin: 2,
                                        padding: 8,
                                        resizeMode: 'contain'
                                    }}
                                    source={require('../utils/Images/full.png')} // Resmin yolu buraya eklenmeli
                                />
                            ))}
                            <TouchableOpacity onPress={addImage}>
                                <Image
                                    onPress={addImage}
                                    style={{
                                        
                                        width: 50,
                                        height: 50,
                                        marginBottom: 2,
                                        margin: 4,
                                        resizeMode: 'contain'
                                    }}
                                    source={require('../utils/Images/empty.png')} // Resmin yolu buraya eklenmeli
                                />
                            </TouchableOpacity>
                        </View >
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                    </View>
                </View>
                <View style={style.foodArea}>
                    <View style={style.categoryAreaTopBar}>
                        <Text style={style.categoryone}>Haftanın Favorileri</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{ marginTop: 2 }}>
                            <FlatList style={{ paddingHorizontal: 10, marginBottom: 12, paddingVertical: 12 }}
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
        backgroundColor: "white",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#8923e8",
    },
    bannertext: {
        color: "#8a2be2",
        textAlign: "center",
        fontSize: 12,
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
        margin: 2,
        
    },
    categoryone: {
        alignItems:'center',
        fontSize: 14,
        color: '#556b2f',
        
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
        elevation: 5,
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
        elevation: 5,
        backgroundColor: "#ffffff",
        padding: 8,
       
        margin:2,
        marginBottom:8,
        borderRadius: 4,
        width: 120,
        height: 140,
    },
    productItemIconContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
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
        width: 100,
        height:80,
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
        backgroundColor: '#5DADE2',
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
