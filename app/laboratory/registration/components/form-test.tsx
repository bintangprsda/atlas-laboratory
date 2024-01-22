"use client"
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Trash2, PlusCircle, FlaskConical } from "lucide-react"

const FormTest = () => {
  const [selectedTests, setSelectedTests] = useState([]);
  const [addedTests, setAddedTests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../api/labtest');
        const data = await response.json();

        const { selectedTests } = data;
        setSelectedTests(selectedTests);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };

    fetchData();
  }, []);

  const handleAddTest = (test) => {
    if (!addedTests.find((addedTest) => addedTest.testName === test.testName)) {
      setAddedTests([...addedTests, test]);
    }
  };

  const handleRemoveTest = (index) => {
    const updatedAddedTests = [...addedTests];
    updatedAddedTests.splice(index, 1);
    setAddedTests(updatedAddedTests);
  };

  const calculateTotal = () => {
    return addedTests.reduce((total, test) => total + parseFloat(test.price), 0);
  };

  const filteredTests = selectedTests.filter((test) =>
    test.testName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async () => {
    try {
      const total = calculateTotal();
      const response = await fetch('../../../api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Include other form data as needed
          selectedTests: addedTests,
          total, // Add the total field
        }),
      });

      const data = await response.json();

      // Handle the response from the server
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };


  

  return (
    <>
      <div className="ml-6 mr-6 mb-5 grid md:grid-cols-2 gap-4">
      <Card className="mb-4 md:mb-0">
          <CardHeader>
            <CardTitle>Test Laboratory</CardTitle>
            <CardDescription>Select your test laboratory</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <ScrollArea className="h-[300px]">
              {filteredTests.map((test, index) => (
                <div key={index} className="flex mt-2 items-center hover:bg-secondary/80 rounded-lg justify-between space-x-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-8 w-8 flex items-center justify-center rounded-full">
                      <FlaskConical className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-sm font-extrabold leading-none">
                        {`${test.testName}`}
                      </h2>
                      <div className="flex items-center space-x-2 mt-1">
                        <p className="text-xs text-muted-foreground">{`Rp. ${test.price}`}</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleAddTest(test)}>
                    <PlusCircle className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Add test</CardTitle>
            <CardDescription>-</CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="my-2" />
            <div className="space-y-4">
              <div className="grid gap-6">
                <ScrollArea className="h-[300px]">
                  {addedTests.map((test, index) => (
                    <div key={index} className="flex mt-2 items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <p className="text-sm font-extrabold leading-none">{`${index + 1}. ${test.testName}`}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <p className="text-xs text-muted-foreground">{`Rp. ${test.price}`}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => handleRemoveTest(index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </ScrollArea>
                <div>
                <p className="text-sm font-bold">Total Price:</p>
                <p className="text-lg font-extrabold">Rp. {Number(calculateTotal())}</p>
              </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Button onClick={handleSubmit}>Submit Form</Button>
      </div>
    </>
  );
};

export default FormTest;