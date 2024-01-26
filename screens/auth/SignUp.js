
import { useNavigation } from "@react-navigation/native";
import react, { useState } from "react";
import { Image, SafeAreaView, Text } from "react-native";
import { View ,TouchableOpacity} from "react-native";
import { Avatar, Title, Subheading, Button, TextInput } from "react-native-paper";
import { auth, firestoreDB } from "../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";





export default function SignUp ()  {
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
              FullName:'displayName',
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
                  <Text style={{ margin: 10, color: "purple", fontSize: 32 }}>KaloriNet</Text>
                  <Text style={{ margin: 10, color: "black", fontSize: 16 }}>Hoşgeldiniz</Text>
                </View>
          
                <TextInput label="Email" style={{ margin: 10, backgroundColor: "#ffd65a", opacity: 0.5 }} value={email} onChangeText={(text) => setEmail(text)} />
                <TextInput label="Sifre" style={{ margin: 10, backgroundColor: "#ffd65a", opacity: 0.5 }} value={password} onChangeText={(text) => setPassword(text)} />
                <TextInput label="Kullanıcı Adı" style={{ margin: 10, backgroundColor: "#ffd65a", opacity: 0.5 }} value={displayName} onChangeText={(text) => setName(text)} />
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
           
                <Button style={{ margin: 10, backgroundColor: "#ffd65a" }} mode="contained" onPress={signUpTest} loading={isLoading}>
              Kaydol
            </Button>
                </View>
              </SafeAreaView>
 
              );
            };
            

