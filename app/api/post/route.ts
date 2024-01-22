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

async function addOrderTestData(orderTest: {
  namaPasien: string;
  noMR: string;
  status: string;
  tanggalKirim: string;
  tanggalLahir: string;
  namaDokter: string;
  diagnosa: string;
  labRujukan: string;
  gender: string;
  selectedTests: Array<{ testName: string; price: number }>;
}): Promise<{ status: string }> {
  try {
    const totalPrice = calculateTotal(orderTest.selectedTests);

    const orderDataWithTotal = {
      ...orderTest,
      total: totalPrice, // Add total field
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
      noMR,
      status,
      tanggalKirim,
      tanggalLahir,
      namaDokter,
      diagnosa,
      labRujukan,
      gender,
      selectedTests,
    } = await request.json();

    if (
      !namaPasien ||
      !noMR ||
      !status ||
      !tanggalKirim ||
      !tanggalLahir ||
      !namaDokter ||
      !diagnosa ||
      !labRujukan ||
      !gender ||
      !selectedTests
    ) {
      return NextResponse.json({ message: "Invalid data", status: "error" });
    }

    await addOrderTestData({
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
    });

    const response = {
      message: "Data orderTest berhasil ditambahkan",
      status: "success",
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
