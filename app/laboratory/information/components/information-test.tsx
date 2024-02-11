"use client"

import React, { useEffect, useState } from "react";
import { FlaskConical, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import TestDetailDialog from "./detailtest"; // Make sure the path is correct

const InformationTest = () => {
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedTestDetail, setSelectedTestDetail] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../api/labtest");
        const data = await response.json();
        setSelectedTests(data.selectedTests || []); // Adjusted for direct use
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTestClick = (test) => {
    setSelectedTestDetail(test);
    setIsDialogOpen(true); // Opens the dialog
  };

  const closeDialog = () => {
    setSelectedTestDetail(null);
    setIsDialogOpen(false); // Closes the dialog
  };

  const filteredTests = selectedTests.filter((test) =>
    test.testName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid md:grid-cols">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Detail Parameter</CardTitle>
          <CardDescription>Test laboratory</CardDescription>
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search test..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {filteredTests.map((test, index) => (
              <div key={index} className="flex mt-2 items-center justify-between space-x-4 hover:bg-secondary/80 rounded-lg py-4">
                <div className="flex items-center space-x-4">
                  <FlaskConical className="h-5 w-5" />
                  <div>
                    <h2 className="text-sm font-bold">{test.testName}</h2>
                    <p className="text-xs text-muted-foreground">Rp. {test.price}</p>
                  </div>
                </div>
                <Button variant="outline" onClick={() => handleTestClick(test)}>
                  View
                </Button>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <TestDetailDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        testDetail={selectedTestDetail}
      />
    </div>
  );
};

export default InformationTest;