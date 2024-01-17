// app/laboratory/testing/page.tsx
"use client";
import React, { useState } from 'react';
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
  const [checkboxes, setCheckboxes] = useState([
    { id: 'testID', label: 'FULL BLOOD COUNT', isChecked: false },
    { id: '01', label: 'D-DIMER', isChecked: false },
    { id: '03', label: 'HBSAG', isChecked: false },
    // Add more checkboxes as needed
  ]);

  const [selectedTests, setSelectedTests] = useState([]);

  const handleCheckboxChange = (id, isChecked, testName) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, isChecked } : checkbox
      )
    );

    if (isChecked) {
      setSelectedTests((prevTests) => [
        ...prevTests,
        { isSelected: true, testName },
      ]);
    } else {
      setSelectedTests((prevTests) =>
        prevTests.filter((test) => test.testName !== testName)
      );
    }
  };

  const handleRemoveTest = (index) => {
    setSelectedTests((prevTests) =>
      prevTests.map((test, i) =>
        i === index ? { ...test, isSelected: false } : test
      )
    );

    // Uncheck the corresponding checkbox
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox, i) =>
        i === index ? { ...checkbox, isChecked: false } : checkbox
      )
    );
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
                  <div className="font-bold">category</div>
                </Badge>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-bold mb-2">testGroup</h3>
                    {checkboxes.map((checkbox, index) => (
                      <div key={index} className="mt-3 flex flex-row items-start space-x-3 space-y-0">
                        <input
                          type="checkbox"
                          id={checkbox.id}
                          className="labCheckbox"
                          value={checkbox.label}
                          checked={checkbox.isChecked}
                          onChange={(e) =>
                            handleCheckboxChange(checkbox.id, e.target.checked, checkbox.label)
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
                  <div className="font-bold">category</div>
                </Badge>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="text-sm font-bold mb-2">testGroup</h3>
                    {/* Add more checkboxes for the 'back' tab if needed */}
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
                  {index + 1}. {test.testName}
                  <button
                    onClick={() => {
                      handleRemoveTest(index);
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
