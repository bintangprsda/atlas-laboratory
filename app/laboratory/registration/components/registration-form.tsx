"use client"
import { useState, useEffect } from 'react'; 
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
import FormTest from "./form-test";
import useAuth from '../../../../helpers/hooks/useAuth';
import { Button } from 'react-day-picker';

const RegistrationForm = ({ onSubmit = () => {} }) => {
  useAuth();
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
    age: '',
  });

  useEffect(() => {
    const username = localStorage.getItem('username');
    const hospital = localStorage.getItem('hospital');

    // Jika ada, tambahkan ke state formData
    if (username && hospital) {
      setFormData(prev => ({ ...prev, username, hospital }));
    }
  }, []);
 
  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const defaultTanggalKirim = `${day}-${month}-${year} ${hours}:${minutes}`;

    setFormData((prevData) => ({
      ...prevData,
      tanggalKirim: defaultTanggalKirim,
    }));
  }, []);

  // Function to calculate age
  const calculateAge = (dob) => {
    const birthday = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    return age;
  };

  // Effect to auto-update age when tanggalLahir changes
  useEffect(() => {
    if (formData.tanggalLahir) {
      const age = calculateAge(formData.tanggalLahir);
      setFormData((prevData) => ({
        ...prevData,
        age: age.toString(), // Assuming age is expected to be a string; adjust if necessary
      }));
    }
  }, [formData.tanggalLahir]); // Depend on tanggalLahir

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  
  return (
    <>
      <Card className="mb-4 md:mb-0">
      <CardHeader>
        <CardTitle>Patient data</CardTitle>
        <CardDescription>Input data patient
        </CardDescription>
        
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
                <SelectItem value="SH Lippo Village">Siloam Hospitals Lippo Village</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="diagnosa">Age</Label>
            <Input
              id="age"
              name="age"
              type="text"
              placeholder=""
              value={formData.age}
              onChange={handleChange}
            />
          </div>
        </div>
      </Form>

      </CardContent>
    </Card>
    <FormTest formData={formData} setFormData={setFormData}/>
    </>
  );
};

export default RegistrationForm;
