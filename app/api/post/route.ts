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

async function addOrderTestData(orderTest: {
  namaPasien: string;
  namaRS: string;
  status: string;
  tanggalKirim: string;
}): Promise<{ status: string }> {
  try {
    await orderTestCollection.add(orderTest);
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

    const { namaPasien, namaRS, status, tanggalKirim } = await request.json();

    if (!namaPasien || !namaRS || !status || !tanggalKirim) {
      return NextResponse.json({ message: "Invalid data", status: "error" });
    }

    await addOrderTestData({ namaPasien, namaRS, status, tanggalKirim });

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
