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

  const TestDetailDialog = ({ test, onClose }) => {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">View</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{test.testName}</DialogTitle>
            <DialogDescription>Test Parameter Laboratory</DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">Price: {test.price}</div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogTrigger asChild>
              <Button type="button" variant="secondary" onClick={onClose}>
                Close
              </Button>
            </DialogTrigger>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  };
  
  export default TestDetailDialog;