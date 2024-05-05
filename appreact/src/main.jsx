import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const firebaseConfig = {
  apiKey: "AIzaSyA6blSMIIC7_7_ZZlvmQiRLOHp68GfLSLk",
  authDomain: "timelapse-25183.firebaseapp.com",
  projectId: "timelapse-25183",
  storageBucket: "timelapse-25183.appspot.com",
  messagingSenderId: "1099409288460",
  appId: "1:1099409288460:web:c678c1bcf84df2c6e3ad29"
};

const app = initializeApp(firebaseConfig);