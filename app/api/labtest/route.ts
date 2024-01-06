// api/labtest.ts
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

export async function GET() {
  try {
    // Fetch data from Firestore
    const selectedTestCollection = admin.firestore().collection('selectedTests');
    const selectedTestSnapshot = await selectedTestCollection.get();

    // Map the data to an array of objects
    const selectedTests = selectedTestSnapshot.docs.map((testDoc) => {
      const testData = testDoc.data();
      return {
        testName: testData.testName,
        price: testData.price,
      };
    });

    // Log the response to check its format
    console.log(selectedTests);

    // Prepare a JSON response with only selectedTests
    const response = {
      selectedTests: selectedTests,
      status: "success",
    };

    // Return the JSON response
    return NextResponse.json(response);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data", status: "error", error: error.message });
  }
}
