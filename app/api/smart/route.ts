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
    // Fetch data from Firestore for selectedTests
    const selectedTestCollection = admin.firestore().collection('selectedTests');
    const selectedTestSnapshot = await selectedTestCollection.get();

    // Map the data to an array of objects for selectedTests
    const selectedTests = selectedTestSnapshot.docs.map((testDoc) => {
      const testData = testDoc.data();
      return {
        testID: testDoc.id,
        testName: testData.testName,
        price: testData.price,
        codeTube: testData.codeTube,
        type: testData.type,
        testGroup: testData.testGroup,
        category: testData.category,
        kodeTest: testData.kodeTest,
      };
    });

    // Fetch data from Firestore for tubeTypes
    const tubeTypesCollection = admin.firestore().collection('tubeTypes');
    const tubeTypesSnapshot = await tubeTypesCollection.get();

    // Map the data to an array of objects for tubeTypes
    const tubeTypes = tubeTypesSnapshot.docs.map((tubeDoc) => {
      const tubeData = tubeDoc.data();
      return {
        id: tubeDoc.id,
        pictureTube: tubeData.pictureTube,
        tubeName: tubeData.tubeName,
        codeTube: tubeData.codeTube,
      };
    });

    // Log the responses to check their format
    console.log(selectedTests);
    console.log(tubeTypes);

    // Prepare a combined JSON response
    const response = {
      selectedTests: selectedTests,
      tubeTypes: tubeTypes,
      status: "success",
    };

    // Return the combined JSON response
    return NextResponse.json(response);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data", status: "error", error: error.message });
  }
}
