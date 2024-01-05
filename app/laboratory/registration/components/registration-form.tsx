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
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Trash2, PlusCircle, FlaskConical } from "lucide-react"
import { Badge } from "@/components/ui/badge"



const RegistrationForm = () => {
  const [selectedTests, setSelectedTests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API endpoint
        const response = await fetch("../../api");
        const data = await response.json();

        // Extract selectedTests from the response
        const { selectedTests } = data;

        // Update state with selectedTests
        setSelectedTests(selectedTests);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); //
  return (
    <Card>
      <CardHeader>
        <CardTitle>Patient data</CardTitle>
        <CardDescription>Input data patient</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="subject">Medical Record</Label>
            <Input id="subject" name="medicalrecord" type="number" placeholder="Input Number MR..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Patient Name</Label>
            <Input id="patientName" name="patientName" type="text" placeholder="Input Patient Name..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Date of Birth</Label>
            <Input id="birth" name="birth" type="date" placeholder="I need help with..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Gender</Label>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Female</Label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="subject">Doctor Name</Label>
            <Input id="doctorName" name="doctorName" type="text" placeholder="Input name doctor..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">Diagnosa</Label>
            <Input id="diagnosa" name="diagnosa" type="text" placeholder="Input name doctor..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="security-level">Send to Laboratory</Label>
            <Select defaultValue="2">
              <SelectTrigger id="security-level">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">SH Lippo Village</SelectItem>
                <SelectItem value="2">SH Kebon Jeruk</SelectItem>
                <SelectItem value="3">SH MRCCC</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Separator className="my-1" />
      </CardContent>
      <div className="ml-6 mr-6 mb-5 grid md:grid-cols-2 gap-4">
        <Card className="mb-4 md:mb-0">
          <CardHeader>
            <CardTitle>Test Laboratory</CardTitle>
            <CardDescription>
              Select your test laboratory
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="my-2" />
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
              <div className="grid gap-6">
                <ScrollArea className="h-[300px]">
                {selectedTests.map((test, index) => (
                  <div className="flex mt-2 items-center justify-between space-x-4 ">
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
                    <Button variant="ghost" size="icon">
                      <PlusCircle className="h-4 w-4" />
                    </Button>

                  </div>
                  ))}
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Share this document</CardTitle>
            <CardDescription>
              Anyone with the link can view this document.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Separator className="my-2" />
            <div className="space-y-4">
              <div className="grid gap-6">
                <ScrollArea className="h-[300px]">
                  <div className="flex mt-2 items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                      

                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>

                  </div>
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <CardFooter className="justify-between space-x-2">
        <Button variant="ghost" className="w-full sm:w-auto">Clear</Button>
        <Button className="w-full sm:w-auto">Submit</Button>
      </CardFooter>

    </Card>
  );
};

export default RegistrationForm;
