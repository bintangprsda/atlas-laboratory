"use client"
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Form } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import FormTest from "./form-test";

const RegistrationForm = ({ onSubmit = () => {} }) => {
  const [formData, setFormData] = useState({
    namaPasien: '',
    noMR: '',
    status: 'Dikirim',
    tanggalKirim: '',
    tanggalLahir: '',
    namaDokter: '',
    diagnosa: '',
    labRujukan: 'SH Lippo Village',
    gender: '',
  });

  useEffect(() => {
    // Set default value for tanggalKirim when component mounts
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const defaultTanggalKirim = `${day}-${month}-${year} ${hours}:${minutes}`;

    setFormData((prevData) => ({
      ...prevData,
      tanggalKirim: prevData.tanggalKirim || defaultTanggalKirim,
    }));
  }, []); // Empty dependency array ensures this effect runs only once on mount

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
      console.log("Response:", data);

      // Invoke the onSubmit function with the form data
      onSubmit(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="ml-6 mr-6 mb-2 grid gap-4">
      <Card className="mb-4 md:mb-0">
      <CardHeader>
        <CardTitle>Patient data</CardTitle>
        <CardDescription>Input data patient</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
      <Form>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="noMR">Medical Record</Label>
            <Input
              id="noMR"
              name="noMR"
              type="number"
              placeholder="Input Number MR..."
              value={formData.noMR}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="namaPasien">Patient Name</Label>
            <Input
              id="namaPasien"
              name="namaPasien"
              type="text"
              placeholder="Input Patient Name..."
              value={formData.namaPasien}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tanggalLahir">Date of Birth</Label>
            <Input
              id="tanggalLahir"
              name="tanggalLahir"
              type="date"
              value={formData.tanggalLahir}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="gender">Gender</Label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="namaDokter">Doctor Name</Label>
            <Input
              id="namaDokter"
              name="namaDokter"
              type="text"
              placeholder="Input name doctor..."
              value={formData.namaDokter}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="diagnosa">Diagnosa</Label>
            <Input
              id="diagnosa"
              name="diagnosa"
              type="text"
              placeholder="Input diagnosa..."
              value={formData.diagnosa}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="labRujukan">Send to Laboratory</Label>
            <Select
              id="labRujukan"
              name="labRujukan"
              value={formData.labRujukan}
              onChange={(selectedValue) => handleChange({ target: { name: 'labRujukan', value: selectedValue } })}
            >
              <SelectTrigger>
                <SelectValue placeholder="SH Lippo Village" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SH Lippo Village">SH Lippo Village</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Form>

      </CardContent>
      <CardFooter className="justify-between space-x-2">
      <Button onClick={handleSubmit} className="w-full sm:w-auto">
          Submit
        </Button>
      </CardFooter>
    </Card>
   <FormTest/>
   </div>
  );
};

export default RegistrationForm;
