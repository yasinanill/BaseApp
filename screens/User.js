
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Picker, Image, Button, FlatList, Modal, Pressable } from "react-native";
import { useSelector } from 'react-redux';
import ProgressBar from '../utils/ProgressBar';
import WeightLossTracker from '../utils/ProgressBar';
import WeightLossProgressBar from '../utils/ProgressBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Fontisto';

const UserProfile = () => {

  const navigation = useNavigation();
  const user = useSelector((state) => state.user);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(user)






  const data = [
    {
      kilo: 70, isim: 'Vücut Kitle Endeksin (BMI)',
      infotitle: 'Bazal Metabolizma Hızı (BMH) Nedir?',
      info: 'Vücut kitle indeksi, boy kilo endeksi olarak da bilinen, kişinin ağırlık ve boy değerleri kullanılarak hesaplanan bir sayıdır. Formülde kullanılan vücut ağırlığı, kilogram, boy ise metre cinsinden alınarak hesaplama yapılır. Vücut kitle endeksi hesaplama sonucunda çıkan değer ile kişinin zayıf, normal ağırlıkta, hafif şişman ya da obez olması gibi bir sınıflama yapılır. Fakat bu değer ile vücut yağ oranı ölçülmez. Yağ, kas, su gibi değerlerin miktarları belirlemede sadece genel bir tablo çizilmiş olur. Ana kullanım amacı kişinin boyuna göre sağlıklı vücut ağırlığında olup olmadığını belirlemektir. Kısaca vücut kitle indeksi, kişinin fazla kilolu ya da zayıf olduğunu gösteren bir ölçüttür; fakat vücut içerisindeki yağ, kas gibi değerleri bize vermez.'
    },
    {
      kilo: 65, isim: 'İdeal  Kilon',
      infotitle: 'Bazal Metabolizma Hızı (BMH) Nedir?',

      info: 'Bazal metabolizma hızı, kişinin vücudunun temel yaşamsal fonksiyonları yerine getirmek için ihtiyaç duyduğu minimum kalori miktarına karşılık gelir ve kişiden kişiye farklılık gösterir. Bazal metabolizma ve dinlenme metabolizması sıklıkla karıştırılmaktadır. Dinlenme metabolizma hızı hesaplanırken vücudun yaşamsal fonksiyonlar dışında dinlenme halindeyken harcadığı kalorilerin de hesaba katılması gerekmektedir. Ancak her iki durumda da vücudun başka herhangi bir aktivite yapmıyor iken harcadığı enerji/kalori miktarı söz konusudur.Bazal metabolizma hızı genellikle yaşla birlikte vücuttaki yağsız vücut kütlesinin azalması sebebiyle düşer. Ortalama olarak kişilerin günlük kalori ihtiyacının %60-75’ini bazal metabolizma oluşturur. 20’li yaşlardan itibaren bazal metabolizma hızı her on yılda bir %1-2 oranında azalır. Ancak kişilerin genetik yapısı, aktivite miktarı ve beslenme biçimlerine göre bazal metabolizma hızında farklılıklar görülebilir.'
    },
    {
      kilo: 80, isim: 'Ayşe', infotitle: 'Bazal Metabolizma Hızı (BMH) Nedir?',

      info: 'Bazal metabolizma hızı, kişinin vücudunun temel yaşamsal fonksiyonları yerine getirmek için ihtiyaç duyduğu minimum kalori miktarına karşılık gelir ve kişiden kişiye farklılık gösterir. Bazal metabolizma ve dinlenme metabolizması sıklıkla karıştırılmaktadır. Dinlenme metabolizma hızı hesaplanırken vücudun yaşamsal fonksiyonlar dışında dinlenme halindeyken harcadığı kalorilerin de hesaba katılması gerekmektedir. Ancak her iki durumda da vücudun başka herhangi bir aktivite yapmıyor iken harcadığı enerji/kalori miktarı söz konusudur.Bazal metabolizma hızı genellikle yaşla birlikte vücuttaki yağsız vücut kütlesinin azalması sebebiyle düşer. Ortalama olarak kişilerin günlük kalori ihtiyacının %60-75’ini bazal metabolizma oluşturur. 20’li yaşlardan itibaren bazal metabolizma hızı her on yılda bir %1-2 oranında azalır. Ancak kişilerin genetik yapısı, aktivite miktarı ve beslenme biçimlerine göre bazal metabolizma hızında farklılıklar görülebilir.'
    },
    {
      kilo: 60, isim: 'Fatma', infotitle: 'Bazal Metabolizma Hızı (BMH) Nedir?',

      info: 'Bazal metabolizma hızı, kişinin vücudunun temel yaşamsal fonksiyonları yerine getirmek için ihtiyaç duyduğu minimum kalori miktarına karşılık gelir ve kişiden kişiye farklılık gösterir. Bazal metabolizma ve dinlenme metabolizması sıklıkla karıştırılmaktadır. Dinlenme metabolizma hızı hesaplanırken vücudun yaşamsal fonksiyonlar dışında dinlenme halindeyken harcadığı kalorilerin de hesaba katılması gerekmektedir. Ancak her iki durumda da vücudun başka herhangi bir aktivite yapmıyor iken harcadığı enerji/kalori miktarı söz konusudur.Bazal metabolizma hızı genellikle yaşla birlikte vücuttaki yağsız vücut kütlesinin azalması sebebiyle düşer. Ortalama olarak kişilerin günlük kalori ihtiyacının %60-75’ini bazal metabolizma oluşturur. 20’li yaşlardan itibaren bazal metabolizma hızı her on yılda bir %1-2 oranında azalır. Ancak kişilerin genetik yapısı, aktivite miktarı ve beslenme biçimlerine göre bazal metabolizma hızında farklılıklar görülebilir.'
    },
  ];






  return (

    <View style={{ alignItems: 'center' ,flex:1}}>

      <View style={style.header}>


        <View style={{flex:1,  justifyContent:'center', alignItems:'center' ,flexDirection:'column' , marginTop: 20,}}>
          <Image source={{ uri: "https://images.unsplash.com/photo-1633037404710-c88b4abcb71d" }} style={style.Avatar} />
          <Text style={{ fontSize: 16, fontWeight: '400',color:'white',marginTop:2 }}> Yasin Kaya</Text>
        </View>
        <View style={{flex:2,flexDirection:'row', justifyContent:'center', marginLeft:4,marginBottom:12}}>
          <View style={{ justifyContent:'center', marginBottom:12}}>
        
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'white', }}><Icon name="bars" color="#FFFFFF" size={20} />   Kilo : {user.weight}</Text>
          <Text style={{ fontSize: 12,marginTop:12, fontWeight: 'bold', color: 'white' }}><Icon name="bars" color="#FFFFFF" size={20} />   Boy :  {user.height}</Text>
          </View>
           <View style={{ justifyContent:'center',marginHorizontal:8,marginBottom:12}}> 
          <Text style={{ fontSize: 12, fontWeight: 'bold', color:'white' }}><Icon name="child" color="#FFFFFF" size={20} />    Yaş:  {user.age}</Text>
          <Text style={{ fontSize: 12,marginTop:12, fontWeight: 'bold', color:'white' }}><Icon name="line-chart" color="#FFFFFF" size={20} />   Hedef:  Kilo Vermek</Text>
          </View>

        </View>
      </View>

      <View style={{top:-40, width: '100%', backgroundColor: '#f0f0f0',borderTopLeftRadius: 50,
    borderTopRightRadius:50, height:25 }}></View>


      <View style={{top:-12, width: '85%', height: 100, backgroundColor: '#ffffff', margin: 2, padding: 2, elevation: 5, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between',borderWidth:1, borderColor: '#89168D' }}>



        <View style={{ flex: 1, margin: 2, justifyContent: 'center', width: '30%', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#444241' }}>Hedef Kilo</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#444241' }}>{user.weight - 10}</Text>


        </View>
        <View style={{ flex: 1, margin: 1, justifyContent: 'center', width: '20%', alignItems: 'center' }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#444241' }}>İdeal Kilo</Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#444241' }}>{user.idealWeights}</Text>


        </View>
      </View>



      <View style={style.squareContainer}>



        <View  style={[style.square,]}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={style.infoIcon}>
            <Icon name="info-circle" size={20}  />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <Text style={style.modalText}> ffffffffffff</Text>
                <Text style={style.modalText}></Text>

                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                  <Icons name="like" size={40} color="#778899" />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={style.UserInfoText} ></View>
          <Text style={style.UserInfoText}>{user.bmiResults}</Text>

          <Text style={style.infoText}>Vucuk Kitle Endeksin</Text>
        </View>


        <View  style={[style.square,]}>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={style.infoIcon}>
            <Icon name="info-circle" size={20}  />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <Text style={style.modalText}></Text>
                <Text style={style.modalText}></Text>

                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} >
                  <Icons name="like" size={40} color="#778899" />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

          <View style={style.UserInfoText} ></View>
          <Text style={style.UserInfoText}>{user.calorieResults}</Text>

          <Text style={style.infoText}>Günlük Kalori İhtiyacın</Text>
        </View>


      </View>

  

      <View style={{ width: '85%', height: 120,borderWidth:1, borderColor: '#89168D' , backgroundColor: '#ffffff', margin: 8, padding: 2, elevation: 5, borderRadius: 12, flexDirection: 'column', }}>

        <View style={{ margin: 4, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#444241' }}>Gelişimin</Text>

          <WeightLossProgressBar initialWeight={100} currentWeight={90} targetWeight={85} />

        </View>

        <View style={{ justifyContent: 'space-between', padding: 10, flexDirection: 'row' }}>
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


   flexDirection:'row',
    backgroundColor: "#89168D",
    width: '100%',
    height: 190,
    marginBottom: 20,

    position: 'relative',
  
  },
  Avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
 
   
    justifyContent: "center",
    alignItems: "flex-start",
   

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
    height: 90,
    backgroundColor: '#ffffff',
    margin: 8,
    padding: 4,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    position: 'relative',
    borderColor: '#89168D'
  },
  UserInfoText: {
    fontSize: 16,

    fontWeight: '700',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 12,
    marginBottom: 4,
  },

  infoIcon: {
    position: 'absolute',
    top: 4,
    right: 4,

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },



});