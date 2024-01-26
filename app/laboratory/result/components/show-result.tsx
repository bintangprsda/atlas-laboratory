"use client";

import React, { useState } from "react";
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
import { FileText  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

                      
export default function ShowResult({ pdfUrl }) {
    return (
      <Dialog>
        <DialogTrigger>
          <div className="bg-black text-white flex items-center py-2 px-3 rounded-md hover:bg-opacity-80">
            <FileText size="1.2em" />
            <span className="ml-2 text-sm hidden sm:inline">View Result</span>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-3">Test Result</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center w-full">
            {pdfUrl && (
              <iframe src={pdfUrl} width="100%" height="500px" />
            )}
          </div>
          <DialogFooter className="flex items-center justify-end gap-x-2">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button size={"sm"} className="text-sm" onClick={() => window.open(pdfUrl)}>
                Print
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  