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

async function getBarang() {
  try {
    // Mengambil referensi koleksi 'daftar-barang' dari Firestore
    const barangCollection = admin.firestore().collection('daftar-barang');

    // Mengambil data dari koleksi 'daftar-barang'
    const barangSnapshot = await barangCollection.get();

    // Mengubah data snapshot 'daftar-barang' menjadi array dengan properti yang spesifik
    const daftarBarang = barangSnapshot.docs.map((barangDoc) => {
      const barangData = barangDoc.data();
      return {
        namaBarang: barangData.namaBarang,
        kodeBarang: barangData.kodeBarang,
        keterangan: barangData.keterangan,
        satuan: barangData.satuan,
        stokBarang: barangData.stokBarang,
        gambarBarang: barangData.gambarBarang 
      };
    });

    return daftarBarang;
  } catch (error) {
    throw error;
  }
}

export async function GET() {
  try {
    // Mengambil data barang dari fungsi getBarang
    const daftarBarang = await getBarang();
    // Menyiapkan respons dengan data dari Firestore
    const response = {
      message: "Data barang dari Firestore",
      barang: daftarBarang,
      status: "success",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data", status: "error", error: error.message });
  }
}
