"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Search, MoreVertical , PlusCircle, Trash2, FlaskConical  } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { testData } from './testData';
import { getTubeName } from './tubeName';

export function Modals() {
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedTubes, setSelectedTubes] = useState([]);

  

  const handleCheckboxChange = (id, isChecked, testName, tab) => {
    const test = testData[tab][0].subcategories
      .flatMap((subcategory) => subcategory.tests)
      .find((test) => test.id === id);
  
    if (isChecked) {
      setSelectedTests((prevTests) => [
        ...prevTests,
        { id, isSelected: true, testName, tab, price: test?.price || 0 },
      ]);
  
      const tubeCode = getTubeCode(id);
      if (tubeCode && !selectedTubes.includes(tubeCode)) {
        setSelectedTubes((prevTubes) => [...prevTubes, tubeCode]);
      }
    } else {
      setSelectedTests((prevTests) => {
        const filteredTests = prevTests.filter(
          (test) => !(test.id === id && test.tab === tab)
        );
  
        const remainingTubeCodes = filteredTests.map((test) => getTubeCode(test.id));
  
        return [
          ...filteredTests,
          ...remainingTubeCodes
            .filter((tubeCode) => !selectedTubes.includes(tubeCode))
            .map((tubeCode) => ({ id: tubeCode, isSelected: false, testName: '', tab: '', price: 0 })),
        ];
      });
    }
  };
  
    
    

  const handleRemoveTest = (id, tab) => {
      setSelectedTests((prevTests) =>
        prevTests.filter((test) => !(test.id === id && test.tab === tab))
      );
    
      const remainingTests = selectedTests.filter(
        (test) => !(test.id === id && test.tab === tab)
      );
    
      // Extract unique tube codes from remaining tests
      const uniqueTubeCodes = [...new Set(remainingTests.map((test) => getTubeCode(test.id)))];
    
      setSelectedTubes(uniqueTubeCodes);
    };
  const getTubeCode = (testId) => {
      const findTest = (category) =>
        category.subcategories
          .flatMap((subcategory) => subcategory.tests)
          .find((test) => test.id === testId);
    
      const frontTest = findTest(testData.front[0]);
      const backTest = findTest(testData.back[0]);
    
      return frontTest?.codeTube || backTest?.codeTube;
    };


  
    return (
    <>
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

      <div className="w-full h-full flex items-center justify-center">
      <div className="w-full mx-auto max-w-[950] mb-5 grid md:grid-cols-2 gap-4">
      <Card className="mb-4 md:mb-0">
      <CardHeader>
        <CardTitle>List Test</CardTitle>
        <CardDescription>Select test laboratory</CardDescription>
      </CardHeader>
      <CardContent>
      <Separator className="my-2" />
        <ScrollArea className="h-[300px]">
        <div className="grid gap-6">
  {selectedTests.map((test, index) => (
    <div key={test.id} className="flex items-center mt-4">
      <div className="ml-3 h-8 w-8 flex items-center justify-center rounded-full">
        <FlaskConical className="h-5 w-5" />
      </div>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">
          {index + 1}. {test.testName} ({test.tab}) 
        </p>
        <p className="text-sm text-muted-foreground">Price: {test.price}</p>
      </div>
      <div className="ml-auto font-light text-sm">
        <Button variant="ghost" size="icon" onClick={() => handleRemoveTest(test.id, test.tab)}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ))}
</div>


        </ScrollArea>
      </CardContent>
    </Card>

    <Card className="mb-4 md:mb-0">
      <CardHeader>
        <CardTitle>List Test</CardTitle>
        <CardDescription>Select test laboratory</CardDescription>
      </CardHeader>
      <CardContent>
      <Separator className="my-2" />
        <ScrollArea className="h-[300px]">
        <div className="grid gap-6">
  {selectedTubes.map((tubeCode) => (
    <div key={tubeCode} className="flex items-center mt-4">
      <div className="ml-3 h-8 w-8 flex items-center justify-center rounded-full">
        <FlaskConical className="h-5 w-5" />
      </div>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{getTubeName(tubeCode)}</p>
        <p className="text-sm text-muted-foreground">Kode {tubeCode}</p>
      </div>
      <div className="ml-auto font-light text-sm">
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ))}
</div>


        </ScrollArea>
      </CardContent>
    </Card>
      </div>
      </div>

     

    </>
  );
}