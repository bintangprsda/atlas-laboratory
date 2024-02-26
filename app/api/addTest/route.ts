// pages/api/addTest.js
import * as admin from "firebase-admin";

// Inisialisasi Firebase Admin SDK (Jika belum diinisialisasi)
const serviceAccount = require("../../../lib/config.json"); // Sesuaikan path file konfigurasi

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Dapatkan data dari body request
      const testData = req.body;

      // Tambahkan data ke collection 'selectedTests'
      const selectedTestCollection = admin.firestore().collection('selectedTests');
      const docRef = await selectedTestCollection.add(testData);

      // Kirim respons sukses
      res.status(200).json({ message: 'Data added successfully', docId: docRef.id });
    } catch (error) {
      console.error("Error adding document: ", error);
      res.status(500).json({ message: 'Failed to add data', error: error.message });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
