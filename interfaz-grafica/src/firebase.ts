import { firebaseConfig } from "./firebaseConfig";

import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db;
