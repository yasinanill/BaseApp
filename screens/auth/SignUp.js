
import { useNavigation } from "@react-navigation/native";
import react, { useState } from "react";
import { Image, SafeAreaView, Text } from "react-native";
import { View ,TouchableOpacity} from "react-native";
import { Avatar, Title, Subheading, Button, TextInput } from "react-native-paper";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";





export default function SignUp ()  {
        const [displayName, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState("");
      
        const navigation = useNavigation();


      
        const signUpTest = () => {
          setIsLoading(true); // Set loading to true when starting the sign-up process
      
          
            createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
              // User signed up successfully
              const user = userCredential.user;
      
              // Update display name (if provided)
              if (displayName) {
                user.updateProfile({
                  displayName: displayName,
                }).then(() => {
                  // Profile updated successfully
                  console.log('User signed up:', user);
                  setIsLoading(false); // Set loading to false after successful sign-up
                  navigation.navigate('SignIn');
                }).catch((profileUpdateError) => {
                  console.log('Profile update error:', profileUpdateError);
                  setIsLoading(false);
                  setError("Error updating profile");
                });

              } else {
                console.log('User signed up:', user);
                setIsLoading(false); // Set loading to false after successful sign-up
              }
            })
            .catch((signUpError) => {
              // Handle sign-up errors
              console.log('Sign up error:', signUpError);
              setIsLoading(false); // Set loading to false on error
              setError(signUpError.message); // Set the error message for display
            });
            navigation.navigate('SignIn');
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
                        resizeMode: "",
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
            

