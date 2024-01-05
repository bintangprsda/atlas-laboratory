// api/route.ts
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Inisialisasi Firebase Admin SDK
const serviceAccount = require("../../lib/config.json"); // Path ke file serviceAccountKey.json dari Firebase Console

// Check if Firebase app is already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export async function GET() {
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
        completedName: userData.completedName,
        hospital: userData.hospital,
        group: userData.group,
        profilPictureURL: userData.profilPictureURL // Menambahkan profilPictureURL
      };
    });

    // Mengambil referensi koleksi 'selectedTest' dari Firestore
    const selectedTestCollection = admin.firestore().collection('selectedTests');

    // Mengambil data dari koleksi 'selectedTest'
    const selectedTestSnapshot = await selectedTestCollection.get();

    // Mengubah data snapshot 'selectedTest' menjadi array dengan properti 'testName' dan 'price'
    const selectedTests = selectedTestSnapshot.docs.map((testDoc) => {
      const testData = testDoc.data();
      return {
        testName: testData.testName,
        price: testData.price
      };
    });

    // Menyiapkan respons dengan data pengguna dan data selectedTest dari Firestore
    const response = {
      message: "Data pengguna dan data selectedTest dari Firestore",
      users: users,
      selectedTests: selectedTests,
      status: "success",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data", status: "error", error: error.message });
  }
}
