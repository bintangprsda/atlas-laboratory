// pages/api/route.ts
import { NextRequest, NextResponse } from "next/server";
import * as admin from "firebase-admin";

const serviceAccount = require("../../../lib/config.json");

// Initialize Firebase app if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const orderTestCollection = admin.firestore().collection('orderTest');

async function addOrderTestData(orderTests: { testName: string; price: number }[]): Promise<{ status: string }> {
  try {
    // Create a batch operation for efficiency
    const batch = admin.firestore().batch();
    
    orderTests.forEach(orderTest => {
      const newDoc = orderTestCollection.doc(); // Create a new document reference
      batch.set(newDoc, orderTest); // Add to batch
    });

    await batch.commit(); // Commit the batch
    return { status: "success" };
  } catch (error) {
    console.error("Error adding data:", error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    if (admin.apps.length === 0) {
      console.log("Firebase is not connected!");
      throw new Error("Firebase is not connected");
    }

    const orderTests = await request.json(); // Assuming the body is now an array of orderTests

    if (!Array.isArray(orderTests) || orderTests.some(orderTest => !orderTest.testName || !orderTest.price)) {
      return NextResponse.json({ message: "Invalid data", status: "error" });
    }

    console.log('Received data:', orderTests);

    await addOrderTestData(orderTests);

    const response = {
      message: "Data orderTest berhasil ditambahkan",
      status: "success",
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in POST endpoint:", error);
    return NextResponse.json({ message: "Error in POST endpoint", status: "error", error: error.message });
  }
}
