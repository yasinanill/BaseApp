import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC2ryRWkrHtwQ3U8qmfs3U9jIt3OAfQ3B8",
    authDomain: "kalori-net.firebaseapp.com",
    projectId: "kalori-net",
    storageBucket: "kalori-net.appspot.com",
    messagingSenderId: "1001537274219",
    appId: "1:1001537274219:web:287f95f7477a71fa664c2e",
    measurementId: "G-FFXD9D1PW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestoreDB = getFirestore(app);

const signOutUser = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      // Oturumu kapattıktan sonra kullanıcıyı isteğe bağlı olarak başka bir sayfaya yönlendirebilirsiniz
    } catch (error) {
      console.error("Sign out error: ", error);
      // Hataları uygun şekilde işleyin, örneğin, kullanıcıya hata mesajlarını gösterin
    }
  };
  const watchAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Kullanıcı oturum açık
        console.log("Kullanıcı oturum açık");
        // Kullanıcı oturum bilgilerini kontrol etme veya diğer işlemleri burada yapabilirsiniz
      } else {
        // Kullanıcı oturum kapalı
        console.log("Kullanıcı oturum kapalı");
        // Kullanıcı oturum bilgilerini kontrol etme veya diğer işlemleri burada yapabilirsiniz
      }
    });
  };
export { auth, firestoreDB, signOutUser };

