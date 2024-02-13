"use client"
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button";
  import { Badge } from "@/components/ui/badge"

  const TestDetailDialog = ({ isOpen, onClose, testDetail }) => {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-full max-w-md mx-auto p-4 rounded-md sm:max-w-[750px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold leading-6 sm:text-xl">🧬 {testDetail?.testName}</DialogTitle>
            <div>
            <Badge>{testDetail?.category}</Badge>
            </div>
            <DialogDescription className="mt-2 text-sm sm:text-base">Information Test Parameter Laboratory</DialogDescription>
          </DialogHeader>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>Price: {testDetail?.price}</div>
            <div>Result Test: {testDetail?.resultTest}</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>Keterangan: {testDetail?.keterangan}</div>
            <div>Jadwal: {testDetail?.jadwal}</div>
          </div>
          <div>
            <div className="mt-4 grid gap-4">
              <div>Deskripsi: {testDetail?.deskripsi}</div>
            </div>
          </div>
          <DialogFooter className="mt-4 flex justify-start">
            <Button type="button" variant="secondary" onClick={onClose}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>

      </Dialog>
    );
  };
  
  export default TestDetailDialog;