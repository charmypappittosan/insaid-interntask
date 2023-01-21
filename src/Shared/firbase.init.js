import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_api_key,
  authDomain: process.env.REACT_APP_auth_domain,
  projectId: process.env.REACT_APP_project_id,
  storageBucket: process.env.REACT_APP_storage_bucket,
  messagingSenderId: process.env.REACT_APP_messaging_sender_id,
  appId: process.env.REACT_APP_app_id,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
