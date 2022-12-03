// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGD85bJL36_-lzB-STgW6WIwhGbHd4XGg",
  authDomain: "projeto-final-ciclo6.firebaseapp.com",
  projectId: "projeto-final-ciclo6",
  storageBucket: "projeto-final-ciclo6.appspot.com",
  messagingSenderId: "205825108971",
  appId: "1:205825108971:web:0e61419b5a92f9799187ae",
  databaseURL: "https://projeto-final-ciclo6-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
initializeApp(firebaseConfig)
const database = getDatabase()

export { database }