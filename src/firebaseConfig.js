// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAhBOFraE8ER22zRvhbS9uRWO1T6SDL1CU",
	authDomain: "esceniarte.firebaseapp.com",
	projectId: "esceniarte",
	storageBucket: "esceniarte.appspot.com",
	messagingSenderId: "354830048114",
	appId: "1:354830048114:web:c20fb4929c2b3ac945dbeb"
};

const app = initializeApp(firebaseConfig);

export default app;
