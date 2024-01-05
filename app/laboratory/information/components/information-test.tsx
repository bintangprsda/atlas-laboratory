"use client"

import React, { useEffect, useState } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, FlaskConical, PlusCircle, Trash2  } from "lucide-react"
import { Input } from "@/components/ui/input"

const InformationTest = () => {
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
  }, []); // Empty dependency array ensures this effect runs once after the component mounts

  return (
    <div className="grid md:grid-cols">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Detail Parameter</CardTitle>
          <CardDescription>Test laboratory</CardDescription>
          <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search test..." className="pl-8 w-full sm:w-[500px] md:w-[950px]" />
        </div>
        </CardHeader>
        <CardContent>
        <ScrollArea className="h-[300px]">
          
            {selectedTests.map((test, index) => (
              <div key={index} className="flex mt-2 items-center justify-between space-x-4 hover:bg-gray-200 transition duration-300 ease-in-out">
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
            </div>
            
            
            ))}
          
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InformationTest;