import react, { useState } from "react";
import { Text, Image, SafeAreaView } from "react-native";
import { View } from "react-native";
import { Avatar, Title, Subheading, Button, TextInput } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [error, setError] = useState("");
    const navigation = useNavigation();
  



    const signInTest = () => {

 
      setIsLoading(true); // Set loading to true when starting the sign-up process
 signInWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log('User signed in:', user);
    })
    .catch((error) => {
      // Handle sign in errors
      console.log('Sign in error:', error);
    });
};










    return (
      <SafeAreaView style={{ justifyContent: 'center'} }>
       
        <View
          style={{
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
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
        
          <Text style={{ margin: 10, color: "black", fontSize: 22 ,fontFamily:"serif"}}>Giriş Yap</Text>
        </View>
  
        <TextInput label="Email" style={{ margin: 10, backgroundColor: "#ffd65a", opacity: 0.4 }} value={email} onChangeText={(text) => setEmail(text)} />
        <TextInput label="Sifre" style={{ margin: 10, backgroundColor: "#ffd65a", opacity: 0.4 }} value={password} onChangeText={(text) => setPassword(text)} />
        <View style={{  justifyContent: "center", marginTop: 10 }}>
        
            <Button  style={{ margin: 10, backgroundColor: "#ffd65a",borderRadius:0 }}  mode="contained" onPress={() => navigation.navigate("SignUp")} loading={isLoading}>
               Giriş Yap
            </Button>
    
 
 




        </View>
      </SafeAreaView>
    );
  }
