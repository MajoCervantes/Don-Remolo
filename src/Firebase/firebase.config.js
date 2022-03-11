import firebase from 'firebase-compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyClZZZky37MEF52GyQqBXwQA3AGB1-RVGw',
  authDomain: 'pizzeria-don-remolo-99307.firebaseapp.com',
  projectId: 'pizzeria-don-remolo-99307',
  storageBucket: 'pizzeria-don-remolo-99307.appspot.com',
  messagingSenderId: '40890066729',
  appId: '1:40890066729:web:c8759e6a731ea3de977938',
}

firebase.initializaApp(firebaseConfig)
const db = firebase.firestore()

export { db, firebase }
