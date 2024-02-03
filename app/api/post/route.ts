// pages/api/post/route.ts
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

function calculateTotal(selectedTests: Array<{ testName: string; price: number }>): number {
  return selectedTests.reduce((total, test) => total + test.price, 0);
}

async function generateDocumentNumber(): Promise<string> {
  const today = new Date();
  const dateString = today.toISOString().slice(0, 10).replace(/-/g, '');
  const prefix = `REG${dateString.substring(2)}`;

  const lastDocToday = await orderTestCollection
    .where('documentNumber', '>=', `${prefix}001`)
    .where('documentNumber', '<=', `${prefix}999`)
    .orderBy('documentNumber', 'desc')
    .limit(1)
    .get();

  let nextNumber = 1;
  if (!lastDocToday.empty) {
    const lastNumberStr = lastDocToday.docs[0].data().documentNumber.substring(9);
    const lastNumber = parseInt(lastNumberStr);
    nextNumber = lastNumber + 1;
  }

  const nextNumberStr = nextNumber.toString().padStart(3, '0');
  return `${prefix}${nextNumberStr}`;
}

async function addOrderTestData(orderTest: {
  documentNumber: string,
  namaPasien: string,
  noMR: string,
  status: string,
  tanggalKirim: string,
  tanggalLahir: string,
  namaDokter: string,
  diagnosa: string,
  labRujukan: string,
  gender: string,
  username: string,
  hospital: string,
  selectedTests: Array<{ testName: string; price: number; testId?: string; completed?: boolean; completionDate?: string }>;
}): Promise<{ status: string }> {
  try {
    const totalPrice = calculateTotal(orderTest.selectedTests);

    const orderDataWithTotal = {
      ...orderTest,
      total: totalPrice,
    };

    await orderTestCollection.add(orderDataWithTotal);

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

    const {
      namaPasien,
      noMR = '',
      status = '',
      tanggalKirim = '',
      tanggalLahir = '',
      namaDokter = '',
      diagnosa = '',
      labRujukan = '',
      gender = '',
      selectedTests,
      username, // Make sure to handle these as optional
      hospital, // Make sure to handle these as optional
    } = await request.json();

    if (!namaPasien || !selectedTests) {
      return NextResponse.json({ message: "Missing necessary data", status: "error" });
    }

    // Generate documentNumber
    const documentNumber = await generateDocumentNumber();

    const orderTestData = {
  documentNumber,
  namaPasien,
  noMR,
  status,
  tanggalKirim,
  tanggalLahir,
  namaDokter,
  diagnosa,
  labRujukan,
  gender,
  selectedTests,
  username: username || 'Unknown User', // Ensure fallback here as well
  hospital: hospital || 'Unknown Hospital', // Ensure fallback here as well
};

    
    await addOrderTestData(orderTestData);

    const response = {
      message: "Data orderTest successfully added",
      status: "success",
      documentNumber,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in POST endpoint:", error);
    return NextResponse.json({
      message: "Error in POST endpoint",
      status: "error",
      error: error.message,
    });
  }
}