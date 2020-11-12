import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAng2xD-eIydP7ma6FDjrT9OBXb30bZnWQ',
  authDomain: 'covid-tracker-aed66.firebaseapp.com',
  databaseURL: 'https://covid-tracker-aed66.firebaseio.com',
  projectId: 'covid-tracker-aed66',
  storageBucket: 'covid-tracker-aed66.appspot.com',
  messagingSenderId: '128167410173',
  appId: '1:128167410173:web:c7997a0c81ce0fd9354194',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
