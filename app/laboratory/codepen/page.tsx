"use client"
import React, { useState, useEffect } from 'react';
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
import { testData } from './testData'; // Import testData

const LabPage: React.FC = () => {
  const [selectedTests, setSelectedTests] = useState([]);

  const handleCheckboxChange = (id, isChecked, testName, tab) => {
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
                {testData.front.map((category) => (
                  <div key={category.category}>
                    <Badge className="ml-auto w-full mb-4 flex items-center justify-center">
                      <div className="font-bold">{category.category}</div>
                    </Badge>
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.name} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h3 className="text-sm font-bold mb-2">{subcategory.name}</h3>
                          {subcategory.tests.map((test) => (
                            <div key={test.id} className="mt-3 flex flex-row items-start space-x-3 space-y-0">
                              <input
                                type="checkbox"
                                id={test.id}
                                className="labCheckbox"
                                checked={selectedTests.some(
                                  (selectedTest) => selectedTest.id === test.id
                                )}
                                onChange={(e) =>
                                  handleCheckboxChange(test.id, e.target.checked, test.name, 'front')
                                }
                              />
                              <label htmlFor={test.id} className="text-sm font-medium">
                                {test.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="back">
              <ScrollArea className="h-[300px]">
                {testData.back.map((category) => (
                  <div key={category.category}>
                    <Badge className="ml-auto w-full mb-4 flex items-center justify-center">
                      <div className="font-bold">{category.category}</div>
                    </Badge>
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.name} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h3 className="text-sm font-bold mb-2">{subcategory.name}</h3>
                          {subcategory.tests.map((test) => (
                            <div key={test.id} className="mt-3 flex flex-row items-start space-x-3 space-y-0">
                              <input
                                type="checkbox"
                                id={test.id}
                                className="labCheckbox"
                                checked={selectedTests.some(
                                  (selectedTest) => selectedTest.id === test.id
                                )}
                                onChange={(e) =>
                                  handleCheckboxChange(test.id, e.target.checked, test.name, 'back')
                                }
                              />
                              <label htmlFor={test.id} className="text-sm font-medium">
                                {test.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
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
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div id="selectedTests">
        <h2>Pemeriksaan yang Dipilih:</h2>
        <ul>
          {selectedTests.map((test, index) => (
            <li key={test.id}>
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