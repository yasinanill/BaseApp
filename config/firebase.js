import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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


export const auth = getAuth(app);

