// app/laboratory/testing/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const LabPage: React.FC = () => {
  const [frontCheckboxes, setFrontCheckboxes] = useState([
    { id: '01', label: 'FULL BLOOD COUNT', isChecked: false },
    { id: '02', label: 'D-DIMER', isChecked: false },
    { id: '03', label: 'HOMOCYSTEINE', isChecked: false },
    // Add more checkboxes for the "front" tab as needed
  ]);

  const [backCheckboxes, setBackCheckboxes] = useState([
    { id: '04', label: 'ACTIVATED PARTIAL THROMBOPLASTIN TIME (APTT)', isChecked: false },
    { id: '05', label: 'TRANSFERIN', isChecked: false },
    // Add more checkboxes for the "back" tab as needed
  ]);

  const [selectedTests, setSelectedTests] = useState([]);

  // Use useEffect to fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get('../../../api/smart');
  
        // Extract selectedTests and tubeTypes from the API response
        const { selectedTests, tubeTypes } = response.data;
  
        // Map the selectedTests with additional information from tubeTypes
        const enrichedSelectedTests = selectedTests.map((selectedTest) => {
          const tubeInfo = tubeTypes.find((tube) => tube.codeTube === selectedTest.codeTube);
          return {
            ...selectedTest,
            tubeInfo: tubeInfo || {}, // Add tubeInfo to the selectedTest object
          };
        });
  
        // Update the state with enrichedSelectedTests
        setSelectedTests(enrichedSelectedTests);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };
  
    // Call the fetchData function
    fetchData();
  }, []);
  


  const handleCheckboxChange = (id, isChecked, testName, tab) => {
    if (tab === 'front') {
      setFrontCheckboxes((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === id ? { ...checkbox, isChecked } : checkbox
        )
      );
    } else if (tab === 'back') {
      setBackCheckboxes((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === id ? { ...checkbox, isChecked } : checkbox
        )
      );
    }

    if (isChecked) {
      setSelectedTests((prevTests) => [
        ...prevTests,
        { id, isSelected: true, testName, tab },
      ]);
    } else {
      setSelectedTests((prevTests) =>
        prevTests.filter((test) => test.id !== id || test.tab !== tab)
      );
    }
  };

  const handleRemoveTest = (id, tab) => {
    setSelectedTests((prevTests) =>
      prevTests.filter((test) => test.id !== id || test.tab !== tab)
    );

    if (tab === 'front') {
      setFrontCheckboxes((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === id ? { ...checkbox, isChecked: false } : checkbox
        )
      );
    } else if (tab === 'back') {
      setBackCheckboxes((prevCheckboxes) =>
        prevCheckboxes.map((checkbox) =>
          checkbox.id === id ? { ...checkbox, isChecked: false } : checkbox
        )
      );
    }
  };

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Klik Form</Button>
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
            <Input
              placeholder="Search test..."
              className="pl-8 w-full sm:w-[500px] md:w-[900px]"
            />
          </div>
          <Tabs defaultValue="front" className="w-full sm:w-[900px]">
            <TabsList className="grid w-full sm:w-[500px] md:w-[900px] grid-cols-2">
              <TabsTrigger value="front">Front</TabsTrigger>
              <TabsTrigger value="back">Back</TabsTrigger>
            </TabsList>
            <TabsContent value="front">
        <ScrollArea className="h-[300px]">
          <Badge className="ml-auto w-full mb-4 flex items-center justify-center">
            <div className="font-bold">Front Category</div>
          </Badge>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-bold mb-2">Front Test Group</h3>
              {frontCheckboxes.map((checkbox, index) => (
                <div key={index} className="mt-3 flex flex-row items-start space-x-3 space-y-0">
                  <input
                    type="checkbox"
                    id={checkbox.id}
                    className="labCheckbox"
                    value={checkbox.label}
                    checked={checkbox.isChecked}
                    onChange={(e) =>
                      handleCheckboxChange(checkbox.id, e.target.checked, checkbox.label, 'front')
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={checkbox.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {checkbox.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </TabsContent>
      <TabsContent value="back">
        <ScrollArea className="h-[300px]">
          <Badge className="ml-auto w-full mb-4 flex items-center justify-center">
            <div className="font-bold">Front Category</div>
          </Badge>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-sm font-bold mb-2">Front Test Group</h3>
              {backCheckboxes.map((checkbox, index) => (
                <div key={index} className="mt-3 flex flex-row items-start space-x-3 space-y-0">
                  <input
                    type="checkbox"
                    id={checkbox.id}
                    className="labCheckbox"
                    value={checkbox.label}
                    checked={checkbox.isChecked}
                    onChange={(e) =>
                      handleCheckboxChange(checkbox.id, e.target.checked, checkbox.label, 'back')
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={checkbox.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {checkbox.label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </TabsContent>
          </Tabs>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  // Close the dialog or perform any other necessary actions
                }}
              >
                Close
              </Button>
            </DialogClose>
            <Button
              type="button"
              variant="primary"
              onClick={() => {
                // Perform any actions when Save button is clicked
              }}
            >
              Save
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
                  {index + 1}. {test.testName} ({test.tab})
                  <button
                    onClick={() => {
                      handleRemoveTest(test.id, test.tab);
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
    </section>
  );
};

export default LabPage;
