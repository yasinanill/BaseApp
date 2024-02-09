
import { useNavigation } from "@react-navigation/native";
import react, { useState } from "react";
import { Image, SafeAreaView, Text } from "react-native";
import { View, TouchableOpacity } from "react-native";
import { Avatar, Title, Subheading, Button, TextInput } from "react-native-paper";
import { auth, firestoreDB } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import GoogleSVG from '../../assets/misc/google.svg';
import FacebookSVG from '../../assets/misc/facebook.svg';
import TwitterSVG from '../../assets/misc/twitter.svg';
import { SvgUri } from "react-native-svg";




export default function SignUp() {
  const [displayName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation = useNavigation();



  const signUpTest = async () => {
    setIsLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      const datas = {
        _id: "faagağogjspodjgpsj",
        FullName: 'displayName',
        email: userCredential.user.email,

      };

      const userDocRef = await setDoc(doc(collection(firestoreDB, "users", userCredential.user.uid, "userdata")), datas);
      console.log("User data added for user with ID: ")


      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in automatically after sign up");

      navigation.navigate("YourComponent");
    } catch (error) {
      console.error("Sign up error: ", error);
      // Handle errors appropriately, e.g., display error messages to the user
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!!error && (
        <Subheading
          style={{ color: "red", textAlign: "center", marginBottom: 16 }}
        >
          {error}
        </Subheading>
      )}
      <View
        style={{
          alignItems: "center",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: 250,
        }}
      >
        <View>
          <Image
            style={{
              height: "100%",
              marginBottom: 10,
              margin: 2,
              padding: 8,
              width: 400,
              borderRadius: 10,
              resizeMode: "cover",
            }}
            source={require("../../assets/kn.jpeg")}
          />
        </View>
      </View>

      <View style={{ margin: 10, color: "purple", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
        <Text style={{ margin: 8, color: "black", fontSize: 20 }}>Hoşgeldiniz</Text>
      </View>

      <TextInput label="Email" style={{ margin: 8, backgroundColor: "#f0f0f0", borderWidth:1 , borderColor:'#ffd65a',  }} value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput label="Sifre"style={{ margin: 8, backgroundColor: "#f0f0f0", borderWidth:1 , borderColor:'#ffd65a'  }} value={password} onChangeText={(text) => setPassword(text)} />
      <TextInput label="Kullanıcı Adı"style={{ margin: 8, backgroundColor: "#f0f0f0", borderWidth:1 , borderColor:'#ffd65a'  }} value={displayName} onChangeText={(text) => setName(text)} />


      <View style={{ margin: 5 }}>

        <Button style={{ margin: 2, backgroundColor: "#ffd65a",borderRadius:0 }} mode="contained" onPress={signUpTest} loading={isLoading}>
          Kaydol
        </Button></View>
      <View>
        <Text style={{margin: 5,  textAlign: 'center', color: '#666', marginBottom: 30 }}>
         Yada , ile giriş yap
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 30,
       

          }}>
          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
<SvgUri
    width={40}
    height={40}
    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/facebook.svg"
  />

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => { }}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>


<SvgUri
    width={40}
    height={40}
    uri="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/google.svg"
  />

          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Zaten Hesabın var mı ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{ color: '#ffd65a', fontWeight: '700' }}> Giriş Yap </Text>
          </TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>

  );
};


