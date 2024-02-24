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
  // Use parseFloat to ensure price is treated as a floating-point number
  return selectedTests.reduce((total, test) => total + parseFloat(test.price.toString()), 0);
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

// Fungsi untuk memformat tanggal dari "yyyy-mm-dd" ke "dd-mm-yyyy"
const formatTanggalLahir = (tanggalLahir) => {
  const [year, month, day] = tanggalLahir.split('-');
  return `${day}-${month}-${year}`;
};

async function addOrderTestData(orderTest) {
  try {
    const totalPrice = calculateTotal(orderTest.selectedTests);

    // Menambahkan total harga ke data order
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
    const body = await request.json();
    console.log('Received body:', body);

    let {
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
      age = '',
      username = '', // Default to empty string if not provided
      hospital = '', // Default to empty string if not provided
    } = body;

    console.log('username:', username, 'hospital:', hospital); // Logging

    if (!namaPasien || !selectedTests || selectedTests.length === 0) {
      return NextResponse.json({ message: "Missing necessary data", status: "error" });
    }

    // Memformat tanggalLahir sebelum mengirim
    tanggalLahir = formatTanggalLahir(tanggalLahir);

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
      age,
      selectedTests,
      userOrder: username, // Gunakan username dari state.
      hospitalOrder: hospital, // Gunakan hospital dari state.
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
