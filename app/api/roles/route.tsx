// api/route.ts
import { NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Inisialisasi Firebase Admin SDK
const serviceAccount = require("../../../lib/service.json"); // Path ke file serviceAccountKey.json dari Firebase Console

// Check if Firebase app is already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

async function getRolesData() {
  try {
    // Mengambil referensi koleksi 'roles' dari Firestore
    const rolesCollection = admin.firestore().collection('roles');

    // Mengambil data dari koleksi 'roles'
    const rolesSnapshot = await rolesCollection.get();

    // Mengubah data snapshot 'roles' menjadi array dengan properti yang spesifik
    const roles = rolesSnapshot.docs.map((roleDoc) => {
      const roleData = roleDoc.data();
      return {
        RoleName: roleData.RoleName,
        ID: roleData.ID,
      };
    });

    return roles;
  } catch (error) {
    throw error;
  }
}

export async function GET() {
  try {
    // Mengambil data peran dari fungsi getRolesData
    const roles = await getRolesData();

    // Menyiapkan respons dengan data peran dari Firestore
    const response = {
      message: "Data peran dari Firestore",
      roles: roles,
      status: "success",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data", status: "error", error: error.message });
  }
}
