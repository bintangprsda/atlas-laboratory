// api/route.ts
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Inisialisasi Firebase Admin SDK
const serviceAccount = require("../../../lib/config.json"); // Path ke file serviceAccountKey.json dari Firebase Console

// Check if Firebase app is already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

async function getOrderTestData() {
  try {
    // Mengambil referensi koleksi 'orderTest' dari Firestore
    const orderTestCollection = admin.firestore().collection('orderTest');

    // Mengambil data dari koleksi 'orderTest'
    const orderTestSnapshot = await orderTestCollection.get();

    // Mengubah data snapshot 'orderTest' menjadi array dengan properti yang spesifik
    const orderTests = orderTestSnapshot.docs.map((orderTestDoc) => {
      const orderTestData = orderTestDoc.data();
      return {
        namaPasien: orderTestData.namaPasien,
        namaRS: orderTestData.namaRS,
        status: orderTestData.status,
        tanggalKirim: orderTestData.tanggalKirim,
      };
    });

    return orderTests;
  } catch (error) {
    throw error;
  }
}

export async function GET() {
  try {
    // Mengambil data orderTest dari fungsi getOrderTestData
    const orderTests = await getOrderTestData();

    // Menyiapkan respons dengan data orderTest dari Firestore
    const response = {
      message: "Data orderTest dari Firestore",
      orderTests: orderTests,
      status: "success",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data", status: "error", error: error.message });
  }
}