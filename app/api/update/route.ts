import { NextRequest, NextResponse } from "next/server";
import * as admin from "firebase-admin";

// Initialize Firebase only once
if (admin.apps.length === 0) {
  const serviceAccount = require("../../../lib/config.json"); // Adjust the path as necessary
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const orderTestCollection = admin.firestore().collection('orderTest');

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Received body:", body); // Log the received body

    // Extracting documentId and updateFields from the request body
    const { documentId, updateFields } = body;

    // Check if both documentId and updateFields are provided
    if (!documentId || !updateFields) {
      return NextResponse.json({ message: "Missing documentId or updateFields", status: "error" });
    }

    // Reference to the specific document in Firestore
    const documentRef = admin.firestore().collection('orderTest').doc(documentId);

    // Update the document with the provided fields
    await documentRef.update(updateFields);

    // Response after successful update
    return NextResponse.json({
      message: "Document successfully updated",
      status: "success",
      documentId, // Optionally return the documentId to confirm which document was updated
    });
  } catch (error) {
    console.error("Error in PATCH endpoint:", error);
    return NextResponse.json({
      message: "Error in PATCH endpoint",
      status: "error",
      error: error.message,
    });
  }
}