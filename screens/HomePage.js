import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, TextInput } from 'react-native-paper'
import { COLOURS } from '../components/database/Database';
import { useNavigation } from '@react-navigation/native';
import CircularProgressBar from '../utils/CircularProgressBar';
import { useSelector } from 'react-redux';
import { LinearGradient } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { firestoreDB } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useCartActions } from '../utils/CartUtils';


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
            { id: 6, title: 'Tarifler', icon: require('../assets/images/foodss.png'), items: 'MyCalorieCart' },
        ],
        products: [
            { id: 4, title:'Peynirli Karnabahar', Image: require('../components/database/images/foods/h.png'), calorie: '522 kcal' , Amount:'1 Porsiyon (255 gr)' ,description:'Evinizde kolayca bulabileceğiniz malzemelerle hazırlanan graten, özellikle yoğun günlerde hızlı bir alternatif sunacak. Haşlanmış karnabaharları nefis bir sos ve peynirle buluşturarak, fırında muhteşem bir lezzet elde ediyoruz!' },
            { id: 5, title: 'Kuskuslu  Çorba', Image: require('../components/database/images/foods/e.jpg'), calorie: '333 kcal' , Amount:'1 Porsiyon (624 gr)' ,description:'Kilo almak isteyenler buraya! İçerisinde sağlıklı pek çok yağ ve protein kaynağının bulunduğu nefis salatanın tarifini sizinle paylaşıyoruz!' },
            { id: 6, title: 'Pane Tavuklu Salata', Image: require('../components/database/images/foods/d.png'), calorie: '1005 kcal' , Amount:'1 Porsiyon (519 gr)' ,description:'Kilo almak isteyenler buraya! İçerisinde sağlıklı pek çok yağ ve protein kaynağının bulunduğu nefis salatanın tarifini sizinle paylaşıyoruz!' },
       
        ],
    };


    const today = new Date();
    const formattedDate = today.toLocaleString('default', { day: 'numeric', month: 'long' });
    const { handleClearCartData } = useCartActions();

    const handleCalendarPress = () => {
        navigation.navigate('YourComponent');
    };




    const fetchUserData = async (userId) => {
    
    
    
    

    
    
    
    
    
    

          
    
    
        try {
            const userDocRef = doc(firestoreDB, "users", userId);
            const userDoc = await getDoc(userDocRef);
            console.log("User data:", userDoc.data());
         
            const userdata = userDoc.data();
            const userdatass = userdata.weight;
            userdatass.push(200);
            const newWeightData = 150;

            if (userDoc.exists()) {
                
               
                console.log("User data:",userdatass);
                

                // Kullanıcı verilerini kullanmak için burada işlemleri gerçekleştirin

               
                await updateDoc(userDocRef, {
                    weight: userdatass // Yeni kilo verisi doğrudan güncellenir
                  });



                  console.log("User data:",userdata.weight);





            } else {
                console.log("No such user document!");
                // Kullanıcı verisi bulunamazsa uygun şekilde işlem yapın
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            // Hataları uygun şekilde işleyin, örneğin, kullanıcıya hata mesajlarını gösterin
        }
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




    const goToDetails = (item) => {
        navigation.navigate('FoodDetails', { item}); // Detaylar sayfasına yönlendirirken veriyi taşıyoruz
      };

    renderProductItem = ({ item }) => {
        return <View style={style.productItem}>
            <TouchableOpacity onPress={() => goToDetails(item)}>
                <View style={style.productItemIconContainer}>
                    <Image source={item.Image} style={style.ProductItemimage} />
                </View>
                <View style={{ padding: 4 , alignItems: 'center' }}>
                    <Text style={style.productItemTitle}>{item.title} </Text>
                    <Text style={style.productItemTitle}>{item.calorie}</Text>
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
        <SafeAreaView style={{ flex: 1,  justifyContent: 'center' 	}}>
            <View style={style.header}>
                <View>
                    <Text style={style.AppName}> KaloriNet</Text>
                </View>
                <View>
                    <TouchableOpacity style={style.calendar} onPress={handleCalendarPress}>

                        <Text style={{ padding: 10, color: '#2f4f4f' }}>{formattedDate}</Text>
                        <Icon name="calendar" color="#2f4f4f" size={32} />

                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ }}>
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
                    <View style={{ borderWidth: 1, borderColor: '#F5B7B1', flex: 1, width: '95%', backgroundColor: '#ffffff', margin: 8, padding: 2, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, margin: 4, width: '70%' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#556b2f' ,marginBottom:12}}> Kalori Günlüğüm</Text>
                          
                            <Text style={{ fontSize: 12, color: '#556b2f' }}> Alınan kalori</Text>
                            <Text style={{ marginLeft: 4, fontSize: 16, fontWeight: 'bold', color: '#556b2f' }}>{totalCalories} / Kcal</Text>
                        </View>
                        <View style={{ width: '40%', height: '100%', opacity: 0.8, alignItems: 'center', backgroundColor: '#ffffff', justifyContent: 'center', }}>
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
                    <View style={{ flex: 1, width: '95%', height: 90, backgroundColor: '#ffffff', margin: 8, padding: 2, borderRadius: 12, flexDirection: 'row', borderWidth: 1, borderColor: '#ABEBC6', justifyContent: 'space-between' }}>
                  
                        <View style={{ flex: 1, width: '70%', margin: 4 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#556b2f' ,marginBottom:12 }}> Egzersiz</Text>
                            { /*      <View style={style.line} />*/}
                            <Text style={{ fontSize: 12, color: '#556b2f' }}> Yakılan kalori</Text>
                            <Text style={{ marginLeft: 4, fontSize: 16, fontWeight: 'bold', color: '#556b2f' }}>{totalActiviteCalories} / Kcal</Text>
                        </View>
                        <View style={{ width: '40%', opacity: 0.8, height: '100%', alignItems: 'center', justifyContent: 'center', }}>

                            <Image
                                style={{
                                    width: 100,
                                    height: '100%',
                                }}
                                source={require('../utils/Images/activiteburn.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, width: '95%', height: '100%', backgroundColor: '#ffffff', borderColor: '#ffffff', margin:8, borderRadius: 12, }}>
                    <Image
                        source={require('../assets/blue.jpg')} // veya başka bir kaynak
                        style={{
                            resizeMode: 'cover', // Resmi kaplaması için
                            position: 'absolute',
                          
                            opacity: 0.5,
                            width: '100%',
                            height: '100%', borderRadius: 12,
                        }}
                    />



                    <View style={{ alignItems: 'center', margin: 2, paddingRight: 18, flexDirection: 'row', justifyContent: 'space-between',marginHorizontal:8 }}>
                        <Text style={{ fontSize: 16, fontWeight:800,color:'#556b2f' }}> Su Takipcisi </Text>
                        <Text style={{ fontSize: 16,fontWeight:800,color:'#556b2f'  }}> {WaterCount.toFixed(1)} L</Text>
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
                
                        <View style={{ marginTop: 2 }}>
                            <FlatList style={{ paddingHorizontal: 10, marginBottom: 12, paddingVertical: 12 }}
                                showsHorizontalScrollIndicator={false}
                                data={products} horizontal={true} renderItem={this.renderProductItem} />
                        </View>
                   
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingTop: 4,
        paddingBottom: 2,
    },
    Avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    AppName: {
        padding: 2,
        fontSize: 24,
        color: "#2f4f4f",
        fontWeight: '700',
    },
    banner: {
        backgroundColor: "white",
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#2f4f4f",
    },
    bannertext: {
        color: "#2f4f4f",
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
        borderColor: "#2f4f4f",
        borderRadius: 8,
    },
    SearchButtoncontainer: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#2f4f4f",
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
        alignItems: 'center',
        fontSize: 14,
        color: '#556b2f',

    },
    categorytwo: {

        color: "#2f4f4f",
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
        shadowColor: "#2f4f4f",
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
        padding: 4,

        margin: 2,
        marginBottom: 8,
        borderRadius: 4,
        width: 140,
        height: 140,
    },
    productItemIconContainer: {
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
    },
    productItemTitle: {
       padding:2,
        fontSize: 12,
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


    line: {
        width: '100%', // Çizgi uzunluğu
        height: 1,
        backgroundColor: '#131313',
        marginVertical: 2,
        marginHorizontal: 1,
        marginBottom: 12,
        opacity: 0.2
    },
    calendar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


    },
}
);
