// app/laboratory/test/page.tsx
"use client";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ChevronLeft } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import React, { useState, useEffect } from 'react';

interface TubeData {
  [code: number]: string[];
}

const LabPage: React.FC = () => {
  const [selectedTubes, setSelectedTubes] = useState<number[]>([]);
  const [selectedTests, setSelectedTests] = useState<any[]>([]);
  const [tubeTypes, setTubeTypes] = useState<any[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../api/smart');
        const data = await response.json();

        console.log('Raw API Data:', data);

        if (data && data.selectedTests && data.tubeTypes) {
          const updatedSelectedTests = data.selectedTests.map((test: any) => ({
            ...test,
            codeTube: data.tubeTypes.find((tubeType: any) => tubeType.id === test.codeTube)?.codeTube,
          }));

          setSelectedTests(updatedSelectedTests);
          setTubeTypes(data.tubeTypes);
        } else {
          console.error('Error: Required data not available in the API response.', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [dialogTests, setDialogTests] = useState<any[]>([]); // State khusus untuk dialog

  const openDialog = () => {
    // Saat dialog dibuka, salin selectedTests ke dalam dialogTests
    setDialogTests([...selectedTests]);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    // Kembalikan dialogTests ke selectedTests saat dialog ditutup
    setSelectedTests([...dialogTests]);
    setIsDialogOpen(false);
  };

  const saveDialog = () => {
    // Saat tombol "Simpan" diklik, salin dialogTests ke dalam selectedTests dan tutup dialog
    setSelectedTests([...dialogTests]);
    setIsDialogOpen(false);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTest = event.target.value;
  
    setDialogTests((prevTests) => {
      const updatedTests = [...prevTests];
      const testIndex = updatedTests.findIndex((test) => test.testName === selectedTest);
  
      if (event.target.checked) {
        if (testIndex !== -1) {
          // Jika tes sudah ada di dalam daftar, hanya atur isSelected menjadi true
          updatedTests[testIndex].isSelected = true;
        } else {
          // Jika tes tidak ada di dalam daftar, tambahkan dengan isSelected disetel menjadi true
          updatedTests.push({ testName: selectedTest, isSelected: true });
        }
      } else {
        // Jika kotak centang tidak dicentang, perbarui isSelected menjadi false
        if (testIndex !== -1) {
          updatedTests[testIndex].isSelected = false;
        }
      }
  
      // Juga perbarui selectedTests agar efeknya langsung terlihat
      setSelectedTests(updatedTests);
  
      // Memperbarui tabung yang dipilih berdasarkan tes yang dipilih
      updateSelectedTubes(updatedTests);
  
      return updatedTests;
    });
  };
  
  


  const updateSelectedTubes = (selectedTestsArray: any[]) => {
    const selectedTubeTypes = selectedTestsArray
      .filter((test) => test.isSelected)
      .map((test) => tubeTypes.find((tubeType) => tubeType.codeTube === test.testName))
      .filter((tubeType) => tubeType !== undefined)
      .map((tubeType) => tubeType.id);
  
    setSelectedTubes(selectedTubeTypes);
  };
  
  

  useEffect(() => {
    const labCheckboxes = document.querySelectorAll<HTMLInputElement>(".labCheckbox");

    labCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateSelectedTubes);
    });

    return () => {
      labCheckboxes.forEach((checkbox) => {
        checkbox.removeEventListener("change", updateSelectedTubes);
      });
    };
  }, []);

  const getTubeName = (code: number): string | undefined => {
    const tubeType = tubeTypes.find((tube: any) => tube.id === code);
    return tubeType ? tubeType.tubeName : undefined;
  };

  const getSelectedTubeTypes = (): any[] => {
    const selectedTestCodes = selectedTests
      .filter((test) => test.isSelected)
      .map((test) => test.codeTube);
  
    const filteredTubeTypes = tubeTypes.filter((tubeType) => selectedTestCodes.includes(tubeType.codeTube));
  
    return filteredTubeTypes;
  };
  
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w flex-col items-start gap-2">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
            ⭐️ Smart Tube 🌈
          </h1>
          <div className="flex text-xs font-extrabold flex-grow justify-end">
            <Link href="/laboratory" className={buttonVariants({ variant: "ghost" })}>
              <ChevronLeft />
              Back
            </Link>
          </div>
        </div>
        <p className="max-w text-sm text-muted-foreground">
          Laboratory Sample Processing Workflow
        </p>
      </div>
      <div>
        <h1>Pilih Pemeriksaan Lab:</h1>
      
        <Dialog>
          <DialogTrigger asChild>
          <Button variant="outline" onClick={openDialog}>
              Klik Form
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full sm:max-w-[950px] mx-auto p-4 rounded-md">
            <DialogHeader>
              <DialogTitle>Form laboratory</DialogTitle>
              <DialogDescription>
                Select your test and Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search test..." className="pl-8 w-full sm:w-[500px] md:w-[900px]" />
            </div>
            <Tabs defaultValue="front" className="w-full sm:w-[900px]">
              <TabsList className="grid w-full sm:w-[500px] md:w-[900px] grid-cols-2">
                <TabsTrigger value="front">Front</TabsTrigger>
                <TabsTrigger value="back">Back</TabsTrigger>
              </TabsList>
              <TabsContent value="front">
                <ScrollArea className="h-[300px]">
                  <Badge className="ml-auto w-full mb-4 flex items-center justify-center">
                    <div className="font-bold">category</div>
                  </Badge>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-sm font-bold mb-2">testGroup</h3>
                      <div className="mt-3 flex flex-row items-start space-x-3 space-y-0">
                        <input
                          type="checkbox"
                          id="testID"
                          className="labCheckbox"
                          value="FULL BLOOD COUNT"
                          onChange={handleCheckboxChange}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="testID"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            FULL BLOOD COUNT
                          </label>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-row items-start space-x-3 space-y-0">
                        <input
                          type="checkbox"
                          id="01"
                          className="labCheckbox"
                          value="D-DIMER"
                          onChange={handleCheckboxChange}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="01"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            D-DIMER
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="back">
                <ScrollArea className="h-[300px]">
                  <Badge className="ml-auto w-full mb-4 flex items-center justify-center">
                    <div className="font-bold">category</div>
                  </Badge>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-sm font-bold mb-2">testGroup</h3>
                      <div className="mt-3 flex flex-row items-start space-x-3 space-y-0">
                        <input
                          type="checkbox"
                          id="01"
                          className="labCheckbox"
                          value="D-DIMER"
                          onChange={handleCheckboxChange}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <label
                            htmlFor="01"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            D-DIMER
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
            <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="secondary" onClick={closeDialog}>
            Close
          </Button>
        </DialogClose>
        <Button onClick={saveDialog} className="ml-2">
          Simpan
        </Button>
      </DialogFooter>
          </DialogContent>
        </Dialog>

        <div id="selectedTests">
          <h2>Pemeriksaan yang Dipilih:</h2>
          <ul>
            {selectedTests.map((test, index) => (
              <li key={index}>
                {test.isSelected && (
                  <>
                    {index + 1}. {test.testName}
                    <button
                      onClick={() => {
                        setSelectedTests((prevTests) => {
                          const updatedTests = [...prevTests];
                          updatedTests[index].isSelected = false;
                          return updatedTests.filter((_, i) => i !== index);
                        });
                      }}
                      className="ml-2 text-red-500 cursor-pointer"
                    >
                      Remove
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Selalu tampilkan "Tipe Tabung yang Tersedia" */}
        <div id="tubeTypes">
          <h2>Tipe Tabung yang Tersedia:</h2>
          <ul>
            {getSelectedTubeTypes().map((tubeType: any) => (
              <li key={tubeType.id}>{tubeType.tubeName} (Kode {tubeType.codeTube})</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LabPage;
