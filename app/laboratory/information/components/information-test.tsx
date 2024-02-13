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
import TestDetailDialog from "./detailtest";
import SkeletonLoader from "./loading";

const InformationTest = () => {
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedTestDetail, setSelectedTestDetail] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to control the loading indicator
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await fetch("../../api/labtest");
        const data = await response.json();
        setSelectedTests(data.selectedTests || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Stop loading regardless of the outcome
      }
    };

    fetchData();
  }, []);

  const handleTestClick = (test) => {
    setSelectedTestDetail(test);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedTestDetail(null);
    setIsDialogOpen(false);
  };

  const filteredTests = selectedTests.filter((test) =>
    test.testName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>🔬 Detail Parameter</CardTitle>
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
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              filteredTests.map((test, index) => (
                <div key={index} className="flex mt-2 items-center justify-between space-x-4 hover:bg-secondary/80 rounded-lg py-4 px-2">
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
              ))
            )}
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