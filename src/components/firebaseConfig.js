import { initializeApp } from "firebase/app";
//Rest all is copied , import getStorage :
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCobShP0bFnYr-XIa15m-CDmqln69YPW3w",
  authDomain: "storage-image-upload-e31bb.firebaseapp.com",
  projectId: "storage-image-upload-e31bb",
  storageBucket: "storage-image-upload-e31bb.appspot.com",
  messagingSenderId: "227350779442",
  appId: "1:227350779442:web:3f08464b32e6fd0ef8ce2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);