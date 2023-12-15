import { StyleSheet, Text, TouchableOpacity, View ,Image, FlatList, ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native-paper'
import { COLOURS } from '../components/database/Database';

export default function HomePage() {

  const data = {
    promations :[
    { id: 1, title: 'Aralıklı Oruç (If Diyeti) ', description: 'Aralıklı oruç diyeti, günümüzde if diyeti veya intermittent fasting olarak da bilinmektedir. Aralıklı oruç diyetinin asıl amacı, diğer diyetlerin aksine alınan kalorileri kontrol etmek değil, yiyeceklerin tüketildiği zaman aralığını kontrol etmektir' },
    { id: 3, title: 'Bazal Metabolizma', description: 'Bazal metabolizma, vücudun yalnızca yaşamsal fonksiyonları (vücudu sıcak tutma, nefes alma vb.) idame ettirmek için enerji kullanan metabolik sisteme verilen addır' },
    { id: 4, title: 'Kalori Sayacı', description: ' Yediğiniz yemek için besin bilgilerini bulmakta ve öğün, egzersiz ve kilonuzu kolaylıkla takip etmeniz için gerekli bir uygulamadır.' },
 
],
categories: [
    { id: 1, title: 'Kalori Listesi',  items :'Activite'},
    { id: 1, title: 'Kalori Listesi',  items :'Activite'},
    { id: 1, title: 'Kalori Listesi',  items :'Activite'},
    { id: 1, title: 'Kalori Listesi',  items :'Activite'},
    { id: 1, title: 'Kalori Listesi',  items :'Activite'},

],
  products:[ 
    { id: 4, title: 'Karpuz', kalori:'150' },
    { id: 4, title: 'Karpuz', kalori:'150' },
    { id: 4, title: 'Karpuz', kalori:'150' },
    { id: 4, title: 'Karpuz', kalori:'150' },
    { id: 4, title: 'Karpuz', kalori:'150' },
    { id: 4, title: 'Karpuz', kalori:'150' },
  
   
   

],
  };
  
const promations = data.promations;

const categories = data.categories;

const products = data.products;

renderCategoryItem = ({ item }) => {
  return <View style={style.categoryItem}>


      <View style={style.categoryItemIconContainer}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate(item.items)} >
          <Image  style={style.categoryItemIcon} /></TouchableOpacity>
      </View>
      <Text style={style.categoryItemTitle}>{item.title}</Text>

  </View>
}
renderProductItem = ({ item }) => {
  return <View style={style.productItem}>
<TouchableOpacity >
 
      <View style={style.productItemIconContainer}>

          <Image  style={style.ProductItemimage} />
      </View>
      <View style={{padding:10}}>
      <Text style={style.productItemTitle}>{item.title}</Text>
 
      </View></TouchableOpacity>
  </View>
}






  return (
    <SafeAreaView style={{flex:1}}>

<View style={style.header}>
        
        <View>
            <Text style={style.AppName}> KaloriNet</Text>
        </View>
      <TouchableOpacity >
        <View>
            <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d"  }} style={style.Avatar} />
        </View></TouchableOpacity>
    </View>
    <ScrollView style={{flex:1}}>
                    <View style={style.banner}>
                        <Text style={style.bannertext}>Kalori takip uygulamasi</Text>

                    </View>

                    <View style={style.content} >

                        <View style={style.Searcharea}>

                            <View style={style.SearchInput}><TextInput placeholder="Arama" style={style.Searchbar} /></View>
                            <View style={style.SearchButtoncontainer}>
                                <TouchableOpacity style={style.Searchbutton}><Text>ara</Text></TouchableOpacity>

                            </View>

                        </View>

                        <View style={style.promation}>
                            <FlatList style={{ paddingHorizontal: 10 }}
                                showsHorizontalScrollIndicator={false}
                                data={promations} horizontal={true} renderItem={this.renderItem} />

                        </View>


                    </View>
                    <View style={style.categoryArea}>

                        <View style={style.categoryAreaTopBar}>
                            <View><Text style={style.categoryone}>Kategoriler</Text></View>
                            <View><Text style={style.categorytwo}>Hepsini gor</Text></View>


                        </View>
                        <View style={{ marginTop: 15 }}>
                            <FlatList style={{ paddingHorizontal: 10 }}
                                showsHorizontalScrollIndicator={false}
                                data={categories} horizontal={true} renderItem={this.renderCategoryItem} />


                        </View>
                    </View>


                    <View style={style.foodArea}>
                        <View style={style.categoryAreaTopBar}>
                            <View><Text style={style.categoryone}>Öne Çıkanlar</Text></View>
                          


                        </View>
                        <TouchableOpacity>
                        <View style={{ marginTop: 5 }}>
                            <FlatList style={{ paddingHorizontal: 10,paddingVertical: 20  }}
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
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 5,

    },
    Avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,


    },
    AppName: {
        padding: 8,
        fontSize: 24,
        color: "#8a2be2",
        fontWeight:'700',
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
        paddingHorizontal: 20,
        paddingVertical: 10,

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
        padding: 10,

        borderWidth: 1,
        borderColor: "#8a2be2",
        borderRadius: 8,


    },
    SearchButtoncontainer: {
        padding: 14,

        borderWidth: 1,
        borderColor: "#8a2be2",
        borderRadius: 5,
        marginLeft: 15,
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
        marginTop: 10,
    },

    categoryAreaTopBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },

    categoryArea: {
        marginTop: 20,

    },
    categoryone: {
        fontSize: 18,
        color:COLOURS.Purple

    },

    categorytwo: {
        color: "#8a2be2",
        fontWeight: '400',

    },

    categoryItem: {

        padding: 10,
        marginRight: 5,
        borderRadius: 15,
        alignItems: 'center',

    },

    categoryItemIcon: {
        width: 50,
        height: 50,
        borderRadius: 10,

    },
    categoryItemIconContainer: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 20,
        backgroundColor: "white",
        borderRadius: 10,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: "center",
    },

    categoryItemTitle: {

        textAlign: 'center',
        marginTop: 5,

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
        borderRadius:10,
        width:140,
        height:130,

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
    foodArea:{
        marginTop:10,

    },

    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,},







}
);





