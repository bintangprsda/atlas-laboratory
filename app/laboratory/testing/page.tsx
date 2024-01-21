// pages/index.tsx
"use client"
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [formData, setFormData] = useState({
    namaPasien: '',
    namaRS: '',
    status: '',
    tanggalKirim: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      console.log('Submitting form:', formData);
      const response = await fetch('../../../api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add data');
      }

      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h1>Next.js Firebase Form</h1>
      <Form>
        <div>
          <Label htmlFor="namaPasien">Nama Pasien</Label>
          <Input
            type="text"
            id="namaPasien"
            name="namaPasien"
            placeholder="Nama Pasien"
            value={formData.namaPasien}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="namaRS">Nama RS</Label>
          <Input
            type="text"
            id="namaRS"
            name="namaRS"
            placeholder="Nama RS"
            value={formData.namaRS}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="status">Status</Label>
          <Input
            type="text"
            id="status"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label htmlFor="tanggalKirim">Tanggal Kirim</Label>
          <Input
            type="text"
            id="tanggalKirim"
            name="tanggalKirim"
            placeholder="Tanggal Kirim"
            value={formData.tanggalKirim}
            onChange={handleChange}
          />
        </div>
        <Button type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}