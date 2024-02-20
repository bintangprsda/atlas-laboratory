// File: /api/uploadResult/route.ts
import { NextRequest, NextResponse } from 'next/server';
import admin from 'firebase-admin';
import serviceAccount from '../../../lib/config.json'; // Ensure this path is correct

// Initialize Firebase admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export async function patchHandler(request: NextRequest) {
  try {
    const { documentId, updateFields } = await request.json();

    if (!documentId || !updateFields) {
      return new Response(JSON.stringify({ message: "Missing documentId or updateFields", status: "error" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const documentRef = admin.firestore().collection('orderTest').doc(documentId);
    await documentRef.update(updateFields);

    return new Response(JSON.stringify({ message: "Document successfully updated", status: "success", documentId }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error in PATCH endpoint:", error);
    return new Response(JSON.stringify({ message: "Error in PATCH endpoint", status: "error", error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

