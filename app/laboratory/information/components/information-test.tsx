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
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, FlaskConical, PlusCircle, Trash2  } from "lucide-react"
import { Input } from "@/components/ui/input"

const InformationTest = () => {
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedTestDetail, setSelectedTestDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../api/labtest");
        const data = await response.json();
        const { selectedTests } = data;
        setSelectedTests(selectedTests);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTestClick = (test) => {
    setSelectedTestDetail(test);
  };

  const closeDialog = () => {
    setSelectedTestDetail(null);
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
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search test..."
              className="pl-8 w-full sm:w-[500px] md:w-[950px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            {filteredTests.map((test, index) => (
              <div key={index} className="flex mt-2 items-center justify-between space-x-4 hover:bg-secondary/80 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="h-8 w-8 flex items-center justify-center rounded-full">
                    <FlaskConical className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-extrabold leading-none">{`${test.testName}`}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-xs text-muted-foreground">{`Rp. ${test.price}`}</p>
                    </div>
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => handleTestClick(test)}>
                      View
                    </Button>
                  </DialogTrigger>
                  {selectedTestDetail && (
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>{selectedTestDetail.testName}</DialogTitle>
                        <DialogDescription>Test Parameter Laboratory</DialogDescription>
                      </DialogHeader>
                      <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">Price: {selectedTestDetail.price}</div>
                      </div>
                      <DialogFooter className="sm:justify-start">
                        <Button type="button" variant="secondary" onClick={closeDialog}>
                          Close
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  )}
                </Dialog>
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