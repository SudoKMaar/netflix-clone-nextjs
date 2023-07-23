// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAaA8grxg2mGlgsZyE26Q0XhHmdos7nOUA',
  authDomain: 'netflix-clone-v2-55b33.firebaseapp.com',
  projectId: 'netflix-clone-v2-55b33',
  storageBucket: 'netflix-clone-v2-55b33.appspot.com',
  messagingSenderId: '635770941028',
  appId: '1:635770941028:web:2c8c63862ccad7ed2af971',
  measurementId: 'G-ZYN0LJ1WWL',
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
