import {initializeApp} from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyAzBdYHPEnw7PmqpPSclxxhe9wTU_gDS3Y",
    authDomain: "israguru-masa2023.firebaseapp.com",
    projectId: "israguru-masa2023",
    storageBucket: "israguru-masa2023.appspot.com",
    messagingSenderId: "818980000270",
    appId: "1:818980000270:web:f36cb59ee396d5eac5625f",
    measurementId: "G-CS0G9335VN",
    databaseURL: "https://israguru-masa2023-default-rtdb.asia-southeast1.firebasedatabase.app/"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app);


export const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

export const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}