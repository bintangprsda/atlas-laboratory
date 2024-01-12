// Import necessary dependencies and components
"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, FlaskConical, MoreVertical , Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";


export function TestTube() {
  // State to hold the fetched data
  const [selectedTests, setSelectedTests] = useState([]);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch("../../../api/labtest");
        const data = await response.json();

        // Update component state with the fetched data
        setSelectedTests(data.selectedTests);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <Card className="mb-4 md:mb-0">
      <CardHeader>
        <CardTitle>List Test</CardTitle>
        <CardDescription>Select test laboratory</CardDescription>
      </CardHeader>
      <CardContent>
        <Separator className="my-2" />
        <div className="space-y-8 p-2">
          <div className="grid gap-6">
            <ScrollArea className="h-[300px]">
              {/* Map over the selectedTests and render each item */}
              {selectedTests.map((test, index) => (
                <div className="flex items-center mt-4" key={index}>
                  {/* Use test data to populate Avatar, completeName, hospital, and role */}
                  <div className="h-8 w-8 flex items-center justify-center rounded-full">
                        <FlaskConical className="h-5 w-5" />
                      </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {test.testName}
                    </p>
                    <p className="text-sm text-muted-foreground">{test.price}</p>
                  </div>
                  <div className="ml-auto font-light text-sm">
                  <Button variant="ghost" size="icon"> 
                    <MoreVertical  className="h-4 w-4" />
                  </Button>
                  
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
