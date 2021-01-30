import firebase from 'firebase/app';
import 'firebase/firestore';

import { config } from '../fs.config';

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId
};

firebase.initializeApp(firebaseConfig);

export const fs = firebase.firestore();
