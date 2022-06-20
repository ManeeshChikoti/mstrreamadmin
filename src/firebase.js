
 import { initializeApp } from "firebase/app";
 import { getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAXeATLVoyJT1usL5na5AkOaHmG_Tc4t4I",
    authDomain: "capstone-3c343.firebaseapp.com",
    projectId: "capstone-3c343",
    storageBucket: "capstone-3c343.appspot.com",
    messagingSenderId: "665737611598",
    appId: "1:665737611598:web:e5db819c04bf3a0271761f",
    measurementId: "G-YGWEFFN8SY"
  };
  const app = initializeApp(firebaseConfig);
  const storage = getStorage();
  export default storage;