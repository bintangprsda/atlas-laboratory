"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Search, MoreVertical , PlusCircle, Trash2, FlaskConical  } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { testData } from './data';
import { getTubeName} from './tubeName';
import { getTubeColorClass } from './tubeColor';
import DropdownSelect from './select-class';

export function Modals() {
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedTubes, setSelectedTubes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
  console.log(selectedTests);
}, [selectedTests]);



  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults([]);
    } else {
      const results = [];
      ['front', 'back'].forEach((tab) => {
        testData[tab][0].subcategories.forEach((subcategory) => {
          subcategory.tests.forEach((test) => {
            if (test.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              results.push({ ...test, tab });
            }
          });
        });
      });
      setSearchResults(results);
    }
  }, [searchTerm]);

  const handleCheckboxChange = (id, isChecked, testName, tab) => {
    let foundTest;
    testData[tab].forEach(category => {
      category.subcategories.forEach(subcategory => {
        const test = subcategory.tests.find(t => t.id === id);
        if (test) {
          foundTest = test;
        }
      });
    });
  
    if (!foundTest) {
      console.error("Test not found");
      return;
    }
  
    if (isChecked) {
      setSelectedTests(prevTests => {
        const existingIndex = prevTests.findIndex(t => t.id === id && t.tab === tab);
        if (existingIndex !== -1) {
          // Update existing test
          const updatedTests = [...prevTests];
          updatedTests[existingIndex] = {
            ...updatedTests[existingIndex],
            isSelected: true,
            testName,
            price: foundTest.price || 0,
            result: foundTest.result,
            keterangan: foundTest.keterangan,
          };
          return updatedTests;
        } else {
          // Add new test
          const tubeCode = getTubeCode(id);
          const newTest = {
            id,
            isSelected: true,
            testName,
            tab,
            price: foundTest.price || 0,
            result: foundTest.result,
            keterangan: foundTest.keterangan,
          };
          if (tubeCode && !selectedTubes.includes(tubeCode)) {
            setSelectedTubes(prev => [...new Set([...prev, tubeCode])]);
          }
          return [...prevTests, newTest];
        }
      });
    } else {
      // Handle test unselection
      setSelectedTests(prevTests => {
        const updatedTests = prevTests.filter(t => !(t.id === id && t.tab === tab));
        const tubeCode = getTubeCode(id);
        
        // Check if any remaining test uses the same tubeCode
        const isTubeCodeStillUsed = updatedTests.some(test => getTubeCode(test.id) === tubeCode);
        
        if (!isTubeCodeStillUsed) {
          // If no other test uses this tubeCode, remove it from selectedTubes
          setSelectedTubes(prevTubes => prevTubes.filter(tCode => tCode !== tubeCode));
        }
        
        return updatedTests;
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
  const findTestInCategories = (categories) =>
    categories.flatMap(category =>
      category.subcategories.flatMap(subcategory =>
        subcategory.tests.find(test => test.id === testId)
      )
    ).find(test => test); // Return the first found test

  const test = findTestInCategories(testData.front) || findTestInCategories(testData.back);
  return test?.codeTube;
};


    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
    const handleClassChange = (value) => {
      setSelectedClass(value);
      console.log("Selected class:", value); // For debugging
    };
  
    const calculateDiscount = (amount, classType) => {
      const discountRates = { Class1: 15, Class2: 10, Class3: 5 };
      // Check if classType exists in discountRates to avoid NaN results
      const discount = discountRates[classType] ? discountRates[classType] / 100 : 0;
      return amount - (amount * discount);
    };
    
  
    const rawTotalPrice = selectedTests.reduce((acc, test) => acc + parseFloat(test.price), 0);
    const totalPrice = selectedClass ? calculateDiscount(rawTotalPrice, selectedClass) : rawTotalPrice;
  
    const formattedTotalPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(totalPrice);
  
    console.log("Total Price:", formattedTotalPrice); // Debugging log

    return (
    <>  
     <div className="w-full mx-auto max-w-[950] grid md:grid-cols-2 gap-4">
          <div className="grid gap-2">
          <Select onValueChange={handleClassChange} value={selectedClass}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Class" />
        </SelectTrigger>
        <SelectContent>
          {/* It's crucial that the value attribute matches the expected format */}
          <SelectItem value="Class1">Class 1 </SelectItem>
          <SelectItem value="Class2">Class 2 </SelectItem>
          <SelectItem value="Class3">Class 3 </SelectItem>
        </SelectContent>
      </Select>
          </div>
        <div className="grid gap-2">
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
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          {searchResults.length > 0 && (
            <div className="p-2">
              <h3 className="text-sm font-semibold">Search Results:</h3>
              <ScrollArea className="h-[50px]">
              {searchResults.map((test) => (
                <div key={test.id} className="text-xs flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id={`search-${test.id}`}
                    className="labCheckbox"
                    checked={selectedTests.some((selectedTest) => selectedTest.id === test.id)}
                    onChange={(e) => handleCheckboxChange(test.id, e.target.checked, test.name, test.tab)}
                  />
                  <label htmlFor={`search-${test.id}`}>{test.name}</label>
                </div>
              ))}
              </ScrollArea>
            </div>
          )}
          <Tabs defaultValue="front" className="w-full sm:w-[900px]">
            <TabsList className="grid w-full sm:w-[500px] md:w-[900px] grid-cols-2">
              <TabsTrigger value="front">Front</TabsTrigger>
              <TabsTrigger value="back">Back</TabsTrigger>
            </TabsList>
            <TabsContent value="front">
            <ScrollArea className="h-[300px]">
  {testData.front.map((category) => (
    <div key={category.category} className="mb-2">
      <Badge className="w-full mb-4 flex justify-center">
        <div className="font-bold">{category.category}</div>
      </Badge>
      <div className="flex flex-wrap justify-center md:justify-start">
        {category.subcategories.map((subcategory) => (
          <div key={subcategory.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-2">
            <h3 className="text-sm font-bold mb-2">{subcategory.name}</h3>
            {subcategory.tests.map((test) => (
              <div key={test.id} className="flex flex-col mb-2">
                <label htmlFor={test.id} className="flex items-center text-xs font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    id={test.id}
                    className="labCheckbox mr-2"
                    checked={selectedTests.some(selectedTest => selectedTest.id === test.id)}
                    onChange={(e) => handleCheckboxChange(test.id, e.target.checked, test.name, 'front')}
                  />
                  {test.name}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  ))}
</ScrollArea>

            </TabsContent>
            <TabsContent value="back">
            <ScrollArea className="h-[300px]">
  {testData.back.map((category) => (
    <div key={category.category} className="mb-2">
      <Badge className="w-full mb-4 flex justify-center">
        <div className="font-bold">{category.category}</div>
      </Badge>
      <div className="flex flex-wrap justify-center md:justify-start">
        {category.subcategories.map((subcategory) => (
          <div key={subcategory.name} className="w-full md:w-1/2 lg:w-1/3 px-2 mb-2">
            <h3 className="text-sm font-bold mb-2">{subcategory.name}</h3>
            {subcategory.tests.map((test) => (
              <div key={test.id} className="flex flex-col mb-2">
                <label htmlFor={test.id} className="flex items-center text-xs font-medium cursor-pointer">
                  <input
                    type="checkbox"
                    id={test.id}
                    className="labCheckbox mr-2"
                    checked={selectedTests.some(selectedTest => selectedTest.id === test.id)}
                    onChange={(e) => handleCheckboxChange(test.id, e.target.checked, test.name, 'back')}
                  />
                  {test.name}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
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
        </div>
        </div>

      <div className="w-full h-full flex items-center justify-center">
      <div className="w-full mx-auto max-w-[950] mb-5 grid md:grid-cols-2 gap-4">
      <Card className="mb-2 md:mb-0">
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
              <div className={`ml-3 h-10 w-10 flex items-center justify-center rounded-sm ${getTubeColorClass(getTubeCode(test.id))}`}>
              <FlaskConical className="flex-none h-5 w-5 text-white" style={{ height: '20px', width: '20px' }} />
            </div>
              <div className="flex justify-between w-full">
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {index + 1}. {test.testName}
                </p>
                <p className="text-xs text-muted-foreground">
                  Price: {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(calculateDiscount(test.price, selectedClass))}
                </p>
                <p className="text-xs text-muted-foreground">
                  Result: {test.result}
                </p>
              </div>
              <div className="space-y-1 text-right">
                <div className="font-light text-xs">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" onClick={() => handleRemoveTest(test.id, test.tab)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Remove</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                {test.keterangan && (
                  <p className="text-xs italic text-rose-500 text-muted-foreground">
                  {test.keterangan}
                </p>
                )}
              </div>
            </div>
          </div>
          ))}

        </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="w-full">
        Total Price: {formattedTotalPrice}
          </div>
      </CardFooter>
    </Card>
    
    <Card className="mb-2 md:mb-0">
      <CardHeader>
        <CardTitle>Tube List</CardTitle>
        <CardDescription>Select test laboratory</CardDescription>
      </CardHeader>
      <CardContent>
      <Separator className="my-2" />
        <ScrollArea className="h-[300px]">
        <div className="grid gap-6">
          {selectedTubes.map((tubeCode) => (
            <div key={tubeCode} className="flex items-center mt-4">
              <div className={`ml-3 h-10 w-10 flex items-center justify-center rounded-sm ${getTubeColorClass(tubeCode)}`}>
                <FlaskConical className="flex-none h-5 w-5 text-white"  />
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
      <CardFooter>
      <div className="w-full text-right">
          <Button variant="default">
              save
            </Button>
      </div>
        </CardFooter>
    </Card>
    </div>
      </div>
      </>
  );
}