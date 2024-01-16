// api/route.ts
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Inisialisasi Firebase Admin SDK
const serviceAccount = require("../../../../lib/service.json"); // Path ke file serviceAccountKey.json dari Firebase Console

// Check if Firebase app is already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

async function getUsersData() {
  try {
    // Mengambil referensi koleksi 'users' dari Firestore
    const usersCollection = admin.firestore().collection('users');

    // Mengambil data dari koleksi 'users'
    const usersSnapshot = await usersCollection.get();

    // Mengubah data snapshot 'users' menjadi array dengan properti yang spesifik
    const users = usersSnapshot.docs.map((userDoc) => {
      const userData = userDoc.data();
      return {
        username: userData.username,
        role: userData.role,
      };
    });

    return users;
  } catch (error) {
    throw error;
  }
}

export async function GET() {
  try {
    // Mengambil data pengguna dari fungsi getUsersData
    const users = await getUsersData();

    // Menyiapkan respons dengan data pengguna dari Firestore
    const response = {
      message: "Data pengguna dari Firestore",
      users: users,
      status: "success",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data", status: "error", error: error.message });
  }
}
