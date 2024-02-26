"use client"

import React, { useEffect, useState } from "react";
import { Search, FlaskConical, Eye, Edit, Trash2 } from "lucide-react";
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
import TestDetailDialog from "./detailstest";
import Deleted from "./deleted"
import EditedTest from "./edited"
import AddTest from "./add-test"
import SkeletonLoader from "./loading";

const InformationTest = () => {
  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedTestDetail, setSelectedTestDetail] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false); // State for edit dialog
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("../../api/labtest");
        const data = await response.json();
        setSelectedTests(data.selectedTests || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTestClick = (test) => {
    setSelectedTestDetail(test);
    setIsDialogOpen(true);
  };

  const handleEditClick = (test) => {
    setSelectedTestDetail(test);
    setIsEditDialogOpen(true); // Open the edit dialog
  };

  const closeDialog = () => {
    setSelectedTestDetail(null);
    setIsDialogOpen(false);
    setIsEditDialogOpen(false); // Also close the edit dialog
  };

  const filteredTests = selectedTests.filter(test =>
    test.testName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteClick = (testName) => {
    setItemToDelete(testName);
    setIsDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting", itemToDelete);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="grid md:grid-cols-3 gap-4 ">
      <Card className="md:col-span-3">
        <CardHeader>
          <CardTitle>🔬 Detail Parameter </CardTitle>
          <CardDescription>Test laboratory <AddTest/></CardDescription>
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search test..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div>

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
                  <div className="flex items-center space-x-2"> {/* Adjusted layout here */}
                    <button className="p-2 hover:bg-gray-100 rounded" onClick={() => handleTestClick(test)}><Eye className="h-5 w-5" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded" onClick={() => handleEditClick(test)}><Edit className="h-5 w-5" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded" onClick={() => handleDeleteClick(test.testName)}><Trash2 className="h-5 w-5" /></button>
                  </div>
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
      <EditedTest
        isOpen={isEditDialogOpen}
        onClose={closeDialog}
        testDetail={selectedTestDetail}
      />
      <Deleted
        isOpen={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onConfirm={handleConfirmDelete}
        itemName={itemToDelete}
      />
    </div>
  );
};

export default InformationTest;