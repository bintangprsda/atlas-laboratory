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
    // Fetch data from Firestore for tubeTypes
    const tubeTypesCollection = admin.firestore().collection('tubeTypes');
    const tubeTypesSnapshot = await tubeTypesCollection.get();

    // Map the data to an array of objects
    const tubeTypes = tubeTypesSnapshot.docs.map((tubeDoc) => {
      const tubeData = tubeDoc.data();
      return {
        id: tubeDoc.id,
        pictureTube: tubeData.pictureTube,
        tubeName: tubeData.tubeName,
      };
    });

    // Log the response to check its format
    console.log(tubeTypes);

    // Prepare a JSON response with only tubeTypes
    const response = {
      tubeTypes: tubeTypes,
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
