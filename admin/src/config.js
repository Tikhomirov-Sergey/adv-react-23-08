import firebase from 'firebase/app'
import 'firebase/auth'

export const appName = 'tikhomirov-js-app'

const fbConfig = {
  apiKey: 'AIzaSyC6iCLuLzQitoRwXT4LMMRbQ3x3Y21AVd4',
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: '396277118785'
}

firebase.initializeApp(fbConfig)
