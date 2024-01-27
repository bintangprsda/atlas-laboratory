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
        completeName: userData.completeName,
        hospital: userData.hospital,
        group: userData.group,
        role: userData.role,
        profilePictureURL: userData.profilePictureURL // Menambahkan profilPictureURL
      };
    });

    return users;
  } catch (error) {
    throw error;
  }
}

async function getHospitalsData() {
  try {
    // Mengambil referensi koleksi 'hospitals' dari Firestore
    const hospitalsCollection = admin.firestore().collection('hospitals');

    // Mengambil data dari koleksi 'hospitals'
    const hospitalsSnapshot = await hospitalsCollection.get();

    // Mengubah data snapshot 'hospitals' menjadi array dengan properti yang spesifik
    const hospitals = hospitalsSnapshot.docs.map((hospitalDoc) => {
      const hospitalData = hospitalDoc.data();
      return {
        hospitalsName: hospitalData.hospitalsName,
        email: hospitalData.email,
      };
    });

    return hospitals;
  } catch (error) {
    throw error;
  }
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
    // Mengambil data pengguna dari fungsi getUsersData
    const users = await getUsersData();
    
    // Mengambil data rumah sakit dari fungsi getHospitalsData
    const hospitals = await getHospitalsData();
    
    // Mengambil data peran dari fungsi getRolesData
    const roles = await getRolesData();

    // Menyiapkan respons dengan data dari Firestore
    const response = {
      message: "Data pengguna, rumah sakit, dan peran dari Firestore",
      users: users,
      hospitals: hospitals,
      roles: roles,
      status: "success",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data", status: "error", error: error.message });
  }
}
