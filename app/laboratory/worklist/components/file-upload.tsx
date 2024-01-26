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
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function FileUpload() {

    return (
        <Dialog>
          <DialogTrigger>
          <div className="bg-white text-black flex items-center py-2 px-3 rounded-md hover:bg-opacity-80">
            <Upload size="1.2em" />
            <span className="ml-2 text-sm hidden sm:inline">Upload File</span>
          </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className=" mb-3">Upload Result </DialogTitle>
    
              <div className=" flex items-center justify-center w-full"
              >
                <label
                  htmlFor="dropzone-file"
                  className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                    <div className=" text-center">
                      <div className=" border p-2 rounded-md max-w-min mx-auto">
                        <Upload size="1.6em" />
                      </div>
    
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Drag an PDF</span>
                      </p>
                      <p className="text-xs text-gray-400 dark:text-gray-400">
                        Click to upload &#40; image should be 500x500 px & under 10
                        MB &#41;
                      </p>
                    </div>
                    </label>
    
                <Input
                  id="dropzone-file"
                  accept="image/png, image/jpeg"
                  type="file"
                  className="hidden"
                />
              </div>
            </DialogHeader>
    
            <DialogFooter className=" flex items-center justify-end gap-x-2">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="secondary"
                >
                  Close
                </Button>
              </DialogClose>
    
              <DialogClose asChild>
                <Button
                  size={"sm"}
                  className=" text-sm"
                >Upload
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }