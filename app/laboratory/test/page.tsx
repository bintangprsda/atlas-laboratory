// app/laboratory/test/page.tsx
"use client"
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, FlaskConical, PlusCircle, Trash2, ChevronLeft   } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import React, { useState, useEffect } from 'react';

interface TubeData {
  [code: number]: string[];
}

const tubeData: TubeData = {
  10: ["FBC", "HBAIC", "MALARIA"],
  11: ["HBSAG", "ANTI HIV", "ANTI HCV"],
  12: ["SGOT", "SGPT", "UREUM", "CREATIN"],
  13: ["PT", "APTT", "TT"],
  14: ["KETON", "HCO3", "FBC"]
};

const LabPage: React.FC = () => {
  const [selectedTubes, setSelectedTubes] = useState<number[]>([]);
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTest = event.target.value;
  
    setSelectedTests((prevTests) => {
      if (event.target.checked) {
        return [...prevTests, selectedTest];
      } else {
        return prevTests.filter((test) => test !== selectedTest);
      }
    });
  };
  
  useEffect(() => {
    const calculateSelectedTubeTypes = (testsArray: string[]): number[] => {
      const selectedTubeTypes: number[] = [];

      testsArray.forEach((test) => {
        for (const [code, tubes] of Object.entries(tubeData)) {
          if (tubes.includes(test) && !selectedTubeTypes.includes(Number(code))) {
            selectedTubeTypes.push(Number(code));
          }
        }
      });

      return selectedTubeTypes;
    };

    setSelectedTubes(calculateSelectedTubeTypes(selectedTests));
  }, [selectedTests]);

  const updateSelectedTubes = () => {
    const labCheckboxes = document.querySelectorAll<HTMLInputElement>(".labCheckbox:checked");
    const selectedTestsArray = Array.from(labCheckboxes).map((checkbox) => checkbox.value);

    const selectedTubeTypes = calculateSelectedTubeTypes(selectedTestsArray);

    setSelectedTubes(selectedTubeTypes);
    setSelectedTests(selectedTestsArray);
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

  const getTubeName = (code: number): string => {
    return {
      10: "EDTA",
      11: "MERAH S",
      12: "MERAH K",
      13: "SITRAT",
      14: "HEPARIN"
    }[code];
  };
  

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full">
        <h1 className="text-lg font-extrabold leading-tight tracking-tighter md:text-4xl">
        ⭐️ Smart Tube 🌈
        </h1>
        <div className="flex text-xs font-extrabold flex-grow justify-end">
          <Link
            href="/laboratory"
            className={buttonVariants({ variant: "ghost" })}
          >
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
        <Button variant="outline">Klik Form</Button>
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-[950px] mx-auto p-4 rounded-md">
        <DialogHeader>
          <DialogTitle>Form laboratory</DialogTitle>
          <DialogDescription>
            Select your test and, Click save when you're done.
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
                value="FBC"
                onChange={handleCheckboxChange}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="testID"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  FBC
                </label>
                
              </div>
            </div>
            <div className="mt-3 flex flex-row items-start space-x-3 space-y-0">
              <input
                type="checkbox"
                id="01"
                className="labCheckbox"
                value="SGOT"
                onChange={handleCheckboxChange}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="01"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  SGOT
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
                    <Checkbox id="testID" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="codeTube"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        testName
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
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <div id="selectedTests">
  <h2>Pemeriksaan yang Dipilih:</h2>
  {selectedTests.map((test, index) => (
    <div key={index} className="flex items-center">
      <p>{index + 1}. {test}</p>
      <button
        onClick={() => {
          setSelectedTests((prevTests) => prevTests.filter((_, i) => i !== index));
        }}
        className="ml-2 text-red-500 cursor-pointer"
      >
        Remove
      </button>
    </div>
  ))}
</div>
      <div id="selectedTubes">
        <h2>Jenis Tabung yang Diperlukan:</h2>
        {selectedTubes.map((code, index) => (
          <p key={index}>1 {getTubeName(code)} (Kode {code})</p>
        ))}
      </div>
    </div>
    </section>
    
  );
};

export default LabPage;
