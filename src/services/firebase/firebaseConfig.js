import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCuCKRAJicF0n-Bpa3Abd9jSdngmHpxkV4",
  authDomain: "castor-pignataro.firebaseapp.com",
  projectId: "castor-pignataro",
  storageBucket: "castor-pignataro.appspot.com",
  messagingSenderId: "1042761467512",
  appId: "1:1042761467512:web:7de97aebd0c5b1e4420f8d",
  measurementId: "G-50X7JRD44M"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
