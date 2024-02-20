"use client";

import React, { useState, useEffect } from 'react';
import { useCallback } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";

export default function FileUpload({ selectedOrderTestId, onFileUpload }) {
  const documentId = selectedOrderTestId || '';
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Initially closed
  const [username, setUsername] = useState('');
  const [hospital, setHospital] = useState('');
  const [file, setFile] = useState(null); // State to store the selected file

  // Retrieve username and hospital on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedHospital = localStorage.getItem('hospital');
    if (storedUsername && storedHospital) {
      setUsername(storedUsername);
      setHospital(storedHospital);
    }
  }, []);

  const handleFileChange = useCallback((event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setFile(files[0]); // Set the first file as the selected file
    }
  }, []);

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('documentId', documentId);
    formData.append('status', 'Selesai');
    formData.append('userUpload', username);
    formData.append('hospitalUpload', hospital);

    // Adjust the date format as per your requirement
    const now = new Date();
    const pad = (num) => num.toString().padStart(2, '0');
    const tanggalSelesai = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
    formData.append('tanggalSelesai', tanggalSelesai);

    try {
      const response = await fetch('../../../api/uploadResult', {
        method: 'PATCH',
        body: formData,
      });
      
      // Check if the response is ok and has content
      if (!response.ok) {
        throw new Error('Server responded with an error!');
      }
      
      const text = await response.text(); // Get response body as text
      const data = text ? JSON.parse(text) : {}; // Safely parse the JSON only if there's a response body
      
      if (data.status === "success") {
        alert('Order status updated successfully');
        setIsDialogOpen(false);
        onFileUpload();
      } else {
        throw new Error(data.message || 'Unknown error occurred');
      }
      
    } catch (error) {
      console.error('Failed to update order status:', error);
      alert(`Failed to update order status: ${error.message}`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button onClick={() => setIsDialogOpen(true)} className="bg-white text-black flex items-center py-2 px-3 rounded-md hover:bg-opacity-80">
          <Upload size="1.2em" />
          <span className="ml-2 text-sm hidden sm:inline">Upload File</span>
        </button>
      </DialogTrigger>
      {isDialogOpen && (
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">Upload Result for ID: {selectedOrderTestId}</DialogTitle>
            <input
              id="dropzone-file"
              accept=".pdf"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <Upload size="1.6em" />
              <span className="mt-2 text-sm text-gray-500">Drag or click to select a PDF file</span>
              <span className="text-xs text-gray-400">(500x500 px & under 10MB)</span>
            </label>
          </DialogHeader>
          <DialogFooter className="flex items-center justify-end gap-x-2">
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
            <Button onClick={handleUpload}>Upload</Button>
          </DialogFooter>
        </DialogContent>
      )}
    </Dialog>
  );
}