import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import React, { useState, useEffect } from 'react';

export function AcceptOrder({ selectedOrderTest, refreshData }) {
  const [labNumber, setLabNumber] = useState('');
  const documentId = selectedOrderTest?.id || '';
  const [isDialogOpen, setIsDialogOpen] = useState(true); // Initially open
  const [username, setUsername] = useState('');
  const [hospital, setHospital] = useState('');

  // Retrieve username and hospital on component mount
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedHospital = localStorage.getItem('hospital');
    if (storedUsername && storedHospital) {
      setUsername(storedUsername);
      setHospital(storedHospital);
    }
  }, []);
  

  const handleAccept = async () => {
  const now = new Date();
  const pad = (num) => num.toString().padStart(2, '0');
  const tanggalDiterima = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}`;

  try {
    const response = await fetch('/api/update', { // Sesuaikan path jika diperlukan.
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        documentId,
        updateFields: {
          status: 'Running',
          labNumber,
          tanggalDiterima,
          userReceiver: username, // Gunakan username dari state.
          hospitalReceiver: hospital, // Gunakan hospital dari state.
        },
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      alert('Order status updated successfully');
      setIsDialogOpen(false); // Ini menutup dialog.
      refreshData(); // Ini memperbarui data.
    } else {
      throw new Error(data.message || 'Unknown error occurred');
    }
  } catch (error) {
    console.error('Failed to update order status:', error);
    alert(`Failed to update order status: ${error.message}`);
  }
};

  
  
  
  
  return (
    <Dialog isOpen={isDialogOpen} onDismiss={() => setIsDialogOpen(false)}>
      <DialogTrigger asChild>
        <Button variant="default">Accept</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Accept Sampel Order</DialogTitle>
          <DialogDescription>
            Input number laboratory to accept sample for {selectedOrderTest.namaPasien}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
          <Input
              value={labNumber}
              onChange={(e) => setLabNumber(e.target.value)}
              id="numberLab"
              name="numberLab"
              type="number"
              placeholder="Input LIS number"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
          <Button onClick={handleAccept}>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
