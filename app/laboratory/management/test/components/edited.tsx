import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component

const EditedTest = ({ isOpen, onClose, testDetail }) => {
  // Initialize state for each editable field with the testDetail prop
  const [name, setName] = useState(testDetail?.testName || "");
  const [category, setCategory] = useState(testDetail?.category || "");
  const [price, setPrice] = useState(testDetail?.price || "");
  const [resultTest, setResultTest] = useState(testDetail?.resultTest || "");
  const [keterangan, setKeterangan] = useState(testDetail?.keterangan || "");
  const [jadwal, setJadwal] = useState(testDetail?.jadwal || "");
  const [deskripsi, setDeskripsi] = useState(testDetail?.deskripsi || "");

  // Effect to reset form when testDetail changes
  useEffect(() => {
    setName(testDetail?.testName || "");
    setCategory(testDetail?.category || "");
    setPrice(testDetail?.price || "");
    setResultTest(testDetail?.resultTest || "");
    setKeterangan(testDetail?.keterangan || "");
    setJadwal(testDetail?.jadwal || "");
    setDeskripsi(testDetail?.deskripsi || "");
  }, [testDetail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, send the data to an API or update a state
    console.log({ name, category, price, resultTest, keterangan, jadwal, deskripsi });
    onClose(); // Close the dialog after submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <form onSubmit={handleSubmit}>
        <DialogContent className="w-full max-w-md mx-auto p-4 rounded-md sm:max-w-[750px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold leading-6 sm:text-xl">🧬 Edit Test Details</DialogTitle>
            <DialogDescription className="mt-2 text-sm sm:text-base">
              Edit the information of the test parameter.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 grid gap-4">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Test Name" />
            <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <Input value={resultTest} onChange={(e) => setResultTest(e.target.value)} placeholder="Result Test" />
            <Input value={keterangan} onChange={(e) => setKeterangan(e.target.value)} placeholder="Keterangan" />
            <Input value={jadwal} onChange={(e) => setJadwal(e.target.value)} placeholder="Jadwal" />
            <Input value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} placeholder="Deskripsi" />
          </div>
          <DialogFooter className="mt-4 flex justify-end">
            <Button type="button" variant="destructive" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="default">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default EditedTest;
