import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyCa4EjHkFm0BUzBxaVLyElcC-YbZiuxCQY",
    authDomain: "m-city-da958.firebaseapp.com",
    databaseURL: "https://m-city-da958.firebaseio.com",
    projectId: "m-city-da958",
    storageBucket: "m-city-da958.appspot.com",
    messagingSenderId: "104528216188"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebasePlayers = firebaseDB.ref('players');


  export {
      firebase,
      firebaseMatches,
      firebasePromotions,
      firebaseTeams,
      firebasePlayers,
      firebaseDB
  }
